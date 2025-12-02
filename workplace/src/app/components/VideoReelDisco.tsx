"use client";
import React, { useRef, useState } from "react";
import { track } from "../utils/crashTracker";

export default function VideoReelDisco() {
  const videos = [
    { src: "/FOTO/VIDEO/Disco1.webm", poster: "/FOTO/FOTO DISCO/1.webp", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco2.webm", poster: "/FOTO/FOTO DISCO/2.webp", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco3.webm", poster: "/FOTO/FOTO DISCO/3.webp", type: "video/webm" },
    { src: "/FOTO/VIDEO/Disco4.webm", poster: "/FOTO/FOTO DISCO/4.webp", type: "video/webm" },
  ];

  const rowRef = useRef<HTMLDivElement | null>(null);

  const ReelItem = ({ video, index }: { video: { src: string, poster: string, type: string }, index: number }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Loop first 4 seconds when not hovering
    React.useEffect(() => {
      track('VideoReelDisco: useEffect montaggio iniziato');

      const videoElement = videoRef.current;
      if (!videoElement) {
        track('VideoReelDisco: Elemento video NON trovato');
        return;
      }

      track('VideoReelDisco: Elemento video trovato nel DOM');

      const handleTimeUpdate = () => {
        if (!isHovering && videoElement.currentTime >= 4) {
          videoElement.currentTime = 0;
        }
      };

      videoElement.addEventListener('timeupdate', handleTimeUpdate);
      track('VideoReelDisco: Event listener timeupdate aggiunto');

      // Add event listeners for debugging
      videoElement.addEventListener('canplay', () => track('VideoReelDisco: Canplay event'));
      videoElement.addEventListener('playing', () => track('VideoReelDisco: Playing event'));
      videoElement.addEventListener('error', (e) => track(`VideoReelDisco: Video Error - ${e}`));

      // Try to play the video
      track('VideoReelDisco: Tentativo play()');
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            track('VideoReelDisco: Play() riuscito');
          })
          .catch((error) => {
            track(`VideoReelDisco: Play() fallito - ${error.message}`);
            console.log('Autoplay prevented');
          });
      }

      return () => {
        track('VideoReelDisco: Cleanup - rimozione event listeners');
        videoElement.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }, [isHovering]);

    const handleMouseEnter = () => {
      setIsHovering(true);
      if (window.matchMedia("(hover: hover)").matches) {
        if (videoRef.current) {
          videoRef.current.play().catch(() => { });
        }
        setIsPlaying(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      if (window.matchMedia("(hover: hover)").matches) {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => { });
        }
        setIsPlaying(false);
      }
    };

    const handleClick = () => {
      if (window.matchMedia("(hover: none)").matches || window.innerWidth < 768) {
        if (videoRef.current) {
          if (videoRef.current.paused) {
            videoRef.current.play().catch(() => { });
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      }
    };

    return (
      <div
        className={
          "flex flex-col items-center transform " + (index % 2 === 0 ? "-translate-y-6 md:-translate-y-10" : "translate-y-6 md:translate-y-10")
        }
        style={{ willChange: "transform" }}
      >
        <div
          className={
            "relative rounded-3xl overflow-hidden bg-black shadow-2xl flex-shrink-0 transition-all duration-500 hover:scale-105 hover:z-40 " +
            (index % 2 === 0 ? "-translate-y-8 md:-translate-y-16" : "translate-y-8 md:translate-y-16")
          }
          style={{ width: '23vw', aspectRatio: '9/16', minWidth: 0, minHeight: 320 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
        >
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            autoPlay
            playsInline
            loop
            preload="metadata"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#262626] py-12 overflow-visible">
      <div className="w-full mx-0 px-0">
        <div ref={rowRef} className="flex items-end w-full px-0 mx-0 gap-6" style={{ touchAction: 'pan-y' }}>
          {videos.map((video, index) => (
            <ReelItem key={index} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
