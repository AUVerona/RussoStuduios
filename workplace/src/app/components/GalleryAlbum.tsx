"use client";
import React, { useState } from "react";

interface GalleryAlbumProps {
  title: string;
  description: string;
  cover: string;
  images?: string[];
  videos?: string[];
  folder: string;
}

export default function GalleryAlbum({ title, description, cover, images = [], videos = [], folder }: GalleryAlbumProps) {
  const [open, setOpen] = useState(false);
  const media = [
    ...(images?.map(img => ({ type: "image", src: folder + img })) || []),
    ...(videos?.map(vid => ({ type: "video", src: folder + vid })) || []),
  ];

  return (
    <>
      <button
        className="bg-neutral-200 rounded-xl shadow-lg overflow-hidden flex flex-col items-center p-4 hover:scale-105 transition-transform duration-300 cursor-pointer w-full"
        onClick={() => setOpen(true)}
        aria-label={title}
      >
        {cover.endsWith(".mp4") || cover.endsWith(".mov") ? (
          <video src={cover} className="w-full h-48 object-cover mb-4 rounded-lg" autoPlay loop muted playsInline />
        ) : (
          <img src={cover} alt={title} className="w-full h-48 object-cover mb-4 rounded-lg" />
        )}
        <h3 className="text-2xl font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-700 mb-2 text-center">{description}</p>
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="bg-neutral-100 rounded-2xl shadow-2xl p-6 max-w-4xl w-full relative animate-fade-in">
            <button
              className="absolute top-4 right-4 text-neutral-900 text-2xl font-bold bg-neutral-300 rounded-full px-3 py-1 hover:bg-neutral-400 transition"
              onClick={() => setOpen(false)}
              aria-label="Chiudi galleria"
            >
              &times;
            </button>
            <h2 className="text-3xl font-extrabold text-neutral-900 mb-6 text-center">{title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {media.map((m, idx) =>
                m.type === "image" ? (
                  <img
                    key={m.src}
                    src={m.src}
                    alt={title + " " + (idx + 1)}
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <video
                    key={m.src}
                    src={m.src}
                    className="w-full h-48 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    controls
                  />
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
