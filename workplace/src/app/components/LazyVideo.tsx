"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    poster?: string;
    unloadOnPause?: boolean;
    disableOnMobile?: boolean;
    rootMargin?: string;
}

export default function LazyVideo({ src, poster, className, style, unloadOnPause = false, disableOnMobile = false, rootMargin = "50px", ...props }: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // If disabled on mobile and we are on mobile, don't observe
        if (disableOnMobile && isMobile) return;

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
                rootMargin: rootMargin,
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
    }, [unloadOnPause, disableOnMobile, isMobile, rootMargin]);

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

    // If disabled on mobile and we are on mobile, render an image instead
    if (disableOnMobile && isMobile && poster) {
        return (
            <div className={className} style={{ ...style, position: 'relative' }}>
                <Image
                    src={poster}
                    alt="Video poster"
                    fill
                    className="object-cover"
                />
            </div>
        );
    }

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
