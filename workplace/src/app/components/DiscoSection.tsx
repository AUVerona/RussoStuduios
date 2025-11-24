
"use client";
import React, { useEffect, useState } from "react";
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
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Sezione principale con video di sfondo */}
      <section className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden">
        {/* Video di sfondo con loading lazy */}
        {/* Background video removed; homepage hero keeps fixed video */}
        
        {/* Griglia 2 righe di foto infinite */}
        <div className="relative z-10 flex flex-col gap-4 mt-16" style={{ marginLeft: '-800px' }}>
          {/* Prima riga - scorre da sinistra a destra */}
          <div 
            className="flex gap-4 transition-transform duration-100 ease-linear will-change-transform pointer-events-none"
            style={{
              transform: `translateX(${-scrollY * 0.5}px)`,
            }}
          >
            {/* Ripeti 3 volte per effetto infinito fluido */}
            {[...discoPhotosRow1, ...discoPhotosRow1, ...discoPhotosRow1].map((photo, idx) => (
              <div key={`row1-${idx}`} className="flex-shrink-0">
                <Image
                  src={photo}
                  alt="Foto disco"
                  width={384}
                  height={320}
                  className="w-96 h-80 object-cover"
                  style={{ display: 'block' }}
                  loading="lazy"
                  unoptimized={false}
                  priority={false}
                />
              </div>
            ))}
          </div>
          
          {/* Seconda riga - scorre da destra a sinistra (movimento opposto) */}
          <div 
            className="flex gap-4 transition-transform duration-100 ease-linear will-change-transform pointer-events-none"
            style={{
              transform: `translateX(${scrollY * 0.3}px)`,
            }}
          >
            {/* Ripeti 3 volte per effetto infinito fluido */}
            {[...discoPhotosRow2, ...discoPhotosRow2, ...discoPhotosRow2].map((photo, idx) => (
              <div key={`row2-${idx}`} className="flex-shrink-0">
                <Image
                  src={photo}
                  alt="Foto disco"
                  width={384}
                  height={320}
                  className="w-96 h-80 object-cover"
                  style={{ display: 'block' }}
                  loading="lazy"
                  unoptimized={false}
                  priority={false}
                />
              </div>
            ))}
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
                    <div className="whitespace-nowrap text-6xl md:text-8xl font-black text-white uppercase opacity-90 animate-none text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'clip' }}>
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
