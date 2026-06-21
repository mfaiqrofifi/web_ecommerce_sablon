import { MessageCircle } from "lucide-react";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={createWhatsAppLink("Halo Lancar Konveksi Bordir & Sablon, saya mau konsultasi sablon atau bordir custom.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Order via WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--orange)] text-white shadow-[5px_5px_0_0_var(--ink)] transition hover:-translate-y-1 hover:bg-[color:var(--ink)]"
    >
      <MessageCircle size={25} />
    </a>
  );
}


