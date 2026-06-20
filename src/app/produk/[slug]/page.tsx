import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { FAQSection } from "@/components/FAQSection";
import { OptimizedImage } from "@/components/OptimizedImage";
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
        <section className="bg-[#20251b] py-16 text-white sm:py-20">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#c8d7ad]">{product.category}</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">{product.name}</h1>
              <p className="mt-5 text-base leading-7 text-zinc-300">{product.description}</p>
              <dl className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">Harga</dt>
                  <dd className="mt-2 font-black">{product.priceRange}</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">Bahan</dt>
                  <dd className="mt-2 font-black">{product.material}</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.12em] text-zinc-400">Minimum</dt>
                  <dd className="mt-2 font-black">{product.minimumOrder}</dd>
                </div>
              </dl>
            </div>
            <OptimizedImage src={product.image} alt={`${product.name}`} priority className="h-[28rem] rounded-[2rem]" />
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-shell grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-black tracking-tight text-zinc-950">Detail {product.name}</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">
                {product.name} cocok untuk komunitas, sekolah, perusahaan, brand lokal, dan event.
                Produk bisa disesuaikan dari bahan, ukuran, warna, teknik sablon, hingga bordir.
              </p>
              <h2 className="mt-10 text-2xl font-black text-zinc-950">Pilihan produksi</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Sablon", "Bordir", "DTF", "Custom desain"].map((item) => (
                  <span key={item} className="rounded-full bg-[#eef3e3] px-3 py-1 text-sm font-bold text-[#4f5d38]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <aside className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-xl font-black">Alur order</h2>
              <ol className="mt-5 grid gap-3 text-sm font-semibold text-zinc-700">
                <li>1. Kirim desain atau referensi.</li>
                <li>2. Tentukan bahan, jumlah, dan deadline.</li>
                <li>3. Terima estimasi harga dan rekomendasi teknik.</li>
                <li>4. Produksi setelah desain final disetujui.</li>
              </ol>
              {relatedServices.length ? (
                <div className="mt-6 border-t border-zinc-200 pt-5">
                  <h3 className="text-sm font-black uppercase tracking-[0.14em] text-zinc-500">Layanan terkait</h3>
                  <div className="mt-3 grid gap-2">
                    {relatedServices.map((service) => (
                      <a key={service.slug} href={`/layanan/${service.slug}`} className="text-sm font-black text-[#64734a] hover:text-zinc-950">
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
        message={`Halo Lancar Clothing Sablon, saya mau order ${product.name}. Bisa info detail harga dan bahan?`}
      />
    </>
  );
}



