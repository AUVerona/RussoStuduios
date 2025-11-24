"use client";

export default function TopScrollingText() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        background: '#262626',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    >
      <div className="whitespace-nowrap animate-scroll-text text-white text-lg font-light tracking-widest uppercase py-2" style={{pointerEvents: 'auto'}}>
        Fotografo · Videomaker · Dronista · Fotografo · Videomaker · Dronista · Fotografo · Videomaker · Dronista
      </div>
      <style jsx>{`
        @keyframes scroll-text {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-text {
          animation: scroll-text 20s linear infinite;
          display: inline-block;
        }
      `}</style>
    </div>
  );
}
