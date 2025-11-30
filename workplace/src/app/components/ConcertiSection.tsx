"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

// Use the single available photo repeated for now
const concertiPhotos = Array(10).fill("/FOTO/CONCERTI/1P4A0177.jpg");

export default function ConcertiSection() {
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let animationFrameId: number;

        const animate = () => {
            const scrollY = window.scrollY;
            const speed = 0.5; // Adjust speed

            // Row 1 (Top): Moves Left to Right (L->R)
            if (row1Ref.current) {
                const width = row1Ref.current.scrollWidth / 2;
                // Infinite scroll: moves right as you scroll down
                // Start at -width (seeing the duplicate set) and move right towards 0
                const x = -width + (scrollY * speed) % width;
                row1Ref.current.style.transform = `translateX(${x}px)`;
            }

            // Row 2 (Bottom): Moves Right to Left (R->L)
            if (row2Ref.current) {
                const width = row2Ref.current.scrollWidth / 2;
                // Infinite scroll: moves left as you scroll down
                // Start at 0 and move left towards -width
                const x = -(scrollY * speed) % width;
                row2Ref.current.style.transform = `translateX(${x}px)`;
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    return (
        <>
            {/* Rettangolo grigio in alto */}
            <div className="w-full h-40 bg-[#262626] relative z-20"></div>

            {/* Sezione principale */}
            <section className="relative min-h-screen w-full pb-20 bg-black">

                {/* Scritta CONCERTI fissa, centrata, a metà tra grigio e video - Z-Index alto per stare sopra a tutto */}
                <div className="absolute top-0 left-0 w-full -translate-y-1/2 z-50 flex justify-center pointer-events-none" style={{ maxWidth: '100vw' }}>
                    <div className="whitespace-nowrap text-6xl md:text-8xl font-black text-white uppercase opacity-90 animate-none text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'clip' }}>
                        CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI
                    </div>
                </div>

                {/* Wrapper per contenuto con overflow hidden (immagini) - BG BLACK FORCED */}
                <div className="relative w-full h-full overflow-hidden bg-black">
                    {/* Video di sfondo */}
                    {/* Video di sfondo */}
                    <div className="absolute inset-0 w-full h-full z-0">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover opacity-30"
                            style={{ background: '#000' }}
                        >
                            <source src="/FOTO/bgvideo1.mp4" type="video/mp4" />
                        </video>
                    </div>

                    {/* Griglia 2 righe di foto infinite */}
                    <div className="relative z-10 flex flex-col gap-4 mt-32">

                        {/* Prima riga - scorre da sinistra a destra (L->R) */}
                        <div className="flex overflow-hidden">
                            <div ref={row1Ref} className="flex flex-nowrap" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                                {/* Original */}
                                {concertiPhotos.map((photo, idx) => (
                                    <div key={`row1-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                                        <Image
                                            src={photo}
                                            alt="Foto concerti"
                                            width={384}
                                            height={320}
                                            className="w-96 h-80 object-cover bg-black"
                                            style={{ display: 'block' }}
                                            loading="eager"
                                            priority={true}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {concertiPhotos.map((photo, idx) => (
                                    <div key={`row1-dup-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                                        <Image
                                            src={photo}
                                            alt="Foto concerti"
                                            width={384}
                                            height={320}
                                            className="w-96 h-80 object-cover bg-black"
                                            style={{ display: 'block' }}
                                            loading="eager"
                                            priority={true}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Seconda riga - scorre da destra a sinistra (R->L) */}
                        <div className="flex overflow-hidden">
                            <div ref={row2Ref} className="flex flex-nowrap" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                                {/* Original */}
                                {concertiPhotos.map((photo, idx) => (
                                    <div key={`row2-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                                        <Image
                                            src={photo}
                                            alt="Foto concerti"
                                            width={384}
                                            height={320}
                                            className="w-96 h-80 object-cover bg-black"
                                            style={{ display: 'block' }}
                                            loading="eager"
                                            priority={true}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {concertiPhotos.map((photo, idx) => (
                                    <div key={`row2-dup-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                                        <Image
                                            src={photo}
                                            alt="Foto concerti"
                                            width={384}
                                            height={320}
                                            className="w-96 h-80 object-cover bg-black"
                                            style={{ display: 'block' }}
                                            loading="eager"
                                            priority={true}
                                            sizes="(max-width: 768px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Descrizione in fondo */}
            <div className="w-full relative" style={{ background: '#262626' }}>
                <div className="max-w-6xl mx-auto px-6 py-20 text-center">
                    <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                        DESCRIZIONE CONCERTI DESCRIZIONE CONCERTI DESCRIZIONE CONCERTI DESCRIZIONE CONCERTI
                    </p>
                </div>
            </div>
        </>
    );
}
