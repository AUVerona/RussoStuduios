"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Video di sfondo */}
      <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none select-none">
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
      
      {/* RUSSOSTUDIOS© in basso con sfondo nero e movimento scroll */}
      <div className="absolute bottom-0 left-0 w-full pt-0 pb-0 overflow-hidden z-20">
        <div style={{background: '#262626', width: '100%', padding: 0, margin: 0, position: 'relative'}}>
          <div
            className="whitespace-nowrap text-white font-extrabold uppercase leading-none"
            style={{
              fontSize: 'clamp(40px, 8vw, 90px)',
              transform: `translateX(${-600 + scrollPosition * 0.5}px)`,
              transition: 'transform 0.1s linear',
              letterSpacing: '-0.05em',
              marginTop: 0,
              marginBottom: 0,
              lineHeight: 1,
              paddingBottom: 0,
              position: 'relative',
              top: '-15px'
            }}
          >
            {Array(10).fill(null).map((_, i) => (
              <span key={i}>
                RUSSOSTUDIOS
                <sup
                  className="text-[10px] md:text-[14px] align-super lowercase"
                  style={{ verticalAlign: 'text-bottom', position: 'relative', top: '-85px', display: 'inline-block', fontWeight: 400 }}
                >
                  ©
                </sup>{' '}
              </span>
            ))}
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
