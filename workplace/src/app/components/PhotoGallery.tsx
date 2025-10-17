"use client";
import React, { useState } from "react";

const photos = [
  "/photo1.jpg",
  "/photo2.jpg",
  "/photo3.jpg",
  "/photo4.jpg",
]; // Sostituisci con le tue immagini

export default function PhotoGallery() {
  const [current, setCurrent] = useState(0);

  const nextPhoto = () => setCurrent((c) => (c + 1) % photos.length);
  const prevPhoto = () => setCurrent((c) => (c - 1 + photos.length) % photos.length);

  return (
    <div className="w-full flex flex-col items-center py-12">
      <h2 className="text-4xl font-extrabold text-yellow-900 mb-8 animate-fade-in">Servizi</h2>
      <div className="flex flex-row w-full max-w-5xl h-96 items-center justify-center gap-8 animate-slide-in">
        <div className="flex-1 flex flex-col justify-center items-start px-4">
          <p className="text-2xl text-yellow-900 font-semibold mb-6 animate-fade-in-up">
            Album fotografico professionale, video emozionanti, riprese drone mozzafiato.<br />
            Ogni servizio è pensato per stupire e raccontare la tua storia in modo unico e moderno.
          </p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={prevPhoto}
              className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 rounded-full p-3 shadow transition"
            >
              &#8592;
            </button>
            <button
              onClick={nextPhoto}
              className="bg-yellow-200 hover:bg-yellow-300 text-yellow-900 rounded-full p-3 shadow transition"
            >
              &#8594;
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={photos[current]}
            alt={`Foto ${current + 1}`}
            className="rounded-2xl shadow-2xl object-cover w-full h-96 transition-all duration-700 animate-gallery"
          />
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }
        @keyframes gallery {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-gallery {
          animation: gallery 0.7s ease-out;
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateX(80px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in {
          animation: slide-in 1.2s cubic-bezier(.77,.2,.32,1.01);
        }
      `}</style>
    </div>
  );
}
