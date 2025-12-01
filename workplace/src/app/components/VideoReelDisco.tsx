"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import LazyVideo from "./LazyVideo";

// Small grid of looping video reels used as background for each block.
// Videos are currently placeholders (bgvideo1.mp4) located in /public/FOTO.

export default function VideoReelDisco() {
  // Specific videos for the reel
  const videos = [
    { src: "/FOTO/VIDEO/Disco1.webm", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco2.webm", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco3.webm", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco4.webm", type: "video/webm" },
  ];
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const rowRef = useRef<HTMLDivElement | null>(null);

  return (
    <section className="w-full bg-[#262626] py-12 overflow-hidden">
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
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src={video.src} type={video.type} />
                </video>

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
