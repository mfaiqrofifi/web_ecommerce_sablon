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
      <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
        <div className="container-shell">
          <div className="border border-[color:var(--line)] bg-[color:var(--paper)] p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">Produk</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
              Katalog produksi custom yang siap kamu order.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[color:var(--muted)]">
              Pilih produk, cek bahan dan minimum order, lalu lanjut konsultasi cepat via WhatsApp.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-[color:var(--paper)]">
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



