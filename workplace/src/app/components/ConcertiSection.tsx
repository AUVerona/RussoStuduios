"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

// Use the available photos
const concertiPhotos = [
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
    "/FOTO/CONCERTI/16.webp",
    "/FOTO/CONCERTI/17.webp",
    "/FOTO/CONCERTI/18.webp",
];

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
            {/* DESKTOP VERSION */}
            <div className="hidden md:block">
                {/* Sezione principale */}
                <section className="relative min-h-screen w-full overflow-hidden bg-black">

                    {/* Scritta CONCERTI fissa, centrata, a metà tra grigio e video - Z-Index alto per stare sopra a tutto */}
                    <div className="absolute top-0 left-0 w-full z-50 flex justify-center pointer-events-none mt-12" style={{ maxWidth: '100vw' }}>
                        <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 animate-none text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'clip' }}>
                            CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI
                        </div>
                    </div>

                    {/* Wrapper per contenuto con overflow hidden (immagini) - BG BLACK FORCED */}
                    <div className="relative w-full h-full overflow-hidden bg-black">
                        {/* Video di sfondo */}
                        <div className="absolute inset-0 w-full h-full z-0">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            >
                                <source src="/FOTO/VIDEO/videobg1.webm" type="video/webm" />
                            </video>
                        </div>

                        {/* Griglia 2 righe di foto infinite */}
                        <div className="relative z-10 flex flex-col gap-4 mt-48 py-24">

                            {/* Prima riga - scorre da sinistra a destra (L->R) */}
                            <div className="flex overflow-hidden">
                                <div ref={row1Ref} className="flex flex-nowrap will-change-transform" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
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
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Seconda riga - scorre da destra a sinistra (R->L) */}
                            <div className="flex overflow-hidden">
                                <div ref={row2Ref} className="flex flex-nowrap will-change-transform" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
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
                            I concerti sono la mia parte preferita di questo lavoro. Lì si concentrano emozioni, energia e verità. Ogni artista porta sul palco un mondo, e per me è una sfida bellissima trasformarlo in immagini. Seguo il ritmo, aspetto l’attimo, cerco la connessione tra artista e pubblico. Consegno foto e video potenti, sinceri e fedeli all’identità di chi sta sul palco. Un racconto autentico del live, da utilizzare per promozione, press kit, comunicazione social o ricordi del tour.
                        </p>
                    </div>
                </div>
            </div>

            {/* MOBILE VERSION */}
            <div className="block md:hidden w-full bg-[#262626] py-12">
                {/* Title */}
                <div className="w-full flex justify-center mb-8">
                    <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
                        CONCERTI
                    </h2>
                </div>

                {/* Description */}
                <div className="px-6 mb-12 text-center">
                    <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
                        I concerti sono la mia parte preferita di questo lavoro. Lì si concentrano emozioni, energia e verità. Ogni artista porta sul palco un mondo, e per me è una sfida bellissima trasformarlo in immagini.
                    </p>
                </div>

                {/* Vertical Stack of Images (Selection) */}
                <div className="flex flex-col gap-4 px-4">
                    {concertiPhotos.slice(0, 6).map((photo, idx) => (
                        <div key={`mobile-concerti-${idx}`} className="w-full rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={photo}
                                alt={`Concerti Mobile ${idx}`}
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Description Part 2 */}
                <div className="px-6 mt-12 mb-8 text-center">
                    <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
                        Consegno foto e video potenti, sinceri e fedeli all’identità di chi sta sul palco. Un racconto autentico del live, da utilizzare per promozione, press kit, comunicazione social o ricordi del tour.
                    </p>
                </div>
            </div>
        </>
    );
}
