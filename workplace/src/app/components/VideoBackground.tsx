import React from "react";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover z-0"
      src="/video.mp4" // Sostituisci con il tuo video
    >
      Il tuo browser non supporta il video.
    </video>
  );
}
