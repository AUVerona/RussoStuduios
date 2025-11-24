
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Prima riga - prime 9 foto
const concertiPhotosRow1 = [
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
const concertiPhotosRow2 = [
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

export default function ConcertiSection() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      {/* Sezione principale con video di sfondo e scritta fissa */}
      <section className="relative min-h-screen w-full pt-32 pb-20 overflow-hidden">
        {/* Video di sfondo */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
          {/* Blocco rettangolare fisso sopra il video */}
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '160px', background: '#262626', zIndex: 2 }} />
          {/* Video centrale */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            src="/FOTO/bgvideo1.mov"
            style={{ backgroundColor: '#262626' }}
          />
          {/* Blocco rettangolare fisso sotto il video */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '20px', background: '#262626', zIndex: 2 }} />
        </div>
        {/* Scritta CONCERTI fissa, centrata, non scrollabile */}
  <div className="w-full flex justify-center pointer-events-none overflow-hidden z-20" style={{ position: 'absolute', top: '100px', left: 0, maxWidth: '100vw', zIndex: 20 }}>
          <div className="whitespace-nowrap text-6xl md:text-8xl font-black text-white uppercase opacity-90 animate-none text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem', maxWidth: '100%', overflow: 'hidden', textOverflow: 'clip' }}>
            CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI CONCERTI
          </div>
        </div>
        {/* Griglia 2 righe di foto infinite */}
  {/* Spazio trasparente tra il bordo basso e le foto */}
  <div style={{ width: '100%', height: '48px', background: 'transparent', zIndex: 1 }} />
  <div className="relative z-10 flex flex-col gap-4 mt-16" style={{ marginLeft: '-1500px' }}>
          {/* Prima riga - scorre da sinistra a destra */}
          <div 
            className="flex gap-4 transition-transform duration-100 ease-linear will-change-transform pointer-events-none"
            style={{
              transform: `translateX(${-scrollY * 0.5}px)`,
            }}
          >
            {[...concertiPhotosRow1, ...concertiPhotosRow1, ...concertiPhotosRow1].map((photo, idx) => (
              <div key={`row1-${idx}`} className="flex-shrink-0">
                <Image
                  src={photo}
                  alt="Foto concerto"
                  width={384}
                  height={320}
                  className="w-96 h-80 object-cover rounded-2xl"
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
            {[...concertiPhotosRow2, ...concertiPhotosRow2, ...concertiPhotosRow2].map((photo, idx) => (
              <div key={`row2-${idx}`} className="flex-shrink-0">
                <Image
                  src={photo}
                  alt="Foto concerto"
                  width={384}
                  height={220}
                  className="w-96 h-80 object-cover rounded-2xl"
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
                <div className="w-full relative" style={{ background: '#262626' }}>
                  <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
                    <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                      DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE DESCRIZIONE
                    </p>
                  </div>
                </div>
    </>
  );
}