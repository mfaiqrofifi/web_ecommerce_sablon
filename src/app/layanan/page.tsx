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
      <section className="bg-[#20251b] py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-[#c8d7ad]">Layanan</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Jasa sablon, bordir, dan konveksi Kertosono
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Pilih kebutuhan produksi untuk kaos, hoodie, jersey, seragam kerja, atau merchandise,
            lalu konsultasikan desain, bahan, jumlah, dan deadline via WhatsApp.
          </p>
        </div>
      </section>
      <section className="section-padding bg-white">
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



