"use client";
import React, { useRef, useState } from "react";

// Small grid of looping video reels used as background for each block.
// Videos are currently placeholders (bgvideo1.mp4) located in /public/FOTO.

export default function VideoReelDisco() {
  // placeholder reels currently all use the same video file
  const images = [
    "/FOTO/FOTO DISCO/1.jpg",
    "/FOTO/FOTO DISCO/2.jpg",
    "/FOTO/FOTO DISCO/3.jpg",
    "/FOTO/FOTO DISCO/4.jpg",
  ];
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const rowRef = useRef<HTMLDivElement | null>(null);

  const [bgLoaded, setBgLoaded] = useState(false);
  const [bgError, setBgError] = useState(false);
  return (
    <section className="relative w-full bg-[#262626] py-12 overflow-hidden">
      {/* Rettangolo alto */}
      <div className="absolute top-0 left-0 w-full h-24 bg-[#262626] z-20" />
      {/* Scritta DISCO subito dopo il rettangolo alto */}
  <div className="w-full flex justify-center pointer-events-none overflow-hidden" style={{ position: 'absolute', top: '32px', left: 0, zIndex: 30, marginTop: '0', maxWidth: '100vw', height: '96px' }}>
        <div className="whitespace-nowrap text-6xl md:text-8xl font-black text-white uppercase opacity-90 animate-none text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'clip', lineHeight: '96px' }}>
          DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO
        </div>
      </div>
      {/* Video background assoluto */}
      <video
  src="/FOTO/bgvideo1.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute left-0 top-[120px] w-full h-[120vh] object-cover z-0 opacity-50 blur-sm"
        aria-hidden="true"
        onCanPlay={() => setBgLoaded(true)}
        onError={() => setBgError(true)}
      />
      {/* Fallback se il video non carica */}
      {!bgLoaded && !bgError && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 bg-black/60 text-white text-2xl">Caricamento video...</div>
      )}
      {bgError && (
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 bg-black/80 text-red-500 text-2xl">Errore nel caricamento del video</div>
      )}
      <div className="relative w-full mx-0 px-0 z-30">
        {/* Spazio vuoto tra rettangolo alto e immagini */}
  <div className="w-full" style={{ height: '300px', zIndex: 10, position: 'relative' }} />
        {/* Keep all four reels on one row and don't wrap; allow horizontal scroll on small screens */}
        <div ref={rowRef} className="flex items-end w-full px-0 mx-0 gap-6" style={{ touchAction: 'pan-y' }}>
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
                  "relative rounded-[5rem] overflow-visible bg-black shadow-2xl flex-shrink-0 z-40 " +
                  (idx % 2 === 0 ? "-translate-y-4 md:-translate-y-6" : "translate-y-4 md:translate-y-6")
                }
                style={{ width: '23vw', aspectRatio: '9/10', minWidth: 0, minHeight: 340, marginTop: '-32px', marginBottom: '-32px' }}
              >
                <img
                  src={img}
                  alt={`Aziendali ${idx + 1}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-[5rem]"
                  style={{ borderRadius: '5rem' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Spazio vuoto tra immagini e rettangolo basso */}
      <div className="w-full" style={{ height: '96px', zIndex: 10, position: 'relative' }} />
      {/* Rettangolo basso */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-[#262626] z-20" />
    </section>
  );
}
