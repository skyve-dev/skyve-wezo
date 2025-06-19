// Define a type for the values we can map
export type MappableValue = number | string;

// Define the properties for our main function
export interface ValueMapperProps {
    from: MappableValue;
    to: MappableValue;
    progress: number;
    easing?: (t: number) => number;
}

/**
 * Maps a value from a starting point to an ending point based on progress.
 * Supports numbers, percentages ('0%'-'100%'), hex colors ('#RRGGBB'), and rgb/rgba colors.
 *
 * @param props - The mapping properties.
 * @returns The interpolated value in the same format as the input.
 */
export function valueMapper(props: ValueMapperProps): MappableValue {
    const { from, to, easing, progress } = props;

    // 1. Sanitize progress and apply easing
    const clampedProgress = Math.min(Math.max(progress, 0), 1);
    const easedProgress = (easing ?? linear)(clampedProgress);

    // 2. Handle different value types
    if (typeof from === 'number' && typeof to === 'number') {
        return from + (to - from) * easedProgress;
    }

    if (typeof from === 'string' && typeof to === 'string') {
        // Percentage mapping
        if (from.endsWith('%') && to.endsWith('%')) {
            const fromValue = parseFloat(from);
            const toValue = parseFloat(to);
            const result = fromValue + (toValue - fromValue) * easedProgress;
            return `${result}%`;
        }

        // Color mapping (Hex)
        if (from.startsWith('#') && to.startsWith('#')) {
            return mapColor(from, to, easedProgress);
        }

        // Color mapping (RGB/RGBA)
        if (from.startsWith('rgb') && to.startsWith('rgb')) {
            return mapColor(from, to, easedProgress);
        }
    }

    // Throw an error for unsupported or mismatched types
    throw new Error(`valueMapper: Mismatched or unsupported types for 'from' (${from}) and 'to' (${to}).`);
}


// --- Color Mapping Helpers ---

// A simple structure to hold parsed color components
type ColorComponents = [number, number, number, number | undefined];

/**
 * Interpolates between two color strings (hex or rgb/rgba).
 */
function mapColor(from: string, to: string, progress: number): string {
    const fromComps = parseColor(from);
    const toComps = parseColor(to);

    const hasAlpha = fromComps[3] !== undefined && toComps[3] !== undefined;

    const r = Math.round(fromComps[0] + (toComps[0] - fromComps[0]) * progress);
    const g = Math.round(fromComps[1] + (toComps[1] - fromComps[1]) * progress);
    const b = Math.round(fromComps[2] + (toComps[2] - fromComps[2]) * progress);

    if (hasAlpha) {
        const a = fromComps[3]! + (toComps[3]! - fromComps[3]!) * progress;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    } else {
        // If the original was hex, it's better to return hex for consistency.
        if (from.startsWith('#')) {
            return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
        }
        return `rgb(${r}, ${g}, ${b})`;
    }
}

/**
 * Parses a color string (hex, rgb, rgba) into its R, G, B, A components.
 */
function parseColor(color: string): ColorComponents {
    // Handle Hex
    if (color.startsWith('#')) {
        let hex = color.slice(1);
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        if (hex.length === 3) {
            hex = hex.split('').map(char => char + char).join('');
        }
        const r = parseInt(hex.substring(0, 2), 16);
        const g = parseInt(hex.substring(2, 4), 16);
        const b = parseInt(hex.substring(4, 6), 16);
        return [r, g, b, undefined];
    }

    // Handle RGB/RGBA
    const match = color.match(/rgba?\((\s*\d+\s*),(\s*\d+\s*),(\s*\d+\s*)(?:,(\s*[\d.]+\s*))?\)/);
    if (match) {
        const r = parseInt(match[1], 10);
        const g = parseInt(match[2], 10);
        const b = parseInt(match[3], 10);
        const a = match[4] !== undefined ? parseFloat(match[4]) : undefined;
        return [r, g, b, a];
    }

    throw new Error(`Invalid color format: ${color}`);
}

/**
 * Converts a single color component (0-255) to a two-digit hex string.
 */
function componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}


// --- Easing Functions (from your example) ---

export function linear(t: number): number {
    return t;
}

export function easeInOut(t: number): number {
    return t < 0.5
        ? 2 * t * t
        : -1 + (4 - 2 * t) * t;
}

export function cubicBezier(p0: number, p1: number, p2: number, p3: number) {
    return function (t: number) {
        const u = 1 - t;
        return (
            p0 * u * u * u +
            3 * p1 * u * u * t +
            3 * p2 * u * t * t +
            p3 * t * t * t
        );
    };
}