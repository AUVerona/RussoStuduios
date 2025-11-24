"use client";
import React, { useEffect, useState } from "react";

const matrimoniPhotos = [
  "/FOTO/MATRIMONI/1P4A1904 copia 2.jpg",
  "/FOTO/MATRIMONI/1P4A1947 copia.jpg",
  "/FOTO/MATRIMONI/1P4A1953 copia.jpg",
  "/FOTO/MATRIMONI/1P4A2105 copia.jpg",
  "/FOTO/MATRIMONI/1P4A2788.JPG",
  "/FOTO/MATRIMONI/1P4A4152.JPG",
];

export default function MatrimoniSection() {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="relative min-h-screen w-full bg-white py-20">
      <h2 className="text-center text-8xl font-black text-neutral-900 uppercase mb-12">Matrimoni</h2>
      
      {/* Effetto zoom con scroll */}
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {matrimoniPhotos.map((photo, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-xl shadow-2xl"
              style={{
                transform: `scale(${1 + scrollY * 0.0002})`,
                opacity: Math.max(0.5, 1 - scrollY * 0.0005),
                transition: "all 0.3s ease-out",
              }}
            >
              <img
                src={photo}
                alt={`Matrimonio ${idx + 1}`}
                className="w-full h-72 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
