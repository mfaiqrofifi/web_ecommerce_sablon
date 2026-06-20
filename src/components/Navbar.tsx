"use client";

import { Menu, MessageCircle, Shirt, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, siteConfig } from "@/data/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-[#f7f8f2]/90 backdrop-blur-xl">
      <nav className="container-shell flex h-16 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-full">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20251b] text-white">
            <Shirt size={20} />
          </span>
          <span>
            <span className="block text-sm font-black tracking-tight sm:text-base">{siteConfig.name}</span>
            <span className="hidden text-xs font-semibold text-zinc-500 sm:block">Sablon & Bordir Custom</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-4 py-2 text-sm font-bold transition ${
                  active ? "bg-[#20251b] text-white" : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href={createWhatsAppLink("Halo Lancar Konveksi Bordir & Sablon, saya mau konsultasi sablon atau bordir custom.")}
          target="_blank"
          rel="noreferrer"
          className="focus-ring hidden items-center gap-2 rounded-full bg-[#20251b] px-5 py-3 text-sm font-black text-white shadow-lg shadow-zinc-900/10 transition hover:bg-[#64734a] lg:inline-flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-950 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-bold text-zinc-700 hover:bg-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}


