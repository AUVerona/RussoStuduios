import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";

const DiscoSection = dynamic(() => import("./components/DiscoSection"));
const ConcertiSection = dynamic(() => import("./components/ConcertiSection"));
const AziendaliSection = dynamic(() => import("./components/AziendaliSection"));
const VideoReelAziende = dynamic(() => import("./components/VideoReelAziende"));
const ImmobiliareSection = dynamic(() => import("./components/ImmobiliareSection"));
const MatrimoniSection = dynamic(() => import("./components/MatrimoniSection"));
const MerchSection = dynamic(() => import("./components/MerchSection"));
const ShopSection = dynamic(() => import("./components/ShopSection"));
const AboutMEsection = dynamic(() => import("./components/AboutMEsection"));
const ContactSection = dynamic(() => import("./components/ContactSection"));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white overflow-x-hidden">
      <div id="home">
        <HeroSection />
      </div>

      <ServicesSection />

      <div id="servizi-discoteche" className="scroll-mt-40">
        <DiscoSection />
      </div>

      <div id="concerti" className="scroll-mt-40">
        <ConcertiSection />
      </div>

      <div id="aziende" className="scroll-mt-40">
        <AziendaliSection />
        <VideoReelAziende />
      </div>

      <div id="immobiliare" className="scroll-mt-40">
        <ImmobiliareSection />
      </div>

      <div id="matrimoni" className="scroll-mt-40">
        <MatrimoniSection />
      </div>

      <div id="merch" className="scroll-mt-40">
        <MerchSection />
        <ShopSection />
      </div>

      <div id="chi-sono" className="scroll-mt-40">
        <AboutMEsection />
      </div>

      <ContactSection />
    </main>
  );
}
