"use client";
import React from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    poster?: string;
    unloadOnPause?: boolean;
}

export default function LazyVideo({ src, poster, className, style, unloadOnPause = false, ...props }: LazyVideoProps) {
    return (
        <video
            className={className}
            style={style}
            poster={poster}
            playsInline
            muted
            loop
            autoPlay
            preload="auto"
            {...props}
        >
            <source src={src} type={src.toLowerCase().endsWith('.webm') ? "video/webm" : "video/mp4"} />
        </video>
    );
}
