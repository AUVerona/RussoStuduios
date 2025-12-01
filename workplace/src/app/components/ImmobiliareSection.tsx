"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useImageModal } from "../context/ImageModalContext";

// Small grid of looping video reels used as background for each block.
// Videos are currently placeholders (bgvideo1.mp4) located in /public/FOTO.

export default function ImmobiliareSection() {
    // placeholder reels currently all use the same video file
    const images = [
        "/FOTO/IMMOBIGLIARE/1.jpg",
        "/FOTO/IMMOBIGLIARE/2.jpg",
        "/FOTO/IMMOBIGLIARE/3.jpg",
        "/FOTO/IMMOBIGLIARE/4.jpg",
        "/FOTO/IMMOBIGLIARE/5.jpg",
        "/FOTO/IMMOBIGLIARE/6.jpg",
        "/FOTO/IMMOBIGLIARE/7.jpg",
    ];

    const [bgLoaded, setBgLoaded] = useState(false);
    const [bgError, setBgError] = useState(false);
    const [isMobile, setIsMobile] = useState(true);
    const { openModal } = useImageModal();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <>
            <div id="immobiliare" className="scroll-mt-24" />
            {/* =========================================
          DESKTOP VERSION (Hidden on mobile)
          ========================================= */}
            {!isMobile && (
                <div className="hidden md:block">
                    <section className="relative w-full bg-[#262626] py-12 overflow-hidden">

                        {/* Scritta IMMOBILIARE */}
                        <div className="w-full flex justify-center pointer-events-none overflow-hidden" style={{ position: 'absolute', top: '32px', left: 0, zIndex: 30, marginTop: '0', maxWidth: '100vw', height: '96px' }}>
                            <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', animation: 'none', lineHeight: '96px' }}>
                                IMMOBILIARE IMMOBILIARE IMMOBILIARE IMMOBILIARE IMMOBILIARE IMMOBILIARE IMMOBILIARE
                            </div>
                        </div>

                        {/* Video background */}
                        <video
                            src="/FOTO/VIDEO/videobg1.webm"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            className="absolute left-0 top-[120px] w-full h-[120vh] object-cover z-0"
                            aria-hidden="true"
                            onCanPlay={() => setBgLoaded(true)}
                            onError={() => setBgError(true)}
                        />

                        <div className="relative w-full mx-0 px-0 z-30">
                            {/* Spazio vuoto */}
                            <div className="w-full" style={{ height: '300px', zIndex: 10, position: 'relative' }} />

                            {/* Bento Grid for Desktop */}
                            <div className="grid grid-cols-4 grid-rows-2 gap-4 w-full max-w-7xl mx-auto px-4 h-[80vh]">
                                {images.map((img, idx) => {
                                    // Bento Grid Logic
                                    let gridClass = "";
                                    if (idx === 0) gridClass = "col-span-2 row-span-2"; // Big Left
                                    else if (idx === 1) gridClass = "col-span-1 row-span-1";
                                    else if (idx === 2) gridClass = "col-span-1 row-span-1";
                                    else if (idx === 3) gridClass = "col-span-2 row-span-1"; // Wide Top Right
                                    else if (idx === 4) gridClass = "col-span-1 row-span-1";
                                    else if (idx === 5) gridClass = "col-span-1 row-span-1";
                                    else gridClass = "col-span-1 row-span-1"; // Fallback

                                    return (
                                        <div
                                            key={idx}
                                            className={`relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:z-50 cursor-pointer ${gridClass}`}
                                            onClick={() => openModal(img)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Immobiliare ${idx + 1}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 1200px) 50vw, 33vw"
                                            />
                                            {/* Overlay gradient for premium feel */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Spazio vuoto */}
                        <div className="w-full" style={{ height: '96px', zIndex: 10, position: 'relative' }} />
                    </section>

                    {/* Descrizione Desktop */}
                    <div className="w-full relative" style={{ background: '#262626' }}>
                        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
                            <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                                Ogni spazio ha un carattere, un’atmosfera, una storia da raccontare.
                                Realizzo servizi fotografici professionali di interni ed esterni, video pensati per valorizzare immobili residenziali e commerciali, e riprese drone per una visione ampia e suggestiva.
                                Creo contenuti ideali per annunci immobiliari, agenzie, strutture ricettive e privati che vogliono presentare al meglio il proprio immobile.
                                Pulizia, ordine, geometrie precise e attenzione ai dettagli: il mio lavoro mostra ogni ambiente nel suo massimo potenziale, con contenuti pensati per vendere e comunicare in modo efficace.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* =========================================
          MOBILE VERSION (Hidden on desktop)
          ========================================= */}
            <div className="block md:hidden w-full bg-[#262626] py-12">
                {/* Title */}
                <div className="w-full flex justify-center mb-8">
                    <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
                        IMMOBILIARE
                    </h2>
                </div>

                {/* Description Part 1 */}
                <div className="px-6 mb-12 text-center">
                    <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
                        Creo contenuti ideali per annunci immobiliari, agenzie, strutture ricettive e privati che vogliono presentare al meglio il proprio immobile.
                        Pulizia, ordine, geometrie precise e attenzione ai dettagli: il mio lavoro mostra ogni ambiente nel suo massimo potenziale.
                    </p>
                </div>

                {/* Grid Layout of Images - 2 Columns */}
                <div className="grid grid-cols-2 gap-4 px-4 w-full">
                    {images.map((img, idx) => (
                        <div key={`mobile-immobiliare-${idx}`} className="flex justify-center w-full">
                            <div
                                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer active:scale-95 transition-transform"
                                onClick={() => openModal(img)}
                            >
                                <Image
                                    src={img}
                                    alt={`Immobiliare Mobile ${idx}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Description Part 2 */}
                <div className="px-6 mt-12 mb-8 text-center">
                    <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
                        Realizzo servizi fotografici professionali di interni ed esterni, video pensati per valorizzare immobili residenziali e commerciali, e riprese drone per una visione ampia e suggestiva.
                    </p>
                </div>
            </div>
        </>
    );
}
