import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { globalFaqs, services } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Jasa Sablon Kertosono & Konveksi Nganjuk",
  description:
    "Layanan Lancar Konveksi: jasa sablon Kertosono, konveksi Nganjuk, bordir komputer, sablon hoodie, jersey custom, seragam, dan merchandise.",
  path: "/layanan",
  keywords: ["jasa sablon kertosono", "jasa sablon nganjuk", "konveksi kertosono", "konveksi nganjuk", "sablon dtf kertosono"],
});

export default function LayananPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Layanan", href: "/layanan" }]} />
      <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
        <div className="container-shell">
          <div className="border border-[color:var(--line)] bg-[color:var(--paper)] p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">Layanan</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
              Jasa sablon, bordir, dan konveksi Kertosono.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[color:var(--muted)]">
              Pilih kebutuhan produksi untuk kaos, hoodie, jersey, seragam kerja, atau merchandise.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[color:var(--paper)]">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Layanan"
            title="Pilih layanan sesuai kebutuhan produksi"
            description="Kami bantu rekomendasikan teknik yang cocok: sablon manual, DTF, plastisol, digital printing, atau bordir."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <FAQSection items={globalFaqs} title="FAQ layanan sablon dan konveksi" />
      <WhatsAppCTA />
    </>
  );
}



