"use client";
import React, { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    poster?: string;
    unloadOnPause?: boolean;
}

export default function LazyVideo({ src, poster, className, style, unloadOnPause = false, ...props }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    setHasLoaded(true);
                } else {
                    setIsIntersecting(false);
                    // If aggressive unloading is enabled, we reset hasLoaded when it goes out of view
                    // But to avoid flickering on small scrolls, we might want a larger margin or a timeout.
                    // For now, let's just respect the flag directly.
                    if (unloadOnPause) {
                        setHasLoaded(false);
                    }
                }
            },
            {
                rootMargin: "200px",
                threshold: 0.1,
            }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, [unloadOnPause]);

    useEffect(() => {
        if (videoRef.current) {
            if (isIntersecting) {
                if (hasLoaded && videoRef.current.paused && videoRef.current.readyState >= 2) {
                    videoRef.current.play().catch(() => { });
                }
            } else {
                if (!videoRef.current.paused) {
                    videoRef.current.pause();
                }
            }
        }
    }, [isIntersecting, hasLoaded]);

    return (
        <video
            ref={videoRef}
            className={className}
            style={style}
            poster={poster}
            playsInline
            muted
            loop
            preload="none"
            {...props}
        >
            {hasLoaded && <source src={src} type={src.toLowerCase().endsWith('.webm') ? "video/webm" : "video/mp4"} />}
        </video>
    );
}
