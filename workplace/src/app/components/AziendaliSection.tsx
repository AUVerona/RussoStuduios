"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

// Small grid of looping video reels used as background for each block.
// Videos are currently placeholders (bgvideo1.mp4) located in /public/FOTO.

export default function AziendaliSection() {
  // placeholder reels currently all use the same video file
  const images = [
    "/FOTO/AZIENDE/1.webp",
    "/FOTO/AZIENDE/2.webp",
    "/FOTO/AZIENDE/3.webp",
    "/FOTO/AZIENDE/4.webp",
  ];

  const rowRef = useRef<HTMLDivElement | null>(null);

  const [bgLoaded, setBgLoaded] = useState(false);
  const [bgError, setBgError] = useState(false);

  return (
    <>
      {/* =========================================
          DESKTOP VERSION (Hidden on mobile)
          ========================================= */}
      <div className="hidden md:block">
        <section className="relative w-full bg-[#262626] py-12 overflow-hidden">
          {/* Rettangolo alto */}
          {/* Rettangolo alto rimosso */}

          {/* Scritta AZIENDALI */}
          <div className="w-full flex justify-center pointer-events-none overflow-hidden" style={{ position: 'absolute', top: '32px', left: 0, zIndex: 30, marginTop: '0', maxWidth: '100vw', height: '96px' }}>
            <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', animation: 'none', lineHeight: '96px' }}>
              AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI
            </div>
          </div>

          {/* Video background */}
          <video
            src="/FOTO/bgvideo1.mp4"
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

            {/* Horizontal Scroll for Desktop */}
            <div ref={rowRef} className="flex items-end w-full px-4 md:px-0 mx-0 gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory" style={{ touchAction: 'pan-x' }}>
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className={
                    "flex flex-col items-center transform " + (idx % 2 === 0 ? "-translate-y-1 md:-translate-y-2" : "translate-y-1 md:translate-y-2")
                  }
                  style={{ willChange: "transform", zIndex: 40 }}
                >
                  <div
                    className={
                      "relative rounded-[3rem] md:rounded-[5rem] overflow-visible bg-black shadow-2xl flex-shrink-0 z-40 snap-center md:w-[23vw] " +
                      (idx % 2 === 0 ? "-translate-y-4 md:-translate-y-6" : "translate-y-4 md:translate-y-6")
                    }
                    style={{ aspectRatio: '9/10', minWidth: 0, minHeight: 340, marginTop: '-32px', marginBottom: '-32px' }}
                  >
                    <Image
                      src={img}
                      alt={`Aziendali ${idx + 1}`}
                      fill
                      className="object-cover rounded-[5rem]"
                      style={{ borderRadius: '5rem' }}
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Spazio vuoto */}
          <div className="w-full" style={{ height: '96px', zIndex: 10, position: 'relative' }} />
          {/* Rettangolo basso */}
          {/* Rettangolo basso rimosso */}
        </section>

        {/* Descrizione Desktop */}
        <div className="w-full relative" style={{ background: '#262626' }}>
          <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
              Quando lavoro con un’azienda parto da una domanda semplice: cosa vuoi comunicare davvero?
              Creo contenuti studiati per valorizzare identità, prodotti, servizi e ambienti con uno stile moderno e professionale.
              Dagli spot per cantine e realtà vinicole, ai contenuti per professionisti come dottori, personal trainer, marketer, fino a bar, bistrot e ristoranti: ogni progetto viene costruito su misura.
              Dalla fotografia al video, realizzo materiali pensati per siti web, campagne pubblicitarie, social e presentazioni aziendali.
              Il mio obiettivo è aiutare il tuo brand a distinguersi in modo chiaro, curato e coerente.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE VERSION (Hidden on desktop)
          ========================================= */}
      <div className="block md:hidden w-full bg-[#262626] py-12">
        {/* Title */}
        <div className="w-full flex justify-center mb-8">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
            AZIENDALI
          </h2>
        </div>

        {/* Description Part 1 */}
        <div className="px-6 mb-12 text-center">
          <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
            Quando lavoro con un’azienda parto da una domanda semplice: cosa vuoi comunicare davvero?
            Creo contenuti studiati per valorizzare identità, prodotti, servizi e ambienti con uno stile moderno e professionale.
          </p>
        </div>

        {/* Grid Layout of Images - 2 Columns */}
        <div className="grid grid-cols-2 gap-4 px-4 w-full">
          {images.map((img, idx) => (
            <div key={`mobile-aziendali-${idx}`} className="flex justify-center w-full">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10">
                <Image
                  src={img}
                  alt={`Aziendali Mobile ${idx}`}
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
            Dagli spot per cantine e realtà vinicole, ai contenuti per professionisti come dottori, personal trainer, marketer, fino a bar, bistrot e ristoranti: ogni progetto viene costruito su misura.
            Il mio obiettivo è aiutare il tuo brand a distinguersi in modo chiaro, curato e coerente.
          </p>
        </div>
      </div>
    </>
  );
}
