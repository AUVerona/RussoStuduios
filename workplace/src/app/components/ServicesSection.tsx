"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

const services = [
  {
    id: "servizi-discoteche",
    title: "SERVIZI PER DISCOTECHE EVENTI",
    image: "/FOTO/FOTO DISCO/1.webp"
  },
  {
    id: "concerti",
    title: "FOTO CONCERTI",
    image: "/FOTO/CONCERTI/1.webp"
  },
  {
    id: "aziende",
    title: "AZIENDE",
    image: "/FOTO/AZIENDE/1.webp"
  },
  {
    id: "immobiliare",
    title: "IMMOBILIARE",
    image: "/FOTO/AZIENDE/2.webp" // Using another Aziende photo for now as no specific folder
  },
  {
    id: "matrimoni",
    title: "MATRIMONI",
    image: "/FOTO/MATRIMONI/1.webp"
  }
];

export default function ServicesSection() {
  const topMarqueeRef = useRef<HTMLDivElement>(null);
  const bottomMarqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable animation on mobile to prevent crashes
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return;
    }

    let animationFrameId: number;

    const animate = () => {
      // Double check width in loop just in case, or rely on initial check?
      // Initial check is better for performance.
      const scrollY = window.scrollY;
      const speed = 0.5; // Adjust speed

      // Top Marquee: Moves Left
      if (topMarqueeRef.current) {
        const width = topMarqueeRef.current.scrollWidth / 2;
        const offset = scrollY * speed;
        const x = -(offset % width);
        topMarqueeRef.current.style.transform = `translateX(${x}px)`;
      }

      // Bottom Marquee: Moves Right
      if (bottomMarqueeRef.current) {
        const width = bottomMarqueeRef.current.scrollWidth / 2;
        const offset = scrollY * speed;
        // We want to move right, but we start from a negative offset to allow "scrolling in"
        // Actually, simplest is to move right: +offset
        // But we need to wrap.
        // x = (offset % width) - width; // Keeps it in range [-width, 0] moving right?
        // Let's try simple positive modulo.
        // If we move right, we go 0 -> width.
        // To make it seamless, we usually keep it negative and move towards 0.
        // Let's say we start at -width and add offset.
        const x = -width + (offset % width);
        bottomMarqueeRef.current.style.transform = `translateX(${x}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
      <section className="relative w-full bg-neutral-800 py-25">
        {/* Scritte infinite sopra (Scroll Driven) */}
        <div className="w-full overflow-hidden py-1 mb-4 flex">
          <div ref={topMarqueeRef} className="flex whitespace-nowrap will-change-transform">
            <div className="flex whitespace-nowrap text-3xl font-bold text-white uppercase tracking-tighter">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={'top-' + i} className="mx-4">SERVIZI</span>
              ))}
            </div>
            <div className="flex whitespace-nowrap text-3xl font-bold text-white uppercase tracking-tighter" aria-hidden="true">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={'top-dup-' + i} className="mx-4">SERVIZI</span>
              ))}
            </div>
          </div>
        </div>

        {/* Griglia delle card servizi - tutte sempre visibili */}
        <div className="relative z-10 flex flex-wrap justify-center items-stretch gap-6 px-8 my-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => {
                const element = document.getElementById(service.id);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {/* Foto di sfondo */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay scuro */}
              {/* Overlay scuro rimosso */}

              {/* Tab bianca con titolo */}
              <div className="absolute top-0 left-0 right-0 bg-white rounded-t-3xl p-8 text-center">
                <h3 className="text-lg font-bold text-black uppercase leading-tight">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Scritte infinite sotto (Scroll Driven Reverse) */}
        <div className="w-full overflow-hidden py-1 mt-8 flex">
          <div ref={bottomMarqueeRef} className="flex whitespace-nowrap will-change-transform">
            <div className="flex whitespace-nowrap text-3xl font-bold text-white uppercase tracking-tighter">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={'bot-' + i} className="mx-4">SERVIZI</span>
              ))}
            </div>
            <div className="flex whitespace-nowrap text-3xl font-bold text-white uppercase tracking-tighter" aria-hidden="true">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={'bot-dup-' + i} className="mx-4">SERVIZI</span>
              ))}
            </div>
          </div>
        </div>

        {/* Scritta DISCO infinita che entra nella sezione successiva */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30" style={{ transform: 'translateY(30%)' }}>
          <div className="whitespace-nowrap text-6xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem', animation: 'none' }}>
            DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO
          </div>
        </div>

        <style jsx>{`
        /* Keyframes removed as they are no longer used */
      `}</style>
      </section>

      {/* Gray description moved to ConcertiSection */}
    </>
  );
}
