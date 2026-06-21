import type { Metadata } from "next";
import { Camera, Clock, MapPinned, MapPin, MessageCircle, Send } from "lucide-react";
import { Breadcrumb } from "@/components/Breadcrumb";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { products, siteConfig } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import { createProductOrderLink, createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Kontak Konveksi Kertosono | Lancar Konveksi",
  description:
    "Hubungi Lancar Konveksi Bordir & Sablon di Kertosono, Nganjuk untuk jasa sablon kaos, bordir, konveksi kaos, jersey, hoodie, dan seragam.",
  path: "/kontak",
  keywords: ["konveksi kertosono", "jasa sablon nganjuk", "tempat sablon terdekat", "Lancar Konveksi"],
});

export default function KontakPage() {
  return (
    <>
      <Breadcrumb items={[{ name: "Kontak", href: "/kontak" }]} />
      <section className="bg-[color:var(--sun)] px-0 py-4 sm:px-4 sm:py-6">
        <div className="container-shell">
          <div className="border border-[color:var(--line)] bg-[color:var(--paper)] p-6 sm:p-10 lg:p-12">
            <p className="eyebrow">Kontak / Order</p>
            <h1 className="mt-3 max-w-4xl font-serif text-4xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-6xl">
              Order konveksi dan sablon via WhatsApp.
            </h1>
            <p className="mt-5 max-w-2xl text-base font-semibold leading-7 text-[color:var(--muted)]">
              Datang ke workshop Kertosono atau kirim kebutuhan produk, jumlah, bahan, desain, dan deadline.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[color:var(--paper)]">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="editorial-card p-6">
            <h2 className="font-serif text-3xl font-black leading-none text-[color:var(--ink)]">Info kontak</h2>
            <div className="mt-6 grid gap-4">
              <a
                href={createWhatsAppLink("Halo Lancar Konveksi Bordir & Sablon, saya mau konsultasi order custom clothing.")}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 border border-[color:var(--line)] bg-white p-4 font-black text-[color:var(--ink)] hover:bg-[#fff2c2]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                {siteConfig.phone}
              </a>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 border border-[color:var(--line)] bg-white p-4 font-black text-[color:var(--ink)] hover:bg-[#fff2c2]"
              >
                <Camera className="h-5 w-5" aria-hidden />
                {siteConfig.instagram}
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 border border-[color:var(--line)] bg-white p-4 font-black text-[color:var(--ink)] hover:bg-[#fff2c2]"
              >
                <MapPin className="h-5 w-5" aria-hidden />
                {siteConfig.address.display}
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring flex items-center gap-3 border border-[color:var(--line)] bg-white p-4 font-black text-[color:var(--ink)] hover:bg-[#fff2c2]"
              >
                <MapPinned className="h-5 w-5" aria-hidden />
                Buka Google Maps
              </a>
              <span className="flex items-center gap-3 border border-[color:var(--line)] bg-white p-4 font-black text-[color:var(--ink)]">
                <Clock className="h-5 w-5" aria-hidden />
                {siteConfig.hours}
              </span>
            </div>
          </aside>

          <div className="border border-[color:var(--line)] bg-white p-6 shadow-sm">
            <h2 className="font-serif text-3xl font-black leading-none text-[color:var(--ink)]">Quick order produk</h2>
            <p className="mt-2 text-sm font-semibold leading-6 text-[color:var(--muted)]">
              Pilih produk untuk membuka WhatsApp dengan pesan order otomatis.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {products.map((product) => (
                <a
                  key={product.slug}
                  href={createProductOrderLink(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between gap-3 border border-[color:var(--line)] p-4 text-left transition hover:border-[color:var(--ink)] hover:bg-[#fff2c2]"
                >
                  <span>
                    <span className="block font-black text-[color:var(--ink)]">{product.name}</span>
                    <span className="mt-1 block text-xs font-bold text-[color:var(--muted)]">{product.priceRange}</span>
                  </span>
                  <Send className="h-5 w-5 shrink-0 text-[color:var(--orange)]" aria-hidden />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="container-shell mt-8">
          <div className="overflow-hidden border border-[color:var(--line)] bg-white shadow-[8px_8px_0_0_var(--sun)]">
            <iframe
              title="Google Maps Lancar Konveksi Bordir dan Sablon"
              src="https://www.google.com/maps?q=Lancar%20Konveksi%20Bordir%20Komputer%20dan%20Sablon%20Jalan%20Raya%20Juwono%20No.3%20Kertosono&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0"
            />
          </div>
        </div>
      </section>
      <WhatsAppCTA title="Kirim brief sekarang" />
    </>
  );
}



