export default function AboutMe() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[#f8f5e4]">
      <h2 className="text-5xl font-extrabold text-yellow-900 mb-8 animate-fade-in">Chi sono</h2>
      <div className="max-w-2xl text-yellow-900 text-xl text-center animate-fade-in-up">
        <p className="mb-6">
          <span className="font-bold text-yellow-700 text-2xl">Diego Russo</span><br />
          Fotografo, videomaker e dronista.<br />
          <span className="italic text-yellow-800">Racconto storie con immagini e video, unendo emozione e tecnica per creare ricordi indimenticabili. Ogni progetto è un viaggio unico, dove la creatività incontra la modernità.</span>
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <span className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full font-semibold shadow">Fotografo</span>
          <span className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full font-semibold shadow">Videomaker</span>
          <span className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full font-semibold shadow">Dronista</span>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s ease-out;
        }
      `}</style>
    </section>
  );
}

