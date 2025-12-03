"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useImageModal } from "../context/ImageModalContext";
import { useMobileParallax } from "../hooks/useMobileParallax";
import LazyVideo from "./LazyVideo";

export default function ConcertiSection() {
    const images = [
        "/FOTO/CONCERTI/1.webp",
        "/FOTO/CONCERTI/2.webp",
        "/FOTO/CONCERTI/3.webp",
        "/FOTO/CONCERTI/4.webp",
        "/FOTO/CONCERTI/5.webp",
        "/FOTO/CONCERTI/6.webp",
        "/FOTO/CONCERTI/7.webp",
        "/FOTO/CONCERTI/8.webp",
        "/FOTO/CONCERTI/9.webp",
        "/FOTO/CONCERTI/10.webp",
        "/FOTO/CONCERTI/11.webp",
        "/FOTO/CONCERTI/12.webp",
        "/FOTO/CONCERTI/13.webp",
        "/FOTO/CONCERTI/14.webp",
        "/FOTO/CONCERTI/15.webp",
    ];

    const [isMobile, setIsMobile] = useState(true);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    // Mobile Parallax Refs
    const mobileSectionRef = useRef<HTMLDivElement>(null);
    const mobileTrackRef = useRef<HTMLDivElement>(null);

    const { openModal } = useImageModal();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Parallax Animation Logic (Desktop)
    useEffect(() => {
        if (isMobile) return;

        const handleScroll = () => {
            if (!row1Ref.current || !row2Ref.current) return;

            const scrollY = window.scrollY;
            const speed1 = 0.3; // Row 1 speed
            const speed2 = -0.3; // Row 2 speed (reverse direction)

            row1Ref.current.style.transform = `translateX(${scrollY * speed1}px)`;
            row2Ref.current.style.transform = `translateX(${scrollY * speed2}px)`;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMobile]);

    // Mobile Parallax Animation
    useMobileParallax({
        sectionRef: mobileSectionRef,
        trackRef: mobileTrackRef,
        isMobile,
        speed: 0.8
    });

    return (
        <>
            <div id="concerti" className="scroll-mt-24" />
            {/* DESKTOP VERSION */}
            {!isMobile && (
                <div className="hidden md:block">
                    {/* Sezione principale */}
                    <section className="relative min-h-screen w-full overflow-hidden bg-black">
                        {/* Rettangolo grigio in alto */}
                        <div className="w-full h-[60px] bg-[#262626] relative z-50"></div>

                        {/* Scritta CONCERTI fissa */}
                        <div className="absolute top-0 left-0 w-full z-50 flex justify-center pointer-events-none mt-4" style={{ maxWidth: '100vw' }}>
                            <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 animate-none text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'clip' }}>
                                CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI
                            </div>
                        </div>

                        {/* Wrapper per contenuto con overflow hidden (immagini) - BG BLACK FORCED */}
                        <div className="relative w-full h-full overflow-hidden bg-black">
                            {/* Video di sfondo */}
                            <div className="absolute inset-0 w-full h-full z-0">
                                <LazyVideo
                                    src="/FOTO/VIDEO/videobg1.webm"
                                    poster="/sfondobase.png"
                                    disableOnMobile={true}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Griglia 2 righe di foto infinite */}
                            <div className="relative z-10 flex flex-col gap-4 mt-48 py-24">

                                {/* Row 1 - Left to Right */}
                                <div ref={row1Ref} className="flex gap-4 w-max will-change-transform">
                                    {[...images, ...images].map((photo, idx) => (
                                        <div
                                            key={`row1-${idx}`}
                                            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openModal(photo)}
                                        >
                                            <Image
                                                src={photo}
                                                alt={`Concerto ${idx}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Row 2 - Right to Left */}
                                <div ref={row2Ref} className="flex gap-4 w-max will-change-transform ml-[-500px]">
                                    {[...images, ...images].reverse().map((photo, idx) => (
                                        <div
                                            key={`row2-${idx}`}
                                            className="relative w-[300px] h-[200px] md:w-[400px] md:h-[300px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                                            onClick={() => openModal(photo)}
                                        >
                                            <Image
                                                src={photo}
                                                alt={`Concerto ${idx}`}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Descrizione Desktop */}
                    <div className="w-full relative bg-black">
                        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
                            <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                                Consegno foto e video potenti, sinceri e fedeli all’identità di chi sta sul palco. Un racconto autentico del live, da utilizzare per promozione, press kit, comunicazione social o ricordi del tour.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* MOBILE VERSION */}
            <div ref={mobileSectionRef} className="block md:hidden w-full bg-[#262626] py-12 overflow-hidden">
                {/* Title */}
                <div className="w-full flex justify-center mb-8">
                    <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
                        CONCERTI
                    </h2>
                </div>

                {/* Description */}
                <div className="px-6 mb-12 text-center">
                    <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
                        Consegno foto e video potenti, sinceri e fedeli all’identità di chi sta sul palco.
                    </p>
                </div>

                {/* Horizontal Scroll Track (Parallax) */}
                <div className="w-full overflow-visible">
                    <div ref={mobileTrackRef} className="flex gap-4 px-4 will-change-transform">
                        {images.map((photo, idx) => (
                            <div key={`mobile-concerti-${idx}`} className="relative flex-shrink-0 w-[80vw] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl" onClick={() => openModal(photo)}>
                                <Image
                                    src={photo}
                                    alt={`Concerti Mobile ${idx}`}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 80vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description Part 2 */}
                <div className="px-6 mt-12 mb-8 text-center">
                    <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
                        Un racconto autentico del live, da utilizzare per promozione, press kit, comunicazione social o ricordi del tour.
                    </p>
                </div>
            </div>
        </>
    );
}
