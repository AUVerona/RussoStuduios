"use client";
import TopScrollingText from "../components/TopScrollingText";

export default function ScrittePage() {
  return (
    <main className="min-h-screen bg-[#262626] flex flex-col items-center justify-start pt-12">
      <TopScrollingText />
      <div className="mt-24 text-white text-2xl font-bold">Scritte scorrevoli in alto</div>
    </main>
  );
}
