"use client";
import VideoBackground from "./components/VideoBackground";
import Logo from "./components/Logo";
import PhotoGallery from "./components/PhotoGallery";
import GalleryAlbum from "./components/GalleryAlbum";
import ServiceSlider from "./components/ServiceSlider";
import AboutMe from "./components/AboutMe";
import ContactsSection from "./components/ContactsSection";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero/Homepage full screen */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center w-full"
        style={{
          backgroundImage: 'url(/bg-russo-studios.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
  {/* Overlay nero rimosso */}
        <Logo />
      </section>
      {/* Servizi full screen */}
  <section id="servizi" className="relative w-full bg-transparent flex flex-col items-center" style={{height: 'auto'}}>
        {/* Slider servizi */}
        <ServiceSlider />
      </section>
      {/* Chi sono full screen */}
      <section id="chi-sono" className="relative min-h-screen flex flex-col items-center justify-center w-full bg-[#f8f5e4]">
        <AboutMe />
      </section>
      {/* Contatti full screen */}
      <section id="contatti" className="relative min-h-screen flex flex-col items-center justify-center w-full bg-[#f8f5e4]">
        <ContactsSection />
      </section>
    </main>
  );
}
