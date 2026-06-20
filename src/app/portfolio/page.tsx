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
      <section className="bg-[#20251b] py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-[#c8d7ad]">Portfolio</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Portfolio sablon, bordir, dan konveksi
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Contoh hasil produksi kaos sablon, seragam bordir, dan project custom sebagai referensi sebelum order.
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
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



