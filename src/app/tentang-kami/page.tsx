import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { siteConfig, trustIndicators } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tentang Kami",
  description:
    "Tentang Lancar Clothing Sablon, penyedia custom clothing dan sablon dan bordir untuk Indonesia.",
  path: "/tentang-kami",
  keywords: ["Lancar Clothing Sablon", "jasa sablon kaos", "custom clothing"],
});

export default function TentangKamiPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Tentang Kami", href: "/tentang-kami" }]} />
      <section className="bg-[#20251b] py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-[#c8d7ad]">Tentang kami</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Lancar Clothing Sablon untuk custom clothing
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Kami membantu komunitas, sekolah, perusahaan, dan brand lokal memproduksi kaos custom,
            hoodie, jersey, seragam, dan merchandise dengan proses yang jelas.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Tentang produksi"
            title="Fokus pada hasil sablon dan bordir yang rapi"
            description={`Kontak utama ${siteConfig.phone}. Jam operasional ${siteConfig.hours}.`}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {trustIndicators.slice(0, 4).map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5">
                <item.icon className="h-7 w-7 text-[#64734a]" aria-hidden />
                <h2 className="mt-4 text-lg font-black text-zinc-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}


