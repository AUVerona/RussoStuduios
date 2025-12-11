"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useImageModal } from "../context/ImageModalContext";
import { useMobileParallax } from "../hooks/useMobileParallax";
import VideoReelDisco from "./VideoReelDisco";
import LazyVideo from "./LazyVideo";

// Prima riga - foto 1-9
const discoPhotosRow1 = [
  "/FOTO/FOTO DISCO/1.webp",
  "/FOTO/FOTO DISCO/2.webp",
  "/FOTO/FOTO DISCO/3.webp",
  "/FOTO/FOTO DISCO/4.webp",
  "/FOTO/FOTO DISCO/5.webp",
  "/FOTO/FOTO DISCO/6.webp",
  "/FOTO/FOTO DISCO/7.webp",
  "/FOTO/FOTO DISCO/8.webp",
  "/FOTO/FOTO DISCO/9.webp",
];

// Seconda riga - foto 10-18
const discoPhotosRow2 = [
  "/FOTO/FOTO DISCO/10.webp",
  "/FOTO/FOTO DISCO/11.webp",
  "/FOTO/FOTO DISCO/12.webp",
  "/FOTO/FOTO DISCO/13.webp",
  "/FOTO/FOTO DISCO/14.webp",
  "/FOTO/FOTO DISCO/15.webp",
  "/FOTO/FOTO DISCO/16.webp",
  "/FOTO/FOTO DISCO/17.webp",
  "/FOTO/FOTO DISCO/18.webp",
];

export default function DiscoSection() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Mobile Parallax Refs
  const mobileSectionRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(true);
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
      const speed1 = 0.5; // Row 1 speed
      const speed2 = -0.5; // Row 2 speed (reverse direction)

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
      <div id="servizi-discoteche" className="scroll-mt-24" />

      {/* DESKTOP VERSION */}
      {!isMobile && (
        <div className="hidden md:block">
          <section className="relative w-full bg-black py-32 overflow-hidden">
            {/* Video di sfondo */}
            <div className="absolute inset-0 w-full h-full z-0">
              <LazyVideo
                src="/FOTO/VIDEO/videobg1.webm"
                poster="/sfondobase.png"
                disableOnMobile={true}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Scritta DISCO fissa */}
            <div className="relative z-10 w-full flex justify-center pointer-events-none overflow-hidden mb-16">
              <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem' }}>
              </div>
            </div>

            {/* Wrapper per contenuto con overflow hidden */}
            <div className="relative z-10 w-full overflow-hidden">
              <div className="flex flex-col gap-12">

                {/* Row 1 - Left to Right */}
                <div ref={row1Ref} className="flex gap-6 w-max will-change-transform ml-[-2000px]">
                  {[...discoPhotosRow1, ...discoPhotosRow1, ...discoPhotosRow1, ...discoPhotosRow1].map((photo, idx) => (
                    <div
                      key={`row1-${idx}`}
                      className="relative w-[400px] h-[300px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:opacity-100 transition-all duration-500 hover:scale-105 hover:z-10"
                      onClick={() => openModal(photo)}
                    >
                      <Image
                        src={photo}
                        alt={`Disco Row 1 ${idx}`}
                        fill
                        className="object-cover transition-transform duration-700"
                        sizes="25vw"
                        quality={100}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>

                {/* Row 2 - Right to Left */}
                <div ref={row2Ref} className="flex gap-6 w-max will-change-transform ml-[-500px]">
                  {[...discoPhotosRow2, ...discoPhotosRow2, ...discoPhotosRow2, ...discoPhotosRow2].map((photo, idx) => (
                    <div
                      key={`row2-${idx}`}
                      className="relative w-[400px] h-[300px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:opacity-100 transition-all duration-500 hover:scale-105 hover:z-10"
                      onClick={() => openModal(photo)}
                    >
                      <Image
                        src={photo}
                        alt={`Disco Row 2 ${idx}`}
                        fill
                        className="object-cover transition-transform duration-700"
                        sizes="25vw"
                        quality={100}
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </section>

          {/* Description Section */}
          <div className="w-full bg-[#000000] py-12 relative z-20">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight drop-shadow-md">
                Raccontare una serata significa catturare l’atmosfera, l’energia e ogni dettaglio che la rende unica.
                Realizzo servizi fotografici pensati per valorizzare l’evento e il locale, mostrando in modo chiaro e moderno ciò che il pubblico vive.
              </p>
            </div>
          </div>

          {/* Video Reel Section */}
          <div className="w-full relative" style={{ background: '#000000' }}>
            {/* Reel subito sotto, senza spazio */}
            <div className="pt-20">
              <VideoReelDisco />
            </div>
          </div>

          <div className="w-full relative" style={{ background: '#000000' }}>
            <div className="max-w-6xl mx-auto px-6  pt-8 pb-2">
              <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                Affianco alle foto anche video in stile reel, ideali per i social: dinamici, creativi e studiati per promuovere la serata, aumentare la visibilità del club e attirare nuovo pubblico. Che si tratti di un evento speciale, un DJ set o una stagione intera, il mio obiettivo è creare un racconto completo e sincero, capace di far rivivere ogni attimo, ogni sguardo e ogni emozione esattamente per come sono stati vissuti.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE VERSION */}
      <div ref={mobileSectionRef} className="block md:hidden w-full bg-[#000000] py-12 overflow-hidden">
        {/* Title */}
        <div className="w-full flex justify-center mb-8">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter">
            DISCO
          </h2>
        </div>

        {/* Description 1 */}
        <div className="px-6 mb-12 text-center">
          <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
            Raccontare una serata significa catturare l’atmosfera, l’energia e ogni dettaglio che la rende unica. Realizzo servizi fotografici pensati per valorizzare l’evento e il locale, mostrando in modo chiaro e moderno ciò che il pubblico vive.
          </p>
        </div>

        {/* Horizontal Scroll Track (Parallax) */}
        <div className="w-full overflow-visible">
          <div ref={mobileTrackRef} className="flex gap-4 px-4 will-change-transform">
            {[...discoPhotosRow1, ...discoPhotosRow2].map((photo, idx) => (
              <div key={`mobile-disco-${idx}`} className="relative flex-shrink-0 w-[80vw] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl" onClick={() => openModal(photo)}>
                <Image
                  src={photo}
                  alt={`Disco Mobile ${idx}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description 2 */}
        <div className="px-6 mt-12 mb-8 text-center">
          <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
            Affianco alle foto anche video in stile reel, ideali per i social: dinamici, creativi e studiati per promuovere la serata, aumentare la visibilità del club e attirare nuovo pubblico.
          </p>
        </div>
      </div>
    </>
  );
}
