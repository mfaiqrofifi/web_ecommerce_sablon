import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PortfolioCard } from "@/components/PortfolioCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { portfolioItems } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Portfolio Sablon dan Konveksi Kertosono",
  description:
    "Portfolio Lancar Konveksi Bordir & Sablon: kaos sablon event, seragam bordir, dan proses produksi bordir komputer di Kertosono Nganjuk.",
  path: "/portfolio",
  keywords: ["portfolio sablon kaos", "konveksi kertosono", "jasa sablon nganjuk", "bordir komputer"],
});

export default function PortfolioPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Portfolio", href: "/portfolio" }]} />
      <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
        <div className="container-shell">
          <div className="border border-[color:var(--line)] bg-[color:var(--paper)] p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">Portfolio</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
              Hasil produksi sablon, bordir, dan konveksi.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[color:var(--muted)]">
              Contoh visual untuk lihat karakter bahan, warna, dan finishing sebelum order.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[color:var(--paper)]">
        <div className="container-shell">
          <SectionHeader eyebrow="Case studies" title="Project custom clothing pilihan" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {portfolioItems.map((item) => (
              <PortfolioCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}



