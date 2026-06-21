import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { MediaVisual } from "./MediaVisual";

const categories = [
  { label: "Kaos", href: "/produk/kaos-sablon-custom" },
  { label: "Bordir", href: "/layanan/konveksi-seragam" },
  { label: "Hoodie", href: "/produk/hoodie-custom" },
  { label: "Jersey", href: "/produk/jersey-custom" },
];

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
      <div className="container-shell">
        <div className="border border-[color:var(--line)] bg-[color:var(--paper)]">
          <div className="grid min-h-[calc(100vh-7rem)] gap-0 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="relative flex flex-col justify-center border-b border-[color:var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="eyebrow">Lancar Konveksi Bordir & Sablon</p>
              <h1 className="mt-6 max-w-xl font-serif text-5xl font-black leading-[0.93] tracking-tight text-[color:var(--ink)] sm:text-6xl lg:text-[5.25rem]">
                Konveksi custom untuk kaos, bordir, hoodie, dan jersey.
              </h1>
              <p className="mt-6 max-w-lg text-base font-semibold leading-8 text-[color:var(--muted)]">
                Produksi custom di Kertosono, Nganjuk. Cocok untuk seragam tim,
                brand lokal, event, sekolah, komunitas, sampai kebutuhan perusahaan.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/produk"
                  className="focus-ring inline-flex items-center justify-center gap-2 bg-[color:var(--orange)] px-6 py-4 text-sm font-black text-white shadow-[5px_5px_0_0_var(--ink)] transition hover:-translate-y-0.5"
                >
                  Lihat katalog
                  <ArrowRight size={18} aria-hidden />
                </Link>
                <a
                  href={createWhatsAppLink("Halo Lancar Konveksi Bordir & Sablon, saya mau konsultasi sablon atau bordir custom.")}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center justify-center gap-2 border border-[color:var(--ink)] bg-white px-6 py-4 text-sm font-black text-[color:var(--ink)] transition hover:bg-[#fff2c2]"
                >
                  <MessageCircle size={18} aria-hidden />
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-2 border border-[color:var(--line)] text-sm font-black sm:grid-cols-4">
                {["Kaos", "Bordir", "Hoodie", "Jersey"].map((item) => (
                  <span key={item} className="border-b border-r border-[color:var(--line)] px-4 py-3 last:border-r-0 sm:border-b-0">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative p-4 sm:p-8 lg:p-10">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[color:var(--line)] pb-5">
                <div className="text-lg font-black tracking-tight text-[color:var(--ink)]">LANCAR WORKS</div>
                <div className="flex gap-2">
                  {categories.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-black text-[color:var(--ink)] transition hover:border-[color:var(--ink)] hover:bg-[#fff2c2]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-[1.05fr_0.7fr]">
                <Link
                  href="/produk/kaos-sablon-custom"
                  className="group relative min-h-[26rem] overflow-hidden bg-[#e8f1eb] shadow-[12px_12px_0_0_var(--sun)]"
                >
                  <MediaVisual
                    image="/videos/kaos-sablon-dtf-poster.jpg"
                    video="/videos/kaos-sablon-dtf.mp4"
                    poster="/videos/kaos-sablon-dtf-poster.jpg"
                    alt="Kaos sablon custom"
                    priority
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="absolute inset-0 h-full transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/76 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 bg-[color:var(--sun)] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--ink)]">
                    Featured
                  </div>
                  <div className="absolute bottom-5 left-5 max-w-sm text-white">
                    <h2 className="font-serif text-5xl font-black leading-[0.92] tracking-tight">Kaos custom</h2>
                    <p className="mt-3 text-sm font-bold opacity-90">Sablon, DTF, atau bordir sesuai desain.</p>
                  </div>
                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-white text-[color:var(--ink)] transition group-hover:translate-x-1">
                    <ArrowRight size={18} aria-hidden />
                  </span>
                </Link>

                <div className="grid gap-5">
                  {[
                    { title: "Bordir logo", image: "/images/kemeja-bordir-putih.jpeg", href: "/layanan/konveksi-seragam", tone: "bg-[#ffe7a3]" },
                    { title: "Hoodie brand", image: "/images/produk-hoodie-varsity.webp", href: "/produk/hoodie-custom", tone: "bg-[#f5f1e8]" },
                  ].map((item) => (
                    <Link key={item.title} href={item.href} className={`group relative min-h-[12.5rem] overflow-hidden ${item.tone}`}>
                      <MediaVisual image={item.image} alt={item.title} className="absolute inset-0 h-full transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 via-transparent to-transparent" />
                      <h2 className="absolute bottom-4 left-4 max-w-[10rem] font-serif text-3xl font-black leading-none text-white">
                        {item.title}
                      </h2>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <div className="border border-[color:var(--line)] bg-[#fff7db] p-5">
                  <p className="eyebrow">Cara mulai</p>
                  <h2 className="mt-3 font-serif text-3xl font-black leading-none text-[color:var(--ink)]">
                    Kirim desain, jumlah, deadline.
                  </h2>
                  <Link href="/kontak" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[color:var(--orange)] underline underline-offset-4">
                    Kontak order
                    <ArrowRight size={15} aria-hidden />
                  </Link>
                </div>
                <Link href="/portfolio/kaos-sablon-event" className="group relative min-h-[13rem] overflow-hidden bg-[#e8f1eb]">
                  <MediaVisual image="/videos/kaos-sablon-dtf-poster.jpg" video="/videos/kaos-sablon-dtf.mp4" poster="/videos/kaos-sablon-dtf-poster.jpg" alt="Kaos sablon event" className="absolute inset-0 h-full transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/68 via-transparent to-transparent" />
                  <h2 className="absolute bottom-4 left-4 font-serif text-4xl font-black leading-none text-white">Sablon event</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
