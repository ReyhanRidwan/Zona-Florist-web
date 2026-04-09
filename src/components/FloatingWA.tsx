import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/src/constants";

export default function FloatingWA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110 active:scale-95"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-3 hidden rounded-lg bg-white px-3 py-1.5 text-sm font-medium text-foreground shadow-lg md:block">
        Tanya Kami Sekarang
      </span>
    </a>
  );
}
