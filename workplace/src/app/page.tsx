"use client";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ConcertiSection from "./components/ConcertiSection";
import DiscoSection from "./components/DiscoSection";
import AziendaliSection from "./components/AziendaliSection";
import VideoReelAziende from "./components/VideoReelAziende";

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesSection />
      <DiscoSection />
      <ConcertiSection />
      <AziendaliSection />
      <VideoReelAziende />
      {/* Temporarily removed: Matrimoni sections per request */}
    </main>
  );
}

