export default function Logo() {
  return (
    <div className="relative z-10 flex flex-col items-center mt-24 mb-8">
            <img src="/logorussostudios.png" alt="Logo Russo Studios" className="w-[200px] sm:w-[700px] max-w-full h-auto drop-shadow-xl mb-0" />
            <span className="text-xl font-semibold text-white tracking-wide mb-0">Fotografo | Videomaker | Dronista</span>
            <div className="flex gap-8 mt-0">
            <a href="#servizi" className="bg-neutral-300 hover:bg-neutral-400 text-neutral-900 font-bold px-6 py-2 rounded-full shadow transition-all text-lg">Servizi</a>
            <a href="#chi-sono" className="bg-neutral-300 hover:bg-neutral-400 text-neutral-900 font-bold px-6 py-2 rounded-full shadow transition-all text-lg">Chi sono</a>
            <a href="#contatti" className="bg-neutral-300 hover:bg-neutral-400 text-neutral-900 font-bold px-6 py-2 rounded-full shadow transition-all text-lg">Contatti</a>
      </div>
    </div>
  );
}
