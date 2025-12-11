"use client";
import React, { useRef } from "react";
import LazyVideo from "./LazyVideo";

// Small grid of looping video reels used as background for each block.
// Videos are currently placeholders (bgvideo1.mp4) located in /public/FOTO.

export default function VideoReelDisco() {
  const rowRef = useRef<HTMLDivElement | null>(null);

  // Specific videos for the reel
  const videos = [
    { src: "/FOTO/VIDEO/Disco1.webm", poster: "/FOTO/FOTO DISCO/1.webp", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco2.webm", poster: "/FOTO/FOTO DISCO/2.webp", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco3.webm", poster: "/FOTO/FOTO DISCO/3.webp", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco4.webm", poster: "/FOTO/FOTO DISCO/4.webp", type: "video/webm" },
  ];

  return (
    <section className="hidden md:block w-full bg-[#000000] py-12 overflow-hidden">
      <div className="w-full mx-0 px-0">
        {/* Title removed per request */}

        {/* Keep all four reels on one row and don't wrap; allow horizontal scroll on small screens */}
        {/* Reel row: no horizontal scroll, edge-to-edge, alternate up/down */}
        <div ref={rowRef} className="flex items-end w-full px-0 mx-0 gap-6" style={{ touchAction: 'pan-y' }}>
          {videos.map((video, index) => (
            <div
              key={index}
              className={
                "flex flex-col items-center transform " + (index % 2 === 0 ? "-translate-y-6 md:-translate-y-10" : "translate-y-6 md:translate-y-10")
              }
              style={{ willChange: "transform" }}
            >
              {/* Instagram-like tall reel card: make it rectangular and tall (9:16) and large */}
              {/* make slightly smaller so all 4 remain inside the page width */}
              <div
                className={
                  "relative rounded-3xl overflow-hidden bg-black shadow-2xl flex-shrink-0 " +
                  (index % 2 === 0 ? "-translate-y-8 md:-translate-y-16" : "translate-y-8 md:translate-y-16")
                }
                style={{ width: '23vw', aspectRatio: '9/16', minWidth: 0, minHeight: 320 }}
              >
                <LazyVideo
                  src={video.src}
                  poster={video.poster}
                  className="absolute inset-0 w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  rootMargin="50px"
                />

                {/* label removed per request */}
              </div>
              {/* Description removed per each reel */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
