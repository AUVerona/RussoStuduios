import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DiscoSection from "./components/DiscoSection";
import ConcertiSection from "./components/ConcertiSection";
import AziendaliSection from "./components/AziendaliSection";
import VideoReelAziende from "./components/VideoReelAziende";
import MerchSection from "./components/MerchSection";
import ShopSection from "./components/ShopSection";
import AboutMEsection from "./components/AboutMEsection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <HeroSection />
      <ServicesSection />
      <DiscoSection />
      <ConcertiSection />
      <AziendaliSection />
      <VideoReelAziende />
      <MerchSection />
      <ShopSection />
      <AboutMEsection />
      <ContactSection />
      {/* Temporarily removed: Matrimoni sections per request */}
    </main>
  );
}
