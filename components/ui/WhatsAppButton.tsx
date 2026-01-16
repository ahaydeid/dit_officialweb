"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "6282126262451"; // Replace with actual number if needed
  const message = "Halo, saya tertarik dengan Edula.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-green-500/30 transition-all hover:scale-110 animate-bounce-slow"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-8 h-8 fill-current" />
    </a>
  );
}
