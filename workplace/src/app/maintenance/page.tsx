"use client";
import LogoMaintenance from "../components/LogoMaintenance";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";

// Data di fine manutenzione fissa (esempio: 7 giorni da ora)
const MAINTENANCE_END = new Date("2025-12-01T00:00:00Z").getTime();

export default function MaintenancePage() {
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null);

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((MAINTENANCE_END - now) / 1000));
      setSecondsLeft(diff);
    };
    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const days = secondsLeft !== null ? Math.floor(secondsLeft / (24 * 60 * 60)) : 0;
  const hours = secondsLeft !== null ? Math.floor((secondsLeft % (24 * 60 * 60)) / (60 * 60)) : 0;
  const minutes = secondsLeft !== null ? Math.floor((secondsLeft % (60 * 60)) / 60) : 0;
  const seconds = secondsLeft !== null ? secondsLeft % 60 : 0;

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black px-4">
      <main className="flex-1 w-full flex flex-col items-center justify-center">
        <LogoMaintenance />
        <div className="flex flex-col items-center w-full mt-6">
          <h1 className="text-xl sm:text-6xl font-extrabold text-white mt-4 text-center flex flex-col sm:flex-row items-center justify-center leading-tight">
            <span>Sito in manutenzione</span>
          </h1>
          <div className="mt-8 text-3xl sm:text-5xl font-bold text-white text-center">
            Torniamo online tra:<br />
            <span className="text-4xl sm:text-6xl font-mono">
              {days} giorni, {hours}h {minutes}m {seconds}s
            </span>
          </div>
        </div>
      </main>
      <div className="w-full max-w-4xl mx-auto">
        <Footer />
      </div>
    </div>
  );
}
