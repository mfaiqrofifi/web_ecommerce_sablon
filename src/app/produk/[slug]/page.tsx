import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { MediaVisual } from "@/components/MediaVisual";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { globalFaqs, products, services } from "@/data/site";
import { createPageMetadata, productSchema } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) return {};

  return createPageMetadata({
    title: `${product.name}`,
    description: product.description,
    path: `/produk/${product.slug}`,
    keywords: product.keywords,
    image: product.image,
  });
}

export default function ProdukDetailPage({ params }: PageProps) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  const relatedServices = services.filter((service) => product.relatedServices.includes(service.slug));
  const schema = productSchema(product.slug);

  return (
    <>
      {schema ? <StructuredData data={schema} /> : null}
      <Breadcrumb items={[{ name: "Produk", href: "/produk" }, { name: product.name, href: `/produk/${product.slug}` }]} />
      <article>
        <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
          <div className="container-shell">
            <div className="grid gap-0 border border-[color:var(--line)] bg-[color:var(--paper)] lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
              <div className="flex flex-col justify-center border-b border-[color:var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="eyebrow">{product.category}</p>
                <h1 className="mt-3 font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-5 text-base font-semibold leading-7 text-[color:var(--muted)]">{product.description}</p>
                <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                  <div className="border border-[color:var(--line)] bg-[#fff7db] p-4">
                    <dt className="text-xs font-black uppercase tracking-[0.12em] text-[color:var(--orange)]">Harga</dt>
                    <dd className="mt-2 font-black text-[color:var(--ink)]">{product.priceRange}</dd>
                  </div>
                  <div className="border border-[color:var(--line)] bg-[#fff7db] p-4">
                    <dt className="text-xs font-black uppercase tracking-[0.12em] text-[color:var(--orange)]">Bahan</dt>
                    <dd className="mt-2 font-black text-[color:var(--ink)]">{product.material}</dd>
                  </div>
                  <div className="border border-[color:var(--line)] bg-[#fff7db] p-4">
                    <dt className="text-xs font-black uppercase tracking-[0.12em] text-[color:var(--orange)]">Minimum</dt>
                    <dd className="mt-2 font-black text-[color:var(--ink)]">{product.minimumOrder}</dd>
                  </div>
                </dl>
              </div>
              <div className="p-4 sm:p-8">
                <MediaVisual
                  image={product.image}
                  video={product.video}
                  poster={product.poster}
                  alt={`${product.name}`}
                  priority
                  className="h-[28rem] shadow-[10px_10px_0_0_var(--sun)]"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-padding bg-[color:var(--paper)]">
          <div className="container-shell grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">Detail {product.name}</h2>
              <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--muted)]">
                {product.name} cocok untuk komunitas, sekolah, perusahaan, brand lokal, dan event.
                Produk bisa disesuaikan dari bahan, ukuran, warna, teknik sablon, hingga bordir.
              </p>
              <h2 className="mt-10 font-serif text-2xl font-black text-[color:var(--ink)]">Pilihan produksi</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Sablon", "Bordir", "DTF", "Custom desain"].map((item) => (
                  <span key={item} className="rounded-full bg-[#fff2c2] px-3 py-1 text-sm font-black text-[color:var(--ink)]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <aside className="border border-[color:var(--line)] bg-white p-6 shadow-[7px_7px_0_0_var(--sun)]">
              <h2 className="font-serif text-2xl font-black leading-none text-[color:var(--ink)]">Alur order</h2>
              <ol className="mt-5 grid gap-3 text-sm font-bold text-[color:var(--muted)]">
                <li>1. Kirim desain atau referensi.</li>
                <li>2. Tentukan bahan, jumlah, dan deadline.</li>
                <li>3. Terima estimasi harga dan rekomendasi teknik.</li>
                <li>4. Produksi setelah desain final disetujui.</li>
              </ol>
              {relatedServices.length ? (
                <div className="mt-6 border-t border-[color:var(--line)] pt-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-[color:var(--orange)]">Layanan terkait</h3>
                  <div className="mt-3 grid gap-2">
                    {relatedServices.map((service) => (
                      <a key={service.slug} href={`/layanan/${service.slug}`} className="text-sm font-black text-[color:var(--ink)] underline underline-offset-4 hover:text-[color:var(--orange)]">
                        {service.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </section>
      </article>
      <FAQSection items={globalFaqs.slice(0, 3)} title={`FAQ ${product.name}`} />
      <WhatsAppCTA
        title={`Order ${product.name} via WhatsApp`}
        message={`Halo Lancar Konveksi Bordir & Sablon, saya mau order ${product.name}. Bisa info detail harga dan bahan?`}
      />
    </>
  );
}



