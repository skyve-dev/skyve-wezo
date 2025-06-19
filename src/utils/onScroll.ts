type AnchorValue = 'top' | 'center' | 'bottom' | number;

// Rect now only contains vertical properties
type Rect = { top: number; height: number };

interface Anchor {
    element: AnchorValue;
    container: AnchorValue;
}

interface ScrollProgressOptions {
    start?: Anchor;
    end?: Anchor;
    threshold?: number;
    rootMargin?: string;
    debug?: boolean;
    container?: Element | Window | null;
    smooth?: boolean;
}

const empty = () => {
};

export function onScroll(
    element: Element | null,
    callback: ((progress: number) => void) | null,
    options: ScrollProgressOptions = {}
): () => void {

    if (!element) {
        console.warn('onScrollProgressInViewAdvanced: Target element is null or undefined. Aborting.');
        return empty;
    }
    if (!callback) {
        console.warn('onScrollProgressInViewAdvanced: Callback function is null or undefined. Aborting.');
        return empty;
    }

    const container = options.container ?? window;
    const isWindow = container === window;
    const threshold = options.threshold ?? 0;
    const rootMargin = options.rootMargin;
    const startAnchor = options.start ?? {element: 'top', container: 'bottom'};
    const endAnchor = options.end ?? {element: 'bottom', container: 'top'};

    const containerElement: HTMLElement = isWindow ? document.documentElement : (container as HTMLElement);
    const smoothUpdate = options.smooth ?? true;
    let isTracking = false;
    let animationFrameId: number = -1;
    let prevProgress: number | undefined = undefined;

    // Cached metrics (vertical only)
    let initialElementViewportTop: number = 0;
    let initialElementHeight: number = 0;

    let initialContainerOrWindowScrollTop: number = 0; // scrollY for window, scrollTop for containerElement

    let initialNonWindowContainerViewportTop: number = 0;
    let initialNonWindowContainerHeight: number = 0;
    let initialWindowScrollYWhenMetricsCaptured: number = 0;

    const debugLines = createDebugLines({
        containerElement: container,
        enable: options.debug ?? false,
        isWindowContainer: isWindow
    });

    function captureInitialMetrics() {
        if (!element) return;

        const elemBCR = element.getBoundingClientRect();
        initialElementViewportTop = elemBCR.top;
        initialElementHeight = elemBCR.height;

        initialWindowScrollYWhenMetricsCaptured = window.scrollY;

        if (isWindow) {
            initialContainerOrWindowScrollTop = initialWindowScrollYWhenMetricsCaptured;
            // Window height is dynamic, no need to cache it like non-window container height
        } else if (containerElement instanceof HTMLElement) {
            initialContainerOrWindowScrollTop = containerElement.scrollTop;
            const containerBCR = containerElement.getBoundingClientRect();
            initialNonWindowContainerViewportTop = containerBCR.top;
            initialNonWindowContainerHeight = containerBCR.height;
        }
    }

    function getCalculatedContainerRect(): Rect {
        if (isWindow) {
            return {top: 0, height: window.innerHeight};
        }
        // Calculate current viewport top for non-window container based on window scroll
        const currentContainerViewportTop = initialNonWindowContainerViewportTop - (window.scrollY - initialWindowScrollYWhenMetricsCaptured);
        return {
            top: currentContainerViewportTop,
            height: initialNonWindowContainerHeight // Use cached height
        };
    }

    function updateProgress() {
        if (!isTracking || !element) {
            return;
        }

        const calculatedContainerRect = getCalculatedContainerRect();

        const currentScrollInContainerOrWindow = isWindow
            ? window.scrollY
            : (containerElement as HTMLElement).scrollTop;

        // Calculate scroll delta within the relevant scroll context
        const scrollDelta = currentScrollInContainerOrWindow - initialContainerOrWindowScrollTop;

        // Calculate current element's viewport top.
        // If element is inside a scrolling container, its viewport top changes due to BOTH container scroll AND window scroll.
        // The `initialElementViewportTop` is relative to viewport when captured.
        // `scrollDelta` for a non-window container accounts for its internal scroll.
        // We also need to account for how the *container itself* moved within the viewport due to window scroll.
        let currentElementViewportTop = initialElementViewportTop;
        if (isWindow) {
            currentElementViewportTop -= scrollDelta; // scrollDelta is window.scrollY - initialWindowScrollY
        } else {
            // For element inside a scrolling container:
            // 1. Adjust for container's internal scroll:
            currentElementViewportTop -= scrollDelta; // scrollDelta is container.scrollTop - initialContainerScrollTop
            // 2. Adjust for container's movement in viewport due to window scroll:
            currentElementViewportTop -= (window.scrollY - initialWindowScrollYWhenMetricsCaptured);
        }

        const calculatedElemRect: Rect = {
            top: currentElementViewportTop,
            height: initialElementHeight // Use cached height
        };

        const startAnchorPosition = parseAnchor(startAnchor, calculatedElemRect, calculatedContainerRect);
        const endAnchorPosition = parseAnchor(endAnchor, calculatedElemRect, calculatedContainerRect);
        const distance = endAnchorPosition - startAnchorPosition;
        const current = 0 - startAnchorPosition;

        let progress = distance === 0 ? (current >= 0 ? 1 : 0) : current / distance;
        progress = Math.min(Math.max(progress, 0), 1);

        if (prevProgress !== progress) {
            callback!(progress);
        }
        prevProgress = progress;
        if (options.debug === true) {
            debugLines.updateDebugLines({
                progress,
                elemRect: calculatedElemRect,
                containerRect: calculatedContainerRect,
                endAnchor,
                startAnchor,
                currentWindowScrollY: window.scrollY,
                currentContainerElementScrollTop: isWindow ? 0 : (containerElement as HTMLElement).scrollTop
            });
        }

        if (smoothUpdate) {
            animationFrameId = requestAnimationFrame(updateProgress);
        }
    }

    function handleExternalChanges() {
        // Re-capture all metrics on resize/orientation change
        captureInitialMetrics();
        if (isTracking) { // only call updateProgress if already tracking
            updateProgress();
        }
    }

    function startTracking() {
        if (isTracking) return;
        isTracking = true;
        captureInitialMetrics();

        if (!smoothUpdate) {
            getScrollTarget().addEventListener('scroll', updateProgress, {passive: true});
            window.addEventListener('resize', handleExternalChanges);
            window.addEventListener('orientationchange', handleExternalChanges);
            updateProgress(); // Initial update for non-smooth
        } else {
            // For smooth updates, resize/orientation change should just update metrics.
            // The requestAnimationFrame loop will pick up the changes.
            window.addEventListener('resize', handleExternalChanges);
            window.addEventListener('orientationchange', handleExternalChanges);
            animationFrameId = requestAnimationFrame(updateProgress); // Start RAF loop
        }
    }

    function stopTracking() {
        if (!isTracking) return;
        isTracking = false;
        if (!smoothUpdate) {
            getScrollTarget().removeEventListener('scroll', updateProgress);
        } else {
            cancelAnimationFrame(animationFrameId);
        }
        // Common listeners to remove regardless of smoothUpdate
        window.removeEventListener('resize', handleExternalChanges);
        window.removeEventListener('orientationchange', handleExternalChanges);
    }

    function getScrollTarget(): HTMLElement | Window {
        return isWindow ? window : containerElement;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
                startTracking();
            } else {
                // If it was tracking and now is not intersecting, stop tracking.
                if (isTracking) {
                    stopTracking();
                }
                debugLines.clearDebugLines();
            }
        },
        {
            root: isWindow ? null : containerElement,
            threshold: [threshold],
            rootMargin: rootMargin
        }
    );

    observer.observe(element);

    return () => {
        observer.disconnect();
        stopTracking();
        debugLines.clearDebugLines();
    };
}

function parseAnchorValue(val: AnchorValue): number {
    if (typeof val === "number") {
        return Math.max(0, Math.min(1, val));
    }
    return {top: 0, center: 0.5, bottom: 1}[val];
}

function parseAnchor(
    input: Anchor,
    elemRect: Rect, // Rect only has top, height
    containerRect: Rect // Rect only has top, height
): number {
    const elemPos = elemRect.top + parseAnchorValue(input.element) * elemRect.height;
    const containerPos = containerRect.top + parseAnchorValue(input.container) * containerRect.height;
    return elemPos - containerPos;
}

interface DebugLinesProps {
    containerElement: Element | Window;
    enable: boolean;
    isWindowContainer: boolean;
}

interface UpdateDebugLinesProps {
    elemRect: Rect; // Rect only has top, height
    containerRect: Rect; // Rect only has top, height
    startAnchor: Anchor;
    endAnchor: Anchor;
    progress: number;
    currentWindowScrollY: number;
    currentContainerElementScrollTop: number;
}

function createDebugLines(props: DebugLinesProps) {
    const {containerElement, enable, isWindowContainer} = props;
    const debugElements: HTMLElement[] = [];

    function updateDebugLines(updateProps: UpdateDebugLinesProps) {
        if (!enable) {
            return;
        }
        const {
            elemRect, containerRect, startAnchor, endAnchor, progress,
            currentWindowScrollY, currentContainerElementScrollTop
        } = updateProps;

        const parent = isWindowContainer ? document.body : (containerElement as HTMLElement);
        if (debugElements.length === 0) {
            debugElements.push(createLineElement('orangered', 'Container Close'));
            debugElements.push(createLineElement('limegreen', 'Container Open'));
            debugElements.push(createLineElement('deepskyblue', 'Element Open'));
            debugElements.push(createLineElement('deepskyblue', 'Element Close'));
            const progressLabel = createLineElement('gold', `Progress: 0.00`);
            progressLabel.style.height = 'auto';
            progressLabel.style.background = 'transparent'; // No background for the label container itself
            debugElements.push(progressLabel);

            debugElements.forEach(el => {
                // Ensure parent for debug lines exists (it should, as containerElement is checked)
                if (parent === document.body && !document.body.contains(el)) {
                    document.body.appendChild(el);
                } else if (parent !== document.body && !(parent as HTMLElement).contains(el)) {
                    (parent as HTMLElement).appendChild(el);
                }
            });
        }

        const [
            containerCloseLine, containerOpenLine,
            elementOpenLine, elementCloseLine,
            progressLabelElement
        ] = debugElements;

        // Viewport-relative anchor positions
        const containerCloseAnchorVPY = containerRect.top + parseAnchorValue(endAnchor.container) * containerRect.height;
        const containerOpenAnchorVPY = containerRect.top + parseAnchorValue(startAnchor.container) * containerRect.height;
        const elementOpenAnchorVPY = elemRect.top + parseAnchorValue(startAnchor.element) * elemRect.height;
        const elementCloseAnchorVPY = elemRect.top + parseAnchorValue(endAnchor.element) * elemRect.height;

        // Convert viewport-relative Y to document-relative Y for window container,
        // or to container-content-relative Y for non-window container.
        if (isWindowContainer) {
            containerCloseLine.style.top = `${containerCloseAnchorVPY + currentWindowScrollY}px`;
            containerOpenLine.style.top = `${containerOpenAnchorVPY + currentWindowScrollY}px`;
            elementOpenLine.style.top = `${elementOpenAnchorVPY + currentWindowScrollY}px`;
            elementCloseLine.style.top = `${elementCloseAnchorVPY + currentWindowScrollY}px`;

            // elemRect.top is viewport-relative, add scrollY to make it document-relative for positioning
            progressLabelElement.style.top = `${elemRect.top + currentWindowScrollY + 20}px`;
            progressLabelElement.style.left = `20px`; // Fixed horizontal position
        } else {
            // Convert viewport-relative Y to Y relative to container's scrollable content
            const toContainerContentTop = (vpY: number) => (vpY - containerRect.top) + currentContainerElementScrollTop;
            containerCloseLine.style.top = `${toContainerContentTop(containerCloseAnchorVPY)}px`;
            containerOpenLine.style.top = `${toContainerContentTop(containerOpenAnchorVPY)}px`;
            elementOpenLine.style.top = `${toContainerContentTop(elementOpenAnchorVPY)}px`;
            elementCloseLine.style.top = `${toContainerContentTop(elementCloseAnchorVPY)}px`;

            // elemRect.top and containerRect.top are viewport-relative
            const labelTopInContainerContent = (elemRect.top - containerRect.top) + currentContainerElementScrollTop + 20;
            progressLabelElement.style.top = `${labelTopInContainerContent}px`;
            progressLabelElement.style.left = `20px`; // Fixed horizontal position
        }

        progressLabelElement.innerHTML = `<div style="position:absolute;left:4px;top:-8px;color:gold;font-size:10px;font-family:monospace; white-space:nowrap;">Progress: ${progress.toFixed(2)}</div>`;
    }

    function createLineElement(color: string, label: string): HTMLElement {
        const div = document.createElement('div');
        // Ensure width is 100% of its containing block (body or custom container)
        // For custom container, ensure it has position:relative or similar for correct 100% width.
        div.style.cssText = `position:absolute;height:1px;background:${color};width:100%;left:0;z-index:9999;pointer-events:none;box-sizing:border-box;`;
        div.innerHTML = `<div style="position:absolute;left:4px;top:-8px;color:${color};font-size:10px;font-family:monospace;white-space:nowrap;">${label}</div>`;
        return div;
    }

    function clearDebugLines() {
        debugElements.forEach((el) => el.remove());
        debugElements.length = 0;
    }

    return {
        clearDebugLines,
        updateDebugLines
    };
}
