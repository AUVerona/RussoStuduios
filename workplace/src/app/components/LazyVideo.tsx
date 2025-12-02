"use client";
import React, { useRef, useEffect, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    src: string;
    poster?: string;
    rootMargin?: string; // Quanto prima caricare il video (es. "200px")
}

export default function LazyVideo({
    src,
    poster,
    rootMargin = "0px",
    className,
    ...props
}: LazyVideoProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Aggiorna lo stato se l'elemento è visibile o no
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin, // Carica un po' prima che entri nello schermo
                threshold: 0.1 // Basta che si veda il 10%
            }
        );

        observer.observe(video);

        return () => {
            observer.disconnect();
        };
    }, [rootMargin]);

    // Gestione Aggressiva della Memoria
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isIntersecting) {
            // 1. SE VISIBILE: Assegna la sorgente e riproduci
            if (!video.src) {
                video.src = src;
                video.load(); // Importante per ricaricare
            }

            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log("Autoplay bloccato (normale su mobile se power save è attivo):", error);
                });
            }

        } else {
            // 2. SE NON VISIBILE: Distruggi tutto per liberare RAM
            video.pause();
            video.removeAttribute("src"); // <--- QUESTA RIGA SALVA DAL CRASH
            video.load(); // <--- Forza il browser a rilasciare la memoria
        }

    }, [isIntersecting, src]);

    return (
        <video
            ref={videoRef}
            poster={poster}
            className={className}
            playsInline // CRUCIALE PER IOS
            webkit-playsinline="true" // Vecchia sintassi iOS per sicurezza
            muted // Obbligatorio per autoplay
            loop
            {...props}
        />
    );
}
