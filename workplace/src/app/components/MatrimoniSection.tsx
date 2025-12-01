"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useImageModal } from "../context/ImageModalContext";

const matrimoniPhotos = [
  "/FOTO/MATRIMONI/1.webp",
  "/FOTO/MATRIMONI/2.webp",
  "/FOTO/MATRIMONI/3.webp",
  "/FOTO/MATRIMONI/4.webp",
  "/FOTO/MATRIMONI/5.webp",
  "/FOTO/MATRIMONI/6.webp",
  "/FOTO/MATRIMONI/7.webp",
  "/FOTO/MATRIMONI/8.webp",
  "/FOTO/MATRIMONI/9.webp",
  "/FOTO/MATRIMONI/10.webp",
  "/FOTO/MATRIMONI/11.webp",
  "/FOTO/MATRIMONI/12.webp",
  "/FOTO/MATRIMONI/13.webp",
  "/FOTO/MATRIMONI/14.webp",
  "/FOTO/MATRIMONI/15.webp",
];

export default function MatrimoniSection() {
  // 1. Generate Base Columns
  const baseColumns = [];
  let i = 0;
  let isLong = true;

  while (i < matrimoniPhotos.length) {
    if (isLong) {
      baseColumns.push({ type: 'long', photos: [matrimoniPhotos[i]] });
      i++;
    } else {
      const stackPhotos = [];
      if (i < matrimoniPhotos.length) stackPhotos.push(matrimoniPhotos[i++]);
      if (i < matrimoniPhotos.length) stackPhotos.push(matrimoniPhotos[i++]);
      baseColumns.push({ type: 'stack', photos: stackPhotos });
    }
    isLong = !isLong;
  }

  // 2. Duplicate Columns for "Infinite" feel (e.g., 5 times)
  const columns = [...baseColumns, ...baseColumns, ...baseColumns, ...baseColumns, ...baseColumns];

  const [isMobile, setIsMobile] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Global Modal Context
  const { openModal } = useImageModal();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax Animation Logic
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;

      const section = sectionRef.current;
      const track = trackRef.current;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Calculate progress based on section visibility
      // Start moving when section enters viewport, stop when it leaves
      // rect.top is distance from top of viewport

      // We want to map scroll position to horizontal translation.
      // Let's say we want to move 1000px horizontally over the course of the section scroll.

      // Simple parallax: translateX depends on window.scrollY relative to section position
      // But since we want it to move *while* we scroll past it, we can use the rect.top

      const speed = 0.5; // Adjust speed factor
      const initialOffset = 0; // Start at 0 or some offset

      // When rect.top is viewportHeight (just entering), translation should be 0 (or start point)
      // As rect.top decreases (scrolling down), translation becomes negative (moves left)

      const scrollDist = viewportHeight - rect.top;
      const translateX = scrollDist * speed;

      track.style.transform = `translateX(-${translateX}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  return (
    <>
      <div id="matrimoni" className="scroll-mt-24" />
      {/* DESKTOP VERSION */}
      {!isMobile && (
        <div className="hidden md:block">
          <section ref={sectionRef} className="relative w-full bg-[#262626] py-32 overflow-x-clip overflow-y-visible">

            {/* Title */}
            <div className="w-full flex justify-center pointer-events-none overflow-hidden mb-16">
              <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem' }}>
                MATRIMONI MATRIMONI MATRIMONI MATRIMONI
              </div>
            </div>

            {/* Horizontal Track - Parallax Movement */}
            <div className="w-full overflow-x-clip overflow-y-visible">
              <div ref={trackRef} className="flex gap-6 px-8 items-center h-[600px] will-change-transform">
                {columns.map((col, idx) => (
                  <div key={idx} className="flex-shrink-0 h-full">
                    {col.type === 'long' ? (
                      // Long Image Column
                      <div
                        className="relative w-[400px] h-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:opacity-100 transition-all duration-500 hover:scale-105 hover:z-10"
                        onClick={() => openModal(col.photos[0])}
                      >
                        <Image
                          src={col.photos[0]}
                          alt={`Matrimonio Long ${idx}`}
                          fill
                          className="object-cover transition-transform duration-700"
                          sizes="100vw"
                          quality={100}
                          unoptimized
                        />
                      </div>
                    ) : (
                      // Stacked Column
                      <div className="w-[400px] h-full flex flex-col gap-6">
                        {col.photos.map((photo, pIdx) => (
                          <div
                            key={pIdx}
                            className="relative w-full h-[calc(50%-12px)] rounded-3xl overflow-hidden shadow-2xl cursor-pointer hover:opacity-100 transition-all duration-500 hover:scale-105 hover:z-10"
                            onClick={() => openModal(photo)}
                          >
                            <Image
                              src={photo}
                              alt={`Matrimonio Stack ${idx}-${pIdx}`}
                              fill
                              className="object-cover transition-transform duration-700"
                              style={{ objectPosition: '50% 20%' }}
                              sizes="100vw"
                              quality={100}
                              unoptimized
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            < div className="max-w-6xl mx-auto px-6 mt-24 text-center" >
              <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight drop-shadow-md">
                Il matrimonio è uno dei momenti più importanti nella vita di una coppia.
                Lavoro in modo naturale, senza forzature, lasciando che siano le emozioni a guidare le immagini.
              </p>
            </div >

          </section >
        </div >
      )
      }

      {/* MOBILE VERSION */}
      <div className="block md:hidden w-full bg-[#262626] py-12">
        {/* Title */}
        <div className="w-full flex justify-center mb-8">
          <h2 className="text-5xl font-black text-white uppercase tracking-tighter">
            MATRIMONI
          </h2>
        </div>

        {/* Description */}
        <div className="px-6 mb-12 text-center">
          <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
            Il matrimonio è uno dei momenti più importanti nella vita di una coppia, e raccontarlo è un compito che richiede sensibilità, discrezione e professionalità.
            Lavoro in modo naturale, senza forzature, lasciando che siano le emozioni a guidare le immagini.
          </p>
        </div>

        {/* Vertical Stack of Images */}
        <div className="flex flex-col gap-4 px-4">
          {matrimoniPhotos.map((photo, idx) => (
            <div
              key={`mobile-matrimoni-${idx}`}
              className="w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer active:scale-95 transition-transform"
              onClick={() => openModal(photo)}
            >
              <Image
                src={photo}
                alt={`Matrimoni Mobile ${idx}`}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </div>

        {/* Description Part 2 */}
        <div className="px-6 mt-12 mb-8 text-center">
          <p className="text-white text-base font-semibold uppercase tracking-tight leading-tight">
            Le mie foto e i miei video non cercano la perfezione artificiale, ma la verità: ricordi autentici, eleganti e senza tempo.
            Il mio obiettivo è creare un racconto completo e sincero, capace di far rivivere ogni attimo, ogni sguardo e ogni emozione esattamente per come sono stati vissuti.
          </p>
        </div>
      </div>
    </>
  );
}
