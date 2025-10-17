export default function ContactsSection() {
  return (
    <section className="w-full flex flex-col items-center py-20 bg-[#f8f5e4]">
      <h2 className="text-5xl font-extrabold text-yellow-900 mb-8 animate-fade-in">Contatti</h2>
      <div className="max-w-xl text-yellow-900 text-xl text-center animate-fade-in-up">
        <p className="mb-6">Vuoi collaborare o richiedere informazioni? Scrivimi su WhatsApp oppure compila il modulo qui sotto!</p>
        <a
          href="https://wa.me/393491234567"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg px-8 py-4 font-bold text-xl transition-all"
        >
          WhatsApp
        </a>
        <form className="mt-8 flex flex-col gap-4 items-center">
          <input type="text" placeholder="Nome" className="w-full max-w-md px-4 py-2 rounded bg-yellow-100 text-yellow-900 border border-yellow-300" />
          <input type="email" placeholder="Email" className="w-full max-w-md px-4 py-2 rounded bg-yellow-100 text-yellow-900 border border-yellow-300" />
          <textarea placeholder="Messaggio" className="w-full max-w-md px-4 py-2 rounded bg-yellow-100 text-yellow-900 border border-yellow-300" rows={4} />
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold px-6 py-2 rounded-full mt-2">Invia</button>
        </form>
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
