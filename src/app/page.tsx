import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, PackageCheck } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { OptimizedImage } from "@/components/OptimizedImage";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { globalFaqs } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Jasa Sablon & Bordir Kaos Custom | Lancar Clothing Sablon",
  description:
    "Lancar Clothing Sablon melayani sablon kaos, bordir custom, konveksi kaos, hoodie, jersey, seragam, dan merchandise perusahaan.",
  path: "/",
  keywords: [
    "jasa sablon dan bordir",
    "konveksi kaos",
    "bordir kaos custom",
    "sablon hoodie",
    "jersey custom",
    "konveksi seragam",
  ],
  image: "/images/og-jasa-sablon-kaos.webp",
});

const categories = [
  { title: "Kaos Custom", href: "/produk/kaos-sablon-custom", image: "/images/produk-kaos-sablon-custom.webp" },
  { title: "Bordir Seragam", href: "/layanan/konveksi-seragam", image: "/images/portfolio-seragam-cafe.webp" },
  { title: "Hoodie", href: "/produk/hoodie-custom", image: "/images/produk-hoodie-custom.webp" },
  { title: "Jersey", href: "/produk/jersey-custom", image: "/images/produk-jersey-custom.webp" },
];

const proof = [
  ["Sablon", "Rubber, DTF, plastisol"],
  ["Bordir", "Logo, nama, emblem"],
  ["Konveksi", "Satuan sampai partai"],
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-[#fbfaf4] py-10">
        <div className="container-shell grid gap-3 sm:grid-cols-3">
          {proof.map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-[#d9ddcc] bg-[#f7f3e8] p-5">
              <p className="text-2xl font-black text-[#11140f]">{title}</p>
              <p className="mt-1 text-sm font-semibold text-[#586149]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell">
          <div className="max-w-2xl">
            <p className="eyebrow">Pilih kebutuhan</p>
            <h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-tight text-[#11140f] sm:text-6xl">
              Langsung ke produk yang mau kamu buat.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {categories.map((item, index) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group relative overflow-hidden rounded-[1.75rem] bg-[#d8e1c6] ${
                  index === 0 ? "md:col-span-2 md:min-h-[26rem]" : "min-h-[18rem]"
                }`}
              >
                <OptimizedImage src={item.image} alt={item.title} className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11140f]/70 via-[#11140f]/5 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <h3 className="max-w-[12rem] text-3xl font-black leading-none text-white">{item.title}</h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#11140f] transition group-hover:translate-x-1">
                    <ArrowRight size={17} aria-hidden />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#20251b] py-16 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c8d7ad]">Selected work</p>
            <h2 className="mt-3 text-4xl font-black leading-none tracking-tight sm:text-6xl">
              Portfolio untuk lihat feel bahan, warna, dan finishing.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#d8ddca]">
              Lihat contoh jersey, hoodie, dan seragam bordir sebelum menentukan desain produksi kamu.
            </p>
            <Link
              href="/portfolio"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#f7f3e8] px-5 py-3 text-sm font-black text-[#11140f] transition hover:bg-white"
            >
              Buka portfolio
              <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/portfolio/seragam-cafe" className="group relative min-h-[23rem] overflow-hidden rounded-[1.75rem] bg-[#d8e1c6]">
              <OptimizedImage src="/images/portfolio-seragam-cafe.webp" alt="Portfolio seragam cafe" className="absolute inset-0 h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-3xl font-black leading-none">Seragam Cafe</h3>
            </Link>
            <div className="grid gap-4">
              <Link href="/portfolio/jersey-futsal-sekolah" className="group relative min-h-[11rem] overflow-hidden rounded-[1.75rem] bg-[#d8e1c6]">
                <OptimizedImage src="/images/portfolio-jersey-futsal-sekolah.webp" alt="Portfolio jersey" className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-black leading-none">Jersey</h3>
              </Link>
              <Link href="/portfolio/hoodie-brand-lokal" className="group relative min-h-[11rem] overflow-hidden rounded-[1.75rem] bg-[#d8e1c6]">
                <OptimizedImage src="/images/portfolio-hoodie-brand-lokal.webp" alt="Portfolio hoodie" className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-black leading-none">Hoodie</h3>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[2rem] bg-[#fbfaf4] p-6 sm:p-8">
            <p className="eyebrow">Order flow</p>
            <h2 className="mt-3 text-4xl font-black leading-none text-[#11140f] sm:text-5xl">
              Tidak perlu form panjang. Kirim brief aja.
            </h2>
            <div className="mt-8 grid gap-3">
              {["Desain atau referensi", "Jumlah dan ukuran", "Bahan dan deadline"].map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-2xl border border-[#d9ddcc] bg-[#f7f3e8] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20251b] text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <span className="font-black text-[#11140f]">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#d8e1c6] p-6 sm:p-8">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#4f5d38]">Fast response</p>
            <h2 className="mt-3 text-4xl font-black leading-none text-[#11140f]">Mau cek harga sekarang?</h2>
            <p className="mt-4 text-sm font-semibold leading-7 text-[#3f4638]">
              Kirim desain dan kebutuhan produksi. Kami bantu pilih teknik yang paling masuk akal.
            </p>
            <a
              href={createWhatsAppLink("Halo Lancar Clothing Sablon, saya mau cek harga sablon atau bordir custom.")}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#11140f] px-5 py-3 text-sm font-black text-white transition hover:bg-[#4f5d38]"
            >
              <MessageCircle size={17} aria-hidden />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <FAQSection items={globalFaqs.slice(0, 3)} title="Pertanyaan sebelum order" />
      <WhatsAppCTA
        title="Siap produksi custom?"
        description="Kirim desain, jumlah, bahan yang diinginkan, dan deadline. Kami bantu rekomendasikan teknik yang cocok."
        icon={PackageCheck}
      />
    </>
  );
}
