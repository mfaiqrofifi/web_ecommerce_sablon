import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { products } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Produk Custom Clothing | Kaos, Hoodie, Jersey, Seragam",
  description:
    "Katalog produk Lancar Clothing Sablon untuk kaos sablon custom, hoodie custom, jersey custom, seragam komunitas, dan merchandise perusahaan.",
  path: "/produk",
  keywords: ["kaos custom satuan", "konveksi kaos", "sablon hoodie", "jersey custom"],
});

export default function ProdukPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Produk", href: "/produk" }]} />
      <section className="bg-[#20251b] py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-[#c8d7ad]">Produk</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Produk custom clothing untuk sablon dan konveksi
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Pilih produk, lihat detail bahan dan minimum order, lalu lanjut konsultasi via WhatsApp.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-shell">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
      <WhatsAppCTA />
    </>
  );
}



