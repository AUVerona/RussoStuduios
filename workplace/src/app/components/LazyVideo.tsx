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
                    if (unloadOnPause) {
                        setHasLoaded(false);
                    }
                }
            },
            {
                rootMargin: "300px",
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

    // Force load when source is added
    useEffect(() => {
        if (hasLoaded && videoRef.current) {
            videoRef.current.load();
        }
    }, [hasLoaded]);

    // Handle play/pause based on visibility
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isIntersecting && hasLoaded) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => {
                    // Auto-play was prevented
                });
            }
        } else if (!isIntersecting) {
            video.pause();
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
