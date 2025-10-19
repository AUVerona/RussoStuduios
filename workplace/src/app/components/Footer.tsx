export default function Footer() {
  return (
    <footer className="w-full bg-black text-[#B1B1B1] py-8 px-4 flex flex-col items-center text-center text-sm border-t border-[#222] fixed bottom-0 left-0 z-40">
      <div className="flex flex-col md:flex-row md:justify-between w-full max-w-4xl items-center gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="font-extrabold text-lg tracking-wide mb-1 text-[#B1B1B1]">© 2025 RUSSOSTUDIOS, Inc.</div>
          <div className="text-[#B1B1B1]">Tutti i diritti riservati</div>
          <div className="text-[#B1B1B1]">P.IVA: <span className="font-semibold">05092480234</span></div>
        </div>
        <div className="hidden md:block h-16 border-l border-[#222] mx-8"></div>
        <div className="flex flex-col items-center gap-2">
          <div className="font-bold text-base text-[#B1B1B1]">Diego Russo | RussoStudios</div>
          <div className="text-[#B1B1B1]">Fotografo <span className="mx-1">|</span> Videomaker <span className="mx-1">|</span> Dronista</div>
          <div className="flex items-center gap-2 text-[#B1B1B1] font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#B1B1B1" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.382 5.09L2 22l5.09-1.382A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.13-.488-4.39-1.32l-.31-.2-3.02.82.81-2.95-.2-.32A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.13-6.19c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.29-1.22-1.51-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.07-.11-.5-1.21-.68-1.66-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.21 1.01 2.37c.19.16 1.61 2.46 3.93 3.35.55.19.98.3 1.31.39.55.14 1.05.12 1.45.07.44-.05 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.14-.42-.25z"/></svg>
            <span>335 106 5498</span>
          </div>
          <div className="flex items-center gap-2 text-[#B1B1B1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#B1B1B1" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 7 8-7V18z"/></svg>
            <span>PEC: russostudios@pec.it</span>
          </div>
          <div className="flex items-center gap-2 text-[#B1B1B1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#B1B1B1" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"/></svg>
            <a href="https://russostudios.it" target="_blank" rel="noopener noreferrer" className="underline text-[#B1B1B1]">russostudios.it</a>
          </div>
          <div className="flex items-center gap-2 text-[#B1B1B1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#B1B1B1" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 5.837 2.633 5.837 5.837 0 4.418-5.837 11.163-5.837 11.163S6.163 12.418 6.163 8c0-3.204 2.633-5.837 5.837-5.837zm0 7.837a2 2 0 110-4 2 2 0 010 4z"/></svg>
            <a href="https://instagram.com/russostudios_" target="_blank" rel="noopener noreferrer" className="underline text-[#B1B1B1]">@russostudios_</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
