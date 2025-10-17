"use client";
import React, { useState } from "react";

const services = [
  {
    title: "Concerti",
    description: "Scatti live, emozioni e luci dal palco. Fotografie professionali che catturano l'energia e la magia dei concerti.",
    images: ["1P4A0177.jpg"],
    folder: "/FOTO/CONCERTI/"
  },
  {
    title: "Foto Disco",
    description: "Atmosfere, party e momenti unici in discoteca. Immagini che raccontano la notte e le sue emozioni.",
    images: ["1P4A0089.jpg"],
    folder: "/FOTO/FOTO DISCO/"
  },
  {
    title: "Matrimoni",
    description: "Ricordi indelebili, emozioni e dettagli speciali. Album fotografici per il giorno più importante.",
    images: ["1P4A1904 copia 2.jpg"],
    folder: "/FOTO/MATRIMONI/"
  }
];

export default function ServiceSlider() {
  const [current, setCurrent] = useState(0);
  const [photoIdx, setPhotoIdx] = useState(0);
  const service = services[current];
  const hasPhotos = service.images && service.images.length > 0;

  const nextService = () => {
    setCurrent((c) => (c + 1) % services.length);
    setPhotoIdx(0);
  };
  const prevService = () => {
    setCurrent((c) => (c - 1 + services.length) % services.length);
    setPhotoIdx(0);
  };
  const nextPhoto = () => {
    if (hasPhotos) setPhotoIdx((i) => (i + 1) % service.images.length);
  };
  const prevPhoto = () => {
    if (hasPhotos) setPhotoIdx((i) => (i - 1 + service.images.length) % service.images.length);
  };

  return (
    <div className="w-full flex flex-col items-center bg-neutral-100">
      <div className="flex flex-row w-full max-w-6xl h-[600px] items-center justify-center gap-0 relative overflow-hidden">
        {/* Descrizione a sinistra */}
        <div className="flex-1 flex flex-col justify-center items-start px-8 animate-fade-in-left h-full relative z-10">
          <h3 className="text-4xl font-bold text-neutral-900 mb-4">{service.title}</h3>
          <p className="text-lg text-neutral-700 mb-6 max-w-md">{service.description}</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={prevService}
              className="bg-neutral-300 hover:bg-neutral-400 text-neutral-900 rounded-full p-3 shadow transition"
              aria-label="Precedente servizio"
            >
              &#8592;
            </button>
            <button
              onClick={nextService}
              className="bg-neutral-300 hover:bg-neutral-400 text-neutral-900 rounded-full p-3 shadow transition"
              aria-label="Successivo servizio"
            >
              &#8594;
            </button>
          </div>
        </div>
        {/* Foto a destra, molto grande, con taglio diagonale sfumato */}
        <div className="flex-1 flex items-center justify-center h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-100 pointer-events-none z-10" style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 20% 0)'}} />
          {hasPhotos && (
            <div className="w-full h-full flex items-center justify-center relative">
              <img
                src={service.folder + service.images[photoIdx]}
                alt={service.title}
                className="w-[900px] h-[700px] object-cover rounded-2xl shadow-2xl transition-all duration-500"
                style={{clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 20% 0)', objectFit: 'cover'}}
              />
              <button
                onClick={prevPhoto}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-neutral-300 hover:bg-neutral-400 text-neutral-900 rounded-full p-3 shadow transition z-20"
                aria-label="Foto precedente"
              >&#8592;</button>
              <button
                onClick={nextPhoto}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-neutral-300 hover:bg-neutral-400 text-neutral-900 rounded-full p-3 shadow transition z-20"
                aria-label="Foto successiva"
              >&#8594;</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
