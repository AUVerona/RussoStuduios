"use client";
import React from "react";

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
  // Group photos into the requested pattern: Long, Stack(2), Long, Stack(2)...
  // We'll build an array of "columns" to render.
  const columns = [];
  let i = 0;
  let isLong = true; // Start with a long image

  while (i < matrimoniPhotos.length) {
    if (isLong) {
      // Add a single long image column
      columns.push({
        type: 'long',
        photos: [matrimoniPhotos[i]]
      });
      i++;
    } else {
      // Add a stacked column with up to 2 images
      const stackPhotos = [];
      if (i < matrimoniPhotos.length) stackPhotos.push(matrimoniPhotos[i++]);
      if (i < matrimoniPhotos.length) stackPhotos.push(matrimoniPhotos[i++]);

      columns.push({
        type: 'stack',
        photos: stackPhotos
      });
    }
    // Toggle pattern
    isLong = !isLong;
  }

  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="hidden md:block">
        <section className="relative w-full bg-[#262626] py-24 overflow-hidden">
          {/* Rettangolo alto */}
          {/* Rettangolo alto rimosso */}

          {/* Scritta MATRIMONI */}
          <div className="w-full flex justify-center pointer-events-none overflow-hidden" style={{ position: 'absolute', top: '32px', left: 0, zIndex: 30, marginTop: '0', maxWidth: '100vw', height: '96px' }}>
            <div className="whitespace-nowrap text-5xl md:text-8xl font-black text-white uppercase opacity-90 text-center" style={{ letterSpacing: '-0.1em', wordSpacing: '1rem', animation: 'none', lineHeight: '96px' }}>
              MATRIMONI MATRIMONI MATRIMONI MATRIMONI MATRIMONI MATRIMONI MATRIMONI MATRIMONI MATRIMONI
            </div>
          </div>

          <div className="relative z-10 container mx-auto px-4 mt-32">
            {/* Mixed Layout: Horizontal Scroll */}
            <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x snap-mandatory items-stretch h-[600px]">
              {columns.map((col, idx) => (
                <div key={idx} className="flex-shrink-0 snap-center h-full">
                  {col.type === 'long' ? (
                    // Long Image Column
                    <div className="w-[85vw] md:w-[400px] h-full rounded-xl overflow-hidden">
                      <img
                        src={col.photos[0]}
                        alt={`Matrimonio Long ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    // Stacked Column
                    <div className="w-[85vw] md:w-[400px] h-full flex flex-col gap-6">
                      {col.photos.map((photo, pIdx) => (
                        <div key={pIdx} className="w-full h-1/2 rounded-xl overflow-hidden">
                          <img
                            src={photo}
                            alt={`Matrimonio Stack ${idx}-${pIdx}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Rettangolo basso */}
          {/* Rettangolo basso rimosso */}
        </section>

        {/* Descrizione Matrimoni */}
        <div className="w-full relative" style={{ background: '#262626' }}>
          <div className="max-w-6xl mx-auto px-6 py-12 text-center">
            <p className="text-white text-lg font-semibold uppercase tracking-tight leading-tight">
              Il matrimonio è uno dei momenti più importanti nella vita di una coppia, e raccontarlo è un compito che richiede sensibilità, discrezione e professionalità.
              Lavoro in modo naturale, senza forzature, lasciando che siano le emozioni a guidare le immagini.
              Le mie foto e i miei video non cercano la perfezione artificiale, ma la verità: ricordi autentici, eleganti e senza tempo.
              Il mio obiettivo è creare un racconto completo e sincero, capace di far rivivere ogni attimo, ogni sguardo e ogni emozione esattamente per come sono stati vissuti.
            </p>
          </div>
        </div>
      </div>

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
            <div key={`mobile-matrimoni-${idx}`} className="w-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={photo}
                alt={`Matrimoni Mobile ${idx}`}
                className="w-full h-auto object-cover"
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
