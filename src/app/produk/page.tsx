import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { products } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Produk Konveksi Kertosono | Kaos, Hoodie, Jersey, Seragam",
  description:
    "Katalog produk Lancar Konveksi untuk kaos custom Kertosono, hoodie custom, jersey, seragam komunitas, dan merchandise perusahaan di Nganjuk.",
  path: "/produk",
  keywords: ["kaos custom kertosono", "kaos custom nganjuk", "hoodie custom kertosono", "buat jersey nganjuk", "pesan kaos satuan kertosono"],
});

export default function ProdukPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Produk", href: "/produk" }]} />
      <section className="bg-[#20251b] py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-[#c8d7ad]">Produk</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Produk konveksi, sablon, dan bordir custom
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Pilih produk untuk kebutuhan Kertosono dan Nganjuk, lihat detail bahan dan minimum order,
            lalu lanjut konsultasi via WhatsApp.
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



