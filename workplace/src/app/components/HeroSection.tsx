"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LazyVideo from "./LazyVideo";


export default function HeroSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);



  useEffect(() => {


    // Marquee animation
    let animationFrameId: number;
    const animate = () => {
      if (marqueeRef.current) {
        const scrollY = window.scrollY;
        const speed = 0.5; // Adjust speed as needed

        // Calculate offset based on scroll
        // Moving left as we scroll down
        const offset = scrollY * speed;

        // Assuming the content is duplicated (2 copies), we wrap around half the width
        const width = marqueeRef.current.scrollWidth / 2;

        // Use modulo to create infinite loop effect
        const x = -(offset % width);

        marqueeRef.current.style.transform = `translateX(${x}px)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Video di sfondo */}
      <div className="absolute inset-0 w-full h-full z-0">
        <LazyVideo
          src="/FOTO/VIDEO/videobg1.webm"
          poster="/sfondobase.png"
          disableOnMobile={true}
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Scritte scorrevoli in alto */}
      <div className="absolute top-24 left-0 w-full overflow-hidden z-20" style={{ background: '#262626' }}>
        <div className="whitespace-nowrap animate-scroll-text text-white text-lg font-light tracking-widest uppercase">
          Fotografo · Videomaker · Dronista · Fotografo · Videomaker · Dronista · Fotografo · Videomaker · Dronista
        </div>
      </div>

      {/* Logo al centro */}
      <div className="relative z-20 flex flex-col items-center">
        <Image
          src="/logorussostudios.png"
          alt="Russo Studios"
          width={300}
          height={120}
          className="w-[120px] sm:w-[200px] md:w-[300px] max-w-full h-auto drop-shadow-2xl animate-fade-in"
          priority={true}
        />
      </div>

      {/* RUSSOSTUDIOS© in basso con sfondo nero e movimento scroll infinito */}
      <div className="absolute bottom-0 left-0 w-full pt-0 pb-0 overflow-hidden z-20">
        <div style={{ background: '#262626', width: '100%', padding: 0, margin: 0, position: 'relative' }}>
          <div className="flex whitespace-nowrap overflow-hidden">
            {/* Container for the moving text */}
            <div ref={marqueeRef} className="flex whitespace-nowrap will-change-transform">
              {/* First copy */}
              <div className="flex whitespace-nowrap">
                {Array(10).fill(null).map((_, i) => (
                  <span key={i} className="text-white font-extrabold uppercase leading-none mx-2 md:mx-4" style={{ fontSize: 'clamp(32px, 12vw, 90px)', letterSpacing: '-0.05em' }}>
                    RUSSOSTUDIOS
                  </span>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex whitespace-nowrap" aria-hidden="true">
                {Array(10).fill(null).map((_, i) => (
                  <span key={`dup-${i}`} className="text-white font-extrabold uppercase leading-none mx-2 md:mx-4" style={{ fontSize: 'clamp(32px, 12vw, 90px)', letterSpacing: '-0.05em' }}>
                    RUSSOSTUDIOS
                    <sup
                      className="text-[8px] md:text-[14px] align-super lowercase"
                      style={{ verticalAlign: 'text-bottom', position: 'relative', top: '-0.5em', fontWeight: 400 }}
                    >
                      ©
                    </sup>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 20s linear infinite;
          display: inline-block;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }
      `}</style>
    </section>
  );
}
