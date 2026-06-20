import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, PackageCheck } from "lucide-react";
import { HeroSection } from "@/components/HeroSection";
import { OptimizedImage } from "@/components/OptimizedImage";
import { WhatsAppCTA } from "@/components/WhatsAppCTA";
import { targetKeywords } from "@/data/site";
import { createPageMetadata } from "@/lib/seo";
import { createWhatsAppLink } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Konveksi Kertosono & Jasa Sablon Nganjuk | Lancar Konveksi",
  description:
    "Lancar Konveksi Bordir & Sablon melayani konveksi Kertosono, jasa sablon Nganjuk, kaos custom, hoodie custom, jersey, seragam, dan merchandise.",
  path: "/",
  keywords: targetKeywords,
  image: "/images/og-jasa-sablon-kaos.webp",
});

const proof = [
  ["Konveksi", "Kaos, seragam, hoodie"],
  ["Sablon", "Rubber, DTF, plastisol"],
  ["Bordir Komputer", "Logo, nama, emblem"],
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="bg-[#fbfaf4] py-8">
        <div className="container-shell grid gap-3 sm:grid-cols-3">
          {proof.map(([title, text]) => (
            <div key={title} className="rounded-[1.5rem] border border-[#d9ddcc] bg-[#f7f3e8] p-5">
              <p className="text-2xl font-black text-[#11140f]">{title}</p>
              <p className="mt-1 text-sm font-semibold text-[#586149]">{text}</p>
            </div>
          ))}
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
            <Link href="/portfolio/seragam-bordir-komunitas" className="group relative min-h-[23rem] overflow-hidden rounded-[1.75rem] bg-[#d8e1c6]">
              <OptimizedImage src="/images/portfolio-seragam-cafe.webp" alt="Portfolio seragam bordir komunitas" className="absolute inset-0 h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-3xl font-black leading-none">Seragam Bordir</h3>
            </Link>
            <div className="grid gap-4">
              <Link href="/portfolio/kaos-sablon-event" className="group relative min-h-[11rem] overflow-hidden rounded-[1.75rem] bg-[#d8e1c6]">
                <OptimizedImage src="/images/portfolio-jersey-futsal-sekolah.webp" alt="Portfolio kaos sablon event" className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-black leading-none">Kaos Sablon</h3>
              </Link>
              <Link href="/portfolio/produksi-bordir-seragam" className="group relative min-h-[11rem] overflow-hidden rounded-[1.75rem] bg-[#d8e1c6]">
                <OptimizedImage src="/images/portfolio-hoodie-brand-lokal.webp" alt="Portfolio produksi bordir seragam" className="absolute inset-0 h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-black leading-none">Bordir</h3>
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
              href={createWhatsAppLink("Halo Lancar Konveksi Bordir & Sablon, saya mau cek harga sablon atau bordir custom.")}
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

      <WhatsAppCTA
        title="Siap produksi custom?"
        description="Kirim desain, jumlah, bahan yang diinginkan, dan deadline. Kami bantu rekomendasikan teknik yang cocok."
        icon={PackageCheck}
      />
    </>
  );
}
