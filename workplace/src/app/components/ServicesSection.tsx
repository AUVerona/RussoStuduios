"use client";

import React from "react";
import Image from "next/image";

const services = [
  { 
    id: "servizi-discoteche", 
    title: "SERVIZI PER DISCOTECHE EVENTI",
    image: "/FOTO/FOTO DISCO/IMG_3612.JPG"
  },
  { 
    id: "concerti", 
    title: "FOTO CONCERTI",
    image: "/FOTO/CONCERTI/IMG_1056.JPG"
  },
  { 
    id: "aziende", 
    title: "AZIENDE",
    image: "/FOTO/FOTO DISCO/IMG_3612.JPG"
  },
  { 
    id: "immobiliare", 
    title: "IMMOBILIARE",
    image: "/FOTO/FOTO DISCO/IMG_3612.JPG"
  },
  { 
    id: "matrimoni", 
    title: "MATRIMONI",
    image: "/FOTO/MATRIMONI/IMG_0065.JPG"
  }
];

export default function ServicesSection() {
  const topMarqueeRef = React.useRef<HTMLDivElement | null>(null);
  const bottomMarqueeRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    // Keep a scroll-driven offset for each marquee. Use RAF for smoothness.
    let lastScrollY = window.scrollY;
    let rafId: number | null = null;
    // store current offset for each marquee
    let topOffset = 0;
    let bottomOffset = 0;

    const update = () => {
      // No-op if both refs missing
      if (!topMarqueeRef.current && !bottomMarqueeRef.current) return;

      const currentY = window.scrollY;
      const delta = currentY - lastScrollY; // positive when scrolling down

      // adjust offsets; tweak multipliers to taste
      topOffset += delta * -0.5; // move left when scrolling down
      bottomOffset += delta * 0.6; // move right when scrolling down (opposite)

      const topEl = topMarqueeRef.current;
      const bottomEl = bottomMarqueeRef.current;

      if (topEl) {
        // keep offset bounded by width for seamless wrap
        const wrapWidth = topEl.scrollWidth / 2 || 1;
        topOffset = ((topOffset % wrapWidth) + wrapWidth) % wrapWidth;
        topEl.style.transform = `translateX(${-topOffset}px)`;
      }
      if (bottomEl) {
        const wrapWidth = bottomEl.scrollWidth / 2 || 1;
        bottomOffset = ((bottomOffset % wrapWidth) + wrapWidth) % wrapWidth;
        bottomEl.style.transform = `translateX(${-bottomOffset}px)`;
      }

      lastScrollY = currentY;
      rafId = null;
    };

    const onScroll = () => {
      if (rafId == null) rafId = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
  return (
    <>
    <section className="relative w-full bg-neutral-800 py-25">
      {/* Scritte infinite sopra (scroll-driven) */}
      <div className="w-full overflow-hidden py-1 mb-4">
        <div ref={topMarqueeRef} className="marquee-inner text-3xl font-bold text-white uppercase tracking-tighter whitespace-nowrap" style={{ willChange: 'transform' }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={'top-'+i} className="mx-2 md:mx-1">SERVIZI</span>
          ))}
        </div>
      </div>
      
      {/* Griglia delle card servizi - tutte sempre visibili */}
      <div className="relative z-10 flex flex-wrap justify-center items-stretch gap-6 px-8 my-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-20px)] min-h-[400px] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300"
          >
            {/* Foto di sfondo */}
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="absolute inset-0 w-full h-full object-cover"
              style={{objectFit: 'cover'}}
              priority={false}
            />
            
            {/* Overlay scuro */}
            <div className="absolute inset-0 bg-black bg-opacity-30" />
            
            {/* Tab bianca con titolo */}
            <div className="absolute top-0 left-0 right-0 bg-white rounded-t-3xl p-8 text-center">
              <h3 className="text-lg font-bold text-black uppercase leading-tight">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scritte infinite sotto (scroll-driven) */}
      <div className="w-full overflow-hidden py-1 mt-8">
        <div ref={bottomMarqueeRef} className="marquee-inner text-3xl font-bold text-white uppercase tracking-tighter whitespace-nowrap" style={{ willChange: 'transform' }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={'bot-'+i} className="mx-2 md:mx-1">SERVIZI</span>
          ))}
        </div>
      </div>
      
      {/* Scritta DISCO infinita che entra nella sezione successiva */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-30" style={{ transform: 'translateY(30%)' }}>
        <div className="whitespace-nowrap animate-scroll-right-disco text-6xl md:text-8xl font-black text-white uppercase opacity-90" style={{ letterSpacing: '-0.1em', wordSpacing: '1.5rem' }}>
          DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO
        </div>
      </div>
      
      <style jsx>{`
        /* top/bottom marquees are driven by JS. Keep DISCO animation. */
  @keyframes scroll-right-disco {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
  }
        .marquee-inner {
          display: inline-flex;
          white-space: nowrap;
        }
      `}</style>
    </section>

      {/* Gray description moved to ConcertiSection */}
    </>
  );
}
