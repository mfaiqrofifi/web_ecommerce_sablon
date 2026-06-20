import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeader } from "@/components/SectionHeader";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { products, services } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) return {};

  return createPageMetadata({
    title: service.metaTitle.replace(" | Lancar Konveksi", ""),
    description: service.metaDescription,
    path: `/layanan/${service.slug}`,
    keywords: service.keywords,
    image: "/images/og-jasa-sablon-kaos.webp",
  });
}

export default function LayananDetailPage({ params }: PageProps) {
  const service = services.find((item) => item.slug === params.slug);
  if (!service) notFound();

  const relatedProducts = products.filter((product) => service.relatedProducts.includes(product.slug));
  return (
    <>
      <Breadcrumb items={[{ name: "Layanan", href: "/layanan" }, { name: service.title, href: `/layanan/${service.slug}` }]} />
      <article>
        <section className="bg-[#20251b] py-16 text-white sm:py-20">
          <div className="container-shell">
            <p className="eyebrow text-[#c8d7ad]">Layanan</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">{service.h1}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">{service.description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.benefits.slice(0, 3).map((benefit) => (
                <span key={benefit} className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-bold text-[#edf4df]">
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
              <service.icon className="h-10 w-10 text-[#64734a]" aria-hidden />
              <h2 className="mt-5 text-2xl font-black">Ringkasan layanan</h2>
              <p className="mt-3 text-sm leading-7 text-zinc-600">{service.useCase}</p>
              <div className="mt-6 grid gap-2">
                {service.benefits.map((benefit) => (
                  <span key={benefit} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-zinc-700">
                    {benefit}
                  </span>
                ))}
              </div>
            </aside>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-zinc-950">
                Cara order {service.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                Cukup kirim desain atau referensi, jumlah pesanan, pilihan bahan, dan deadline.
                Kami bantu cek teknik yang paling cocok: sablon, DTF, plastisol, digital printing,
                atau bordir.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {["Kirim desain", "Pilih bahan", "Terima estimasi", "Produksi setelah deal"].map((item) => (
                  <div key={item} className="rounded-2xl border border-zinc-200 p-5 font-bold text-zinc-800">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </article>

      <section className="section-padding bg-white">
        <div className="container-shell">
          <SectionHeader eyebrow="Produk terkait" title="Produk yang sering dipilih" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <FAQSection items={service.faqs} title={`FAQ ${service.title}`} />
      <WhatsAppCTA
        title={`Konsultasi ${service.title}`}
        message={`Halo Lancar Konveksi Bordir & Sablon, saya mau konsultasi ${service.title}. Bisa dibantu?`}
      />
    </>
  );
}




