import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { siteConfig, trustIndicators } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tentang Kami",
  description:
    "Tentang Lancar Konveksi Bordir & Sablon, penyedia konveksi Kertosono, jasa sablon Nganjuk, bordir komputer, kaos custom, dan seragam.",
  path: "/tentang-kami",
  keywords: ["Lancar Konveksi", "konveksi kertosono", "jasa sablon nganjuk", "bordir komputer"],
});

export default function TentangKamiPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Tentang Kami", href: "/tentang-kami" }]} />
      <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
        <div className="container-shell">
          <div className="grid gap-0 border border-[color:var(--line)] bg-[color:var(--paper)] lg:grid-cols-[0.95fr_0.75fr] lg:items-stretch">
            <div className="flex flex-col justify-center border-b border-[color:var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
              <p className="eyebrow">Tentang kami</p>
              <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
                Workshop custom clothing di Kertosono.
              </h1>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[color:var(--muted)]">
                Kami membantu komunitas, sekolah, perusahaan, dan brand lokal memproduksi kaos custom,
                hoodie, jersey, seragam, dan merchandise dengan proses yang jelas dari workshop Kertosono, Nganjuk.
              </p>
            </div>
            <div className="p-4 sm:p-8">
              <div className="relative mx-auto w-full max-w-sm overflow-hidden border border-[color:var(--line)] bg-black shadow-[10px_10px_0_0_var(--sun)]">
                <video
                  className="aspect-[9/16] h-full w-full object-cover"
                  src="/videos/workshop-bordir-short.mp4"
                  poster="/videos/workshop-bordir-short-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Video proses bordir komputer Lancar Konveksi"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[color:var(--sun)]">Workshop reel</p>
                  <p className="mt-1 font-serif text-2xl font-black leading-none text-white">Proses bordir komputer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[color:var(--paper)]">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Tentang produksi"
            title="Fokus pada hasil sablon dan bordir yang rapi"
            description={`Kontak utama ${siteConfig.phone}. Jam operasional ${siteConfig.hours}.`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {trustIndicators.slice(0, 4).map((item) => (
              <article key={item.title} className="border border-[color:var(--line)] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[7px_7px_0_0_var(--sun)]">
                <item.icon className="h-7 w-7 text-[color:var(--orange)]" aria-hidden />
                <h2 className="mt-4 font-serif text-xl font-black leading-none text-[color:var(--ink)]">{item.title}</h2>
                <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}


