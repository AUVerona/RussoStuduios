"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import VideoReelDisco from "./VideoReelDisco";

// Prima riga - prime 9 foto
const discoPhotosRow1 = [
  "/FOTO/FOTO DISCO/1.jpg",
  "/FOTO/FOTO DISCO/2.jpg",
  "/FOTO/FOTO DISCO/3.jpg",
  "/FOTO/FOTO DISCO/4.jpg",
  "/FOTO/FOTO DISCO/5.jpg",
  "/FOTO/FOTO DISCO/6.jpg",
  "/FOTO/FOTO DISCO/7.jpg",
  "/FOTO/FOTO DISCO/8.jpg",
  "/FOTO/FOTO DISCO/9.jpg",
];

// Seconda riga - ultime 9 foto diverse
const discoPhotosRow2 = [
  "/FOTO/FOTO DISCO/10.jpg",
  "/FOTO/FOTO DISCO/11.jpg",
  "/FOTO/FOTO DISCO/12.jpg",
  "/FOTO/FOTO DISCO/13.jpg",
  "/FOTO/FOTO DISCO/14.jpg",
  "/FOTO/FOTO DISCO/15.jpg",
  "/FOTO/FOTO DISCO/16.jpg",
  "/FOTO/FOTO DISCO/17.jpg",
  "/FOTO/FOTO DISCO/18.jpg",
];

export default function DiscoSection() {
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
      {/* Sezione principale con video di sfondo */}
      <section className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden bg-black">

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
          <div className="relative z-10 flex flex-col gap-4 mt-16">

            {/* Prima riga - scorre da sinistra a destra (L->R) */}
            <div className="flex overflow-hidden">
              <div ref={row1Ref} className="flex flex-nowrap" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                {/* Original */}
                {discoPhotosRow1.map((photo, idx) => (
                  <div key={`row1-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                    <Image
                      src={photo}
                      alt="Foto disco"
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
                {discoPhotosRow1.map((photo, idx) => (
                  <div key={`row1-dup-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                    <Image
                      src={photo}
                      alt="Foto disco"
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
                {discoPhotosRow2.map((photo, idx) => (
                  <div key={`row2-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                    <Image
                      src={photo}
                      alt="Foto disco"
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
                {discoPhotosRow2.map((photo, idx) => (
                  <div key={`row2-dup-${idx}`} className="flex-shrink-0 bg-black mr-4" style={{ transform: 'translateZ(0)' }}>
                    <Image
                      src={photo}
                      alt="Foto disco"
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

      {/* Descrizione attaccata ai reel, con marquee in mezzo */}
      <div className="w-full relative" style={{ background: '#262626' }}>
        <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
          <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
            DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE
          </p>
        </div>

        {/* Scritta DISCO fissa, centrata, non scrollabile */}
        <div className="w-full flex justify-center pointer-events-none overflow-hidden mt-32 md:mt-20 z-10" style={{ position: 'relative', zIndex: 10, marginBottom: '-2rem', maxWidth: '100vw' }}>
          <div className="whitespace-nowrap text-6xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem', animation: 'none' }}>
            DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO
          </div>
        </div>

        {/* Reel subito sotto, senza spazio */}
        <VideoReelDisco />
      </div>

      <div className="w-full relative" style={{ background: '#262626' }}>
        <div className="max-w-6xl mx-auto px-6  pt-8 pb-2">
          <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
            DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE
          </p>
        </div>
      </div>
    </>
  );
}
