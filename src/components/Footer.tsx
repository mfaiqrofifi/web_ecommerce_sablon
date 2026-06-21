import { Camera, MapPin, MessageCircle, Shirt } from "lucide-react";
import Link from "next/link";
import { navItems, siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-white">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--orange)]">
              <Shirt size={24} />
            </span>
            <div>
              <p className="font-black uppercase">{siteConfig.name}</p>
              <p className="text-sm text-white/50">{siteConfig.tagline}</p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm font-semibold leading-6 text-white/65">
            Konveksi Kertosono dan jasa sablon Nganjuk untuk kaos custom, hoodie,
            jersey, seragam, bordir komputer, dan merchandise perusahaan.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[color:var(--sun)]">Menu</p>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-semibold text-white/65 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-[color:var(--sun)]">Contact</p>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <a
              className="flex items-center gap-2 hover:text-white"
              href={createWhatsAppLink("Halo Lancar Konveksi Bordir & Sablon, saya mau bertanya tentang order.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              {siteConfig.phone}
            </a>
            <a className="flex items-center gap-2 hover:text-white" href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
              <Camera size={17} />
              {siteConfig.instagram}
            </a>
            <a className="flex items-start gap-2 hover:text-white" href={siteConfig.googleMapsUrl} target="_blank" rel="noreferrer">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.address.display}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs font-semibold text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>Copyright 2026 {siteConfig.name}. All rights reserved.</span>
          <span>Siap menerima order custom via WhatsApp.</span>
        </div>
      </div>
    </footer>
  );
}
