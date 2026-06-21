import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";
import { MediaVisual } from "@/components/MediaVisual";
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
        <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
          <div className="container-shell">
            <div className="grid gap-0 border border-[color:var(--line)] bg-[color:var(--paper)] lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
              <div className="flex flex-col justify-center border-b border-[color:var(--line)] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
                <p className="eyebrow">{item.clientType}</p>
                <h1 className="mt-3 font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
                  {item.title}
                </h1>
                <p className="mt-5 text-base font-semibold leading-7 text-[color:var(--muted)]">{item.excerpt}</p>
              </div>
              <div className="p-4 sm:p-8">
                <MediaVisual
                  image={item.image}
                  video={item.video}
                  poster={item.poster}
                  alt={item.title}
                  priority
                  className="h-[28rem] shadow-[10px_10px_0_0_var(--sun)]"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[color:var(--paper)]">
          <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">Cerita project</h2>
              <p className="mt-4 text-base font-semibold leading-8 text-[color:var(--muted)]">{item.story}</p>
              <blockquote className="mt-8 border-l-4 border-[color:var(--orange)] bg-[#fff7db] p-6 text-lg font-black leading-8 text-[color:var(--ink)]">
                &ldquo;{item.testimonial}&rdquo;
              </blockquote>
            </div>
            <aside className="border border-[color:var(--line)] bg-white p-6 shadow-[7px_7px_0_0_var(--sun)]">
              <h2 className="font-serif text-2xl font-black leading-none text-[color:var(--ink)]">Detail produksi</h2>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="font-black text-[color:var(--orange)]">Client type</dt>
                  <dd className="mt-1 font-black text-[color:var(--ink)]">{item.clientType}</dd>
                </div>
                <div>
                  <dt className="font-black text-[color:var(--orange)]">Quantity ordered</dt>
                  <dd className="mt-1 font-black text-[color:var(--ink)]">{item.quantity}</dd>
                </div>
                <div>
                  <dt className="font-black text-[color:var(--orange)]">Material used</dt>
                  <dd className="mt-1 font-black text-[color:var(--ink)]">{item.material}</dd>
                </div>
                <div>
                  <dt className="font-black text-[color:var(--orange)]">Printing method</dt>
                  <dd className="mt-1 font-black text-[color:var(--ink)]">{item.printingMethod}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        {item.gallery.length ? (
          <section className="section-padding bg-[color:var(--paper)]">
            <div className="container-shell">
              <h2 className="font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">Project gallery</h2>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {item.gallery.map((image, index) => (
                  <OptimizedImage
                    key={image}
                    src={image}
                    alt={`${item.title} gallery ${index + 1}`}
                    className="h-80 border border-[color:var(--line)]"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>

      <section className="section-padding bg-[color:var(--paper)]">
        <div className="container-shell">
          <h2 className="font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">Produk terkait</h2>
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
