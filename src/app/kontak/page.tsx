import type { Metadata } from "next";
import { Camera, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { products, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import { createProductOrderLink, createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Kontak Lancar Clothing Sablon",
  description:
    "Hubungi Lancar Clothing Sablon untuk jasa sablon kaos, konveksi kaos, jersey custom, hoodie custom, seragam, dan merchandise perusahaan.",
  path: "/kontak",
  keywords: ["kontak sablon kaos", "order kaos custom", "Lancar Clothing Sablon"],
});

export default function KontakPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Kontak", href: "/kontak" }]} />
      <section className="bg-[#20251b] py-16 text-white sm:py-20">
        <div className="container-shell">
          <p className="eyebrow text-[#c8d7ad]">Kontak / Order</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Order jasa sablon kaos via WhatsApp
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300">
            Kirim kebutuhan produk, jumlah, bahan, desain, dan deadline. Kami bantu rekomendasikan
            teknik sablon atau konveksi yang paling tepat.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6">
            <h2 className="text-2xl font-black text-zinc-950">Info kontak</h2>
            <div className="mt-6 grid gap-4">
              <a
                href={createWhatsAppLink("Halo Lancar Clothing Sablon, saya mau konsultasi order custom clothing.")}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-zinc-700 shadow-sm hover:text-[#64734a]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-zinc-700 shadow-sm hover:text-[#64734a]"
              >
                <Camera className="h-5 w-5" aria-hidden />
                {siteConfig.instagram}
              </a>
              <span className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-zinc-700 shadow-sm">
                <MapPin className="h-5 w-5" aria-hidden />
                {siteConfig.address.display}
              </span>
              <span className="flex items-center gap-3 rounded-2xl bg-white p-4 font-bold text-zinc-700 shadow-sm">
                <Mail className="h-5 w-5" aria-hidden />
                {siteConfig.email}
              </span>
            </div>
          </aside>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-black text-zinc-950">Quick order produk</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">
              Pilih produk untuk membuka WhatsApp dengan pesan order otomatis.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <a
                  key={product.slug}
                  href={createProductOrderLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between gap-3 rounded-2xl border border-zinc-200 p-4 text-left transition hover:border-[#64734a] hover:bg-[#eef3e3]"
                >
                  <span>
                    <span className="block font-black text-zinc-950">{product.name}</span>
                    <span className="mt-1 block text-xs font-semibold text-zinc-500">{product.priceRange}</span>
                  </span>
                  <Send className="h-5 w-5 shrink-0 text-[#64734a]" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WhatsAppCTA title="Kirim brief sekarang" />
    </>
  );
}



