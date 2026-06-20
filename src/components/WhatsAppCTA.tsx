import type { LucideIcon } from "lucide-react";
import { MessageCircle, PhoneCall } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

type WhatsAppCTAProps = {
  title?: string;
  description?: string;
  message?: string;
  icon?: LucideIcon;
};

export function WhatsAppCTA({
  title = "Siap konsultasi produksi custom clothing?",
  description = "Kirim kebutuhan produk, jumlah, bahan, desain, dan deadline. Tim kami bantu rekomendasikan opsi produksi yang paling sesuai.",
  message = "Halo Lancar Clothing Sablon, saya mau konsultasi order custom clothing.",
  icon: Icon = PhoneCall,
}: WhatsAppCTAProps) {
  return (
    <section className="bg-white py-12">
      <div className="container-shell">
        <div className="rounded-[2rem] bg-[#20251b] p-6 text-white sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#64734a]">
                <Icon size={26} aria-hidden />
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
              <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p>
              <p className="mt-3 text-sm font-semibold text-zinc-400">
                {siteConfig.address.display} - {siteConfig.hours}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={createWhatsAppLink(message)}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#8a6a3d] px-6 py-4 text-sm font-black text-white transition hover:bg-[#6f5632]"
              >
                <MessageCircle size={19} aria-hidden />
                Order via WhatsApp
              </a>
              <Link
                href="/kontak"
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-zinc-950"
              >
                Lihat kontak
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


