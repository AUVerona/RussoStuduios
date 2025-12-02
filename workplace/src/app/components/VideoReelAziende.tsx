"use client";
import React from "react";

export default function VideoReelAziende() {
  const videos = [
    { src: "/FOTO/VIDEO/Azienda1.webm", poster: "/FOTO/AZIENDE/1.webp" },
    { src: "/FOTO/VIDEO/Azienda2.webm", poster: "/FOTO/AZIENDE/2.webp" },
    { src: "/FOTO/VIDEO/Azienda1.webm", poster: "/FOTO/AZIENDE/3.webp" },
  ];

  const ReelItem = ({ video }: { video: { src: string, poster: string } }) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);

    // Loop first 4 seconds when not hovering
    React.useEffect(() => {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const handleTimeUpdate = () => {
        if (!isHovering && videoElement.currentTime >= 4) {
          videoElement.currentTime = 0;
        }
      };

      videoElement.addEventListener('timeupdate', handleTimeUpdate);

      // Try to play the video
      const playPromise = videoElement.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Autoplay prevented');
        });
      }

      return () => {
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
      <div className="relative w-[80vw] md:w-[25vw] aspect-[9/16] transition-all duration-500 hover:scale-105 hover:z-40">
        <div
          className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-black"
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
    <section className="relative w-full min-h-screen bg-[#262626] flex items-center justify-center py-24 overflow-visible">
      <div className="w-full max-w-[1800px] flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-8">
        {videos.map((video, index) => (
          <ReelItem key={index} video={video} />
        ))}
      </div>
    </section>
  );
}
