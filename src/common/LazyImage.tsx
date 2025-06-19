import {useEffect, useRef, useState} from "react";

interface LazyImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    placeholder?: React.ReactNode;
}

export default function LazyImage({src, alt, placeholder,height,width}: LazyImageProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // stop observing after it's visible
                }
            },
            {threshold: 0.1}
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} style={{width:width, height:height}}>
            {isVisible ? <img src={src} alt={alt} width={width} height={height}/> : placeholder || null}
        </div>
    );
}