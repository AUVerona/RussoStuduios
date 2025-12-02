"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import VideoReelDisco from "./VideoReelDisco";

import { useImageModal } from "../context/ImageModalContext";

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
  const [isMobile, setIsMobile] = React.useState(true); // Default to true to avoid loading desktop assets on mobile init
  const { openModal } = useImageModal();

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return; // Don't run animation loop on mobile

    let animationFrameId: number;

    const animate = () => {
      const scrollY = window.scrollY;
      const speed = 0.5; // Adjust speed

      // Row 1 (Top): Moves Left to Right (L->R)
      if (row1Ref.current) {
        const width = row1Ref.current.scrollWidth / 2;
        // Infinite scroll: moves right as you scroll down
        // Start at -width (seeing the duplicate set) and move right towards 0
        const x = -width + (scrollY * speed) % width;
        row1Ref.current.style.transform = `translateX(${x}px)`;
      }

      // Row 2 (Bottom): Moves Right to Left (R->L)
      if (row2Ref.current) {
        const width = row2Ref.current.scrollWidth / 2;
        // Infinite scroll: moves left as you scroll down
        // Start at 0 and move left towards -width
        const x = -(scrollY * speed) % width;
        row2Ref.current.style.transform = `translateX(${x}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMobile]);

  return (
    <>
      <div id="servizi-discoteche" className="scroll-mt-24" />
      {/* DESKTOP VERSION */}
      {!isMobile && (
        <div className="hidden md:block">
          {/* Sezione principale con video di sfondo */}
          <section className="relative min-h-screen w-full overflow-hidden bg-black">

            {/* Wrapper per contenuto con overflow hidden (immagini) - BG BLACK FORCED */}
            <div className="relative w-full h-full overflow-hidden bg-black">
              {/* Video di sfondo */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src="/FOTO/FOTO DISCO/1.webp"
                  alt="Disco Background"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Griglia 2 righe di foto infinite */}
              <div className="relative z-10 flex flex-col gap-4 mt-16 py-24">

                {/* Prima riga - scorre da sinistra a destra (L->R) */}
                {/* Changed overflow-hidden to overflow-visible to allow hover scale to pop out vertically */}
                <div className="flex overflow-visible">
                  <div ref={row1Ref} className="flex flex-nowrap will-change-transform" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    {/* Original */}
                    {discoPhotosRow1.map((photo, idx) => (
                      <div key={`row1-${idx}`} className="flex-shrink-0 mr-4 relative rounded-3xl transition-all duration-300 hover:scale-105 hover:z-50" style={{ transform: 'translateZ(0)' }}>
                        <Image
                          src={photo}
                          alt="Foto disco"
                          width={384}
                          height={320}
                          className="w-96 h-80 object-cover rounded-3xl cursor-pointer"
                          style={{ display: 'block' }}
                          sizes="(max-width: 768px) 50vw, 25vw"
                          onClick={() => openModal(photo)}
                        />
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {discoPhotosRow1.map((photo, idx) => (
                      <div key={`row1-dup-${idx}`} className="flex-shrink-0 mr-4 relative rounded-3xl transition-all duration-300 hover:scale-105 hover:z-50" style={{ transform: 'translateZ(0)' }}>
                        <Image
                          src={photo}
                          alt="Foto disco"
                          width={384}
                          height={320}
                          className="w-96 h-80 object-cover rounded-3xl cursor-pointer"
                          style={{ display: 'block' }}
                          sizes="(max-width: 768px) 50vw, 25vw"
                          onClick={() => openModal(photo)}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seconda riga - scorre da destra a sinistra (R->L) */}
                {/* Changed overflow-hidden to overflow-visible to allow hover scale to pop out vertically */}
                <div className="flex overflow-visible">
                  <div ref={row2Ref} className="flex flex-nowrap will-change-transform" style={{ transform: 'translate3d(0,0,0)', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                    {/* Original */}
                    {discoPhotosRow2.map((photo, idx) => (
                      <div key={`row2-${idx}`} className="flex-shrink-0 mr-4 relative rounded-3xl transition-all duration-300 hover:scale-105 hover:z-50" style={{ transform: 'translateZ(0)' }}>
                        <Image
                          src={photo}
                          alt="Foto disco"
                          width={384}
                          height={320}
                          className="w-96 h-80 object-cover rounded-3xl cursor-pointer"
                          style={{ display: 'block' }}
                          sizes="(max-width: 768px) 50vw, 25vw"
                          onClick={() => openModal(photo)}
                        />
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {discoPhotosRow2.map((photo, idx) => (
                      <div key={`row2-dup-${idx}`} className="flex-shrink-0 mr-4 relative rounded-3xl transition-all duration-300 hover:scale-105 hover:z-50" style={{ transform: 'translateZ(0)' }}>
                        <Image
                          src={photo}
                          alt="Foto disco"
                          width={384}
                          height={320}
                          className="w-96 h-80 object-cover rounded-3xl cursor-pointer"
                          style={{ display: 'block' }}
                          sizes="(max-width: 768px) 50vw, 25vw"
                          onClick={() => openModal(photo)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div >
          </section >

          {/* Descrizione attaccata ai reel, con marquee in mezzo */}
          < div className="w-full relative" style={{ background: '#262626' }
          }>
            <div className="max-w-6xl mx-auto px-6 pt-8 pb-2">
              <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                Raccontare una serata significa catturare l’atmosfera, l’energia e ogni dettaglio che la rende unica. Realizzo servizi fotografici pensati per valorizzare l’evento e il locale, mostrando in modo chiaro e moderno ciò che il pubblico vive.
              </p>
            </div>

            {/* Scritta DISCO fissa, centrata, non scrollabile */}
            <div className="w-full flex justify-center pointer-events-none overflow-hidden mt-32 md:mt-20 z-10" style={{ position: 'relative', zIndex: 50, marginBottom: '-2rem', maxWidth: '100vw' }}>
              <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', animation: 'none' }}>
                DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO DISCO
              </div>
            </div>

            {/* Reel subito sotto, senza spazio */}
            <VideoReelDisco />
          </div >

          <div className="w-full relative" style={{ background: '#262626' }}>
            <div className="max-w-6xl mx-auto px-6  pt-8 pb-2">
              <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
                Affianco alle foto anche video in stile reel, ideali per i social: dinamici, creativi e studiati per promuovere la serata, aumentare la visibilità del club e attirare nuovo pubblico. Che si tratti di un evento speciale, un DJ set o una stagione intera, il mio obiettivo è creare un racconto completo e sincero, capace di far rivivere ogni attimo, ogni sguardo e ogni emozione esattamente per come sono stati vissuti.
              </p>
            </div>
          </div>
        </div >
      )}

      {/* MOBILE VERSION */}
      <div className="block md:hidden w-full bg-[#262626] py-12">
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

        {/* Vertical Stack of Images (Selection) */}
        <div className="flex flex-col gap-4 px-4">
          {[...discoPhotosRow1, ...discoPhotosRow2].slice(0, 8).map((photo, idx) => (
            <div key={`mobile-disco-${idx}`} className="w-full rounded-3xl overflow-hidden shadow-2xl cursor-pointer active:scale-95 transition-transform" onClick={() => openModal(photo)}>
              <Image
                src={photo}
                alt={`Disco Mobile ${idx}`}
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
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
