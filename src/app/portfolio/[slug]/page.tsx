import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ProductCard } from "@/components/ProductCard";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { portfolioItems, products } from "@/data/site";
import { createPageMetadata, portfolioSchema } from "@/lib/seo";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const item = portfolioItems.find((portfolio) => portfolio.slug === params.slug);
  if (!item) return {};

  return createPageMetadata({
    title: `${item.title} | Portfolio Sablon`,
    description: item.excerpt,
    path: `/portfolio/${item.slug}`,
    keywords: [item.title, item.printingMethod, item.clientType],
    image: item.image,
  });
}

export default function PortfolioDetailPage({ params }: PageProps) {
  const item = portfolioItems.find((portfolio) => portfolio.slug === params.slug);
  if (!item) notFound();

  const relatedProducts = products.filter((product) => item.relatedProducts.includes(product.slug));
  const schema = portfolioSchema(item.slug);

  return (
    <>
      {schema ? <StructuredData data={schema} /> : null}
      <Breadcrumb items={[{ name: "Portfolio", href: "/portfolio" }, { name: item.title, href: `/portfolio/${item.slug}` }]} />
      <article>
        <section className="bg-[#20251b] py-16 text-white sm:py-20">
          <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow text-[#c8d7ad]">{item.clientType}</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-6xl">{item.title}</h1>
              <p className="mt-5 text-base leading-7 text-zinc-300">{item.excerpt}</p>
            </div>
            <OptimizedImage src={item.image} alt={item.title} priority className="h-[28rem] rounded-[2rem]" />
          </div>
        </section>
        <section className="section-padding bg-white">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black tracking-tight text-zinc-950">Cerita project</h2>
              <p className="mt-4 text-base leading-8 text-zinc-600">{item.story}</p>
              <blockquote className="mt-8 rounded-[1.5rem] border-l-4 border-[#64734a] bg-[#eef3e3] p-6 text-lg font-bold leading-8 text-zinc-800">
                “{item.testimonial}”
              </blockquote>
            </div>
            <aside className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-xl font-black">Detail produksi</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-bold text-zinc-500">Client type</dt>
                  <dd className="mt-1 font-black text-zinc-950">{item.clientType}</dd>
                </div>
                <div>
                  <dt className="font-bold text-zinc-500">Quantity ordered</dt>
                  <dd className="mt-1 font-black text-zinc-950">{item.quantity}</dd>
                </div>
                <div>
                  <dt className="font-bold text-zinc-500">Material used</dt>
                  <dd className="mt-1 font-black text-zinc-950">{item.material}</dd>
                </div>
                <div>
                  <dt className="font-bold text-zinc-500">Printing method</dt>
                  <dd className="mt-1 font-black text-zinc-950">{item.printingMethod}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
        <section className="section-padding">
          <div className="container-shell">
            <h2 className="text-3xl font-black tracking-tight text-zinc-950">Project gallery</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {item.gallery.map((image, index) => (
                <OptimizedImage
                  key={image}
                  src={image}
                  alt={`${item.title} gallery ${index + 1}`}
                  className="h-80 rounded-[1.5rem]"
                />
              ))}
            </div>
          </div>
        </section>
      </article>
      <section className="section-padding bg-white">
        <div className="container-shell">
          <h2 className="text-3xl font-black tracking-tight text-zinc-950">Produk terkait</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {relatedProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <WhatsAppCTA title={`Buat project seperti ${item.title}?`} />
    </>
  );
}



