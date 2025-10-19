"use client";
import LogoMaintenance from "../components/LogoMaintenance";

export default function MaintenancePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-black">
      <LogoMaintenance />
      <h1 className="text-6xl font-extrabold text-white mt-10 text-center flex items-center justify-center">
        Sito in manutenzione
        <span className="ml-4 animate-ellipsis text-6xl">&nbsp;<span>.</span><span>.</span><span>.</span></span>
      </h1>
      <style jsx>{`
        @keyframes ellipsis {
          0% { opacity: 0; }
          20% { opacity: 1; }
          40% { opacity: 1; }
          60% { opacity: 1; }
          80% { opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-ellipsis span {
          opacity: 0;
          animation: ellipsis 1.5s infinite;
        }
        .animate-ellipsis span:nth-child(1) {
          animation-delay: 0s;
        }
        .animate-ellipsis span:nth-child(2) {
          animation-delay: 0.3s;
        }
        .animate-ellipsis span:nth-child(3) {
          animation-delay: 0.6s;
        }
      `}</style>
    </main>
  );
}
