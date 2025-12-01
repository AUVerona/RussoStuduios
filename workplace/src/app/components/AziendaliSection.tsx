"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useImageModal } from "../context/ImageModalContext";
import LazyVideo from "./LazyVideo";

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
      <div id="aziende" className="scroll-mt-24" />
      {/* =========================================
          DESKTOP VERSION (Hidden on mobile)
          ========================================= */}
      {!isMobile && (
        <div className="hidden md:block">
          <section className="relative w-full bg-[#262626] py-12 overflow-hidden">
            {/* Scritta AZIENDALI */}
            <div className="w-full flex justify-center pointer-events-none overflow-hidden" style={{ position: 'absolute', top: '32px', left: 0, zIndex: 30, marginTop: '0', maxWidth: '100vw', height: '96px' }}>
              <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', animation: 'none', lineHeight: '96px' }}>
                AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI AZIENDALI
              </div>
            </div>

            {/* Video background */}
            {/* Video background */}
            <LazyVideo
              src="/FOTO/VIDEO/videobg1.webm"
              poster="/FOTO/AZIENDE/1.webp"
              disableOnMobile={true}
              className="absolute left-0 top-[120px] w-full h-[120vh] object-cover z-0"
            />

            <div className="relative w-full mx-0 px-0 z-30">
              {/* Spazio vuoto */}
              <div className="w-full" style={{ height: '300px', zIndex: 10, position: 'relative' }} />

              {/* Fixed Grid for Desktop (No Scroll) */}
              <div className="flex justify-center items-center w-full px-4 gap-6">
                {images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative flex-shrink-0 z-40"
                    style={{ width: '22vw', aspectRatio: '3/4' }}
                  >
                    <div
                      className="relative w-full h-full rounded-[2.5rem] overflow-hidden bg-black shadow-2xl transition-transform duration-500 hover:scale-105 cursor-pointer"
                      onClick={() => openModal(img)}
                    >
                      <Image
                        src={img}
                        alt={`Aziendali ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="25vw"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Spazio vuoto */}
            <div className="w-full" style={{ height: '96px', zIndex: 10, position: 'relative' }} />
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
      )}

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
              <div
                className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 cursor-pointer active:scale-95 transition-transform"
                onClick={() => openModal(img)}
              >
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
