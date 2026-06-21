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
  message = "Halo Lancar Konveksi Bordir & Sablon, saya mau konsultasi order custom clothing.",
  icon: Icon = PhoneCall,
}: WhatsAppCTAProps) {
  return (
    <section className="bg-[color:var(--paper)] py-12">
      <div className="container-shell">
        <div className="border border-[color:var(--ink)] bg-[color:var(--ink)] p-6 text-white shadow-[10px_10px_0_0_var(--sun)] sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--orange)]">
                <Icon size={26} aria-hidden />
              </div>
              <h2 className="font-serif text-3xl font-black leading-none tracking-tight sm:text-5xl">{title}</h2>
              <p className="mt-4 text-base font-semibold leading-7 text-white/72">{description}</p>
              <p className="mt-3 text-sm font-semibold text-white/50">
                {siteConfig.address.display} - {siteConfig.hours}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={createWhatsAppLink(message)}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center justify-center gap-2 bg-[color:var(--orange)] px-6 py-4 text-sm font-black text-white shadow-[5px_5px_0_0_var(--sun)] transition hover:-translate-y-0.5"
              >
                <MessageCircle size={19} aria-hidden />
                Order via WhatsApp
              </a>
              <Link
                href="/kontak"
                className="focus-ring inline-flex items-center justify-center border border-white/20 px-6 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[color:var(--ink)]"
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


