import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { createWhatsAppLink } from "@/lib/whatsapp";
import { OptimizedImage } from "./OptimizedImage";

const categories = [
  { label: "Kaos", href: "/produk/kaos-sablon-custom" },
  { label: "Bordir", href: "/layanan/konveksi-seragam" },
  { label: "Hoodie", href: "/produk/hoodie-custom" },
  { label: "Jersey", href: "/produk/jersey-custom" },
];

export function HeroSection() {
  return (
    <section className="overflow-hidden bg-[#cfd8bb]">
      <div className="container-shell grid min-h-[calc(100vh-4rem)] gap-8 py-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:py-12">
        <div className="relative">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#4f5d38]">Lancar Clothing Sablon</p>
          <h1 className="mt-5 max-w-xl text-5xl font-black leading-[0.94] tracking-tight text-[#11140f] sm:text-6xl lg:text-7xl">
            Custom wear yang rapi, siap dipakai, siap dibagikan.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-[#3f4638]">
            Produksi sablon dan bordir untuk kaos, hoodie, jersey, seragam, dan merchandise.
            Mulai dari satuan sampai partai.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/produk"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#11140f] px-6 py-4 text-sm font-black text-white transition hover:bg-[#4f5d38]"
            >
              Lihat produk
              <ArrowRight size={18} aria-hidden />
            </Link>
            <a
              href={createWhatsAppLink("Halo Lancar Clothing Sablon, saya mau konsultasi sablon atau bordir custom.")}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#11140f]/20 bg-[#f7f3e8]/80 px-6 py-4 text-sm font-black text-[#11140f] backdrop-blur transition hover:bg-white"
            >
              <MessageCircle size={18} aria-hidden />
              WhatsApp
            </a>
          </div>

          <div className="mt-10 hidden max-w-md border-t border-[#11140f]/20 pt-6 text-sm font-semibold leading-7 text-[#4f5d38] sm:block">
            Sablon manual, DTF, plastisol, bordir logo, seragam komunitas, dan merchandise perusahaan.
          </div>
        </div>

        <div className="rounded-[2rem] bg-[#fbfaf4] p-3 shadow-2xl shadow-[#20251b]/15">
          <div className="flex items-center justify-between border-b border-[#e2dfd2] px-4 py-3">
            <div className="text-sm font-black tracking-tight text-[#11140f]">LANCAR</div>
            <div className="hidden gap-2 sm:flex">
              {categories.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-[#e2dfd2] px-3 py-1 text-xs font-bold text-[#4f5d38] transition hover:border-[#11140f] hover:text-[#11140f]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-3 p-3 lg:grid-cols-[1.5fr_0.7fr]">
            <Link href="/produk/kaos-sablon-custom" className="group relative min-h-[25rem] overflow-hidden rounded-[1.5rem] bg-[#d8e1c6]">
              <OptimizedImage
                src="/images/produk-kaos-sablon-custom.webp"
                alt="Kaos sablon custom"
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="absolute inset-0 h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11140f]/65 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 max-w-sm text-white">
                <p className="text-xs font-black uppercase tracking-[0.2em] opacity-80">Featured</p>
                <h2 className="mt-2 text-5xl font-black leading-[0.9] tracking-tight">Kaos custom</h2>
                <p className="mt-3 text-sm font-semibold opacity-85">Sablon, DTF, atau bordir sesuai desain.</p>
              </div>
              <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#11140f] transition group-hover:translate-x-1">
                <ArrowRight size={18} aria-hidden />
              </span>
            </Link>

            <div className="grid gap-3">
              {[
                { title: "Bordir logo", image: "/images/portfolio-seragam-cafe.webp", href: "/layanan/konveksi-seragam" },
                { title: "Hoodie brand", image: "/images/produk-hoodie-custom.webp", href: "/produk/hoodie-custom" },
              ].map((item) => (
                <Link key={item.title} href={item.href} className="group relative min-h-[12rem] overflow-hidden rounded-[1.5rem] bg-[#e9dfca]">
                  <OptimizedImage src={item.image} alt={item.title} className="absolute inset-0 h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11140f]/62 via-transparent to-transparent" />
                  <h2 className="absolute bottom-4 left-4 max-w-[10rem] text-2xl font-black leading-none text-white">
                    {item.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid gap-3 px-3 pb-3 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[1.5rem] bg-[#f1f2e9] p-5">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8a6a3d]">Cara mulai</p>
              <h2 className="mt-3 text-3xl font-black leading-none text-[#11140f]">Kirim desain, jumlah, deadline.</h2>
              <Link href="/kontak" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#11140f]/20 px-4 py-2 text-xs font-black text-[#11140f]">
                Kontak order
                <ArrowRight size={15} aria-hidden />
              </Link>
            </div>
            <Link href="/portfolio/jersey-futsal-sekolah" className="group relative min-h-[13rem] overflow-hidden rounded-[1.5rem] bg-[#d8e1c6]">
              <OptimizedImage src="/images/portfolio-jersey-futsal-sekolah.webp" alt="Jersey custom" className="absolute inset-0 h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11140f]/62 via-transparent to-transparent" />
              <h2 className="absolute bottom-4 left-4 text-3xl font-black leading-none text-white">Jersey team</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
