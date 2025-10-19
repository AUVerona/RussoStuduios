import React from "react";

export default function WhatsAppButton() {
  return (
    <a
          href="https://wa.me/393351065498" // Sostituisci con il tuo numero
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center px-5 py-3 font-bold text-lg transition-all"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="mr-2"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.85.504 3.59 1.382 5.09L2 22l5.09-1.382A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.61 0-3.13-.488-4.39-1.32l-.31-.2-3.02.82.81-2.95-.2-.32A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8zm4.13-6.19c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.5.11-.15.22-.57.71-.7.86-.13.15-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.29-1.22-1.51-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.07-.11-.5-1.21-.68-1.66-.18-.44-.36-.38-.5-.39-.13-.01-.28-.01-.43-.01-.15 0-.39.06-.6.28-.21.22-.8.78-.8 1.9s.82 2.21 1.01 2.37c.19.16 1.61 2.46 3.93 3.35.55.19.98.3 1.31.39.55.14 1.05.12 1.45.07.44-.05 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.05-.09-.2-.14-.42-.25z" />
      </svg>
      WhatsApp
    </a>
  );
}
