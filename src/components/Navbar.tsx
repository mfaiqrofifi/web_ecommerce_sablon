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
    <header className="sticky top-0 z-50 border-b border-[color:var(--line)] bg-[color:var(--paper)]/92 backdrop-blur-xl">
      <nav className="container-shell flex h-[4.75rem] items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--ink)] text-white ring-4 ring-[color:var(--sun)]/30">
            <Shirt size={20} />
          </span>
          <span>
            <span className="block max-w-[12rem] text-sm font-black uppercase leading-tight tracking-tight sm:max-w-none sm:text-base">
              {siteConfig.name}
            </span>
            <span className="hidden text-xs font-bold text-[color:var(--muted)] sm:block">Sablon & Bordir Custom</span>
          </span>
        </Link>

        <div className="hidden items-center border-x border-[color:var(--line)] lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring border-r border-[color:var(--line)] px-4 py-7 text-sm font-black transition last:border-r-0 ${
                  active ? "text-[color:var(--orange)] underline decoration-2 underline-offset-8" : "text-[color:var(--ink)] hover:bg-[#fff2c2]"
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
          className="focus-ring hidden items-center gap-2 rounded-full bg-[color:var(--ink)] px-5 py-3 text-sm font-black text-white shadow-[4px_4px_0_0_var(--sun)] transition hover:-translate-y-0.5 hover:bg-[color:var(--orange)] lg:inline-flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--ink)] text-[color:var(--ink)] lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[color:var(--line)] bg-[color:var(--paper)] lg:hidden">
          <div className="container-shell grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-black text-[color:var(--ink)] hover:bg-[#fff2c2]"
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


