import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/site";
import { createProductOrderLink } from "@/lib/whatsapp";
import { OptimizedImage } from "./OptimizedImage";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#d9ddcc] bg-[#fbfaf4] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10">
      <Link href={`/produk/${product.slug}`} aria-label={`Lihat detail ${product.name}`}>
        <OptimizedImage src={product.image} alt={product.name} className="h-64" />
      </Link>
      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#64734a]">{product.category}</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-950">
          <Link href={`/produk/${product.slug}`} className="hover:text-[#64734a]">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{product.description}</p>
        <dl className="mt-5 grid gap-3 rounded-2xl bg-[#f1f2e9] p-4 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-zinc-500">Harga</dt>
            <dd className="text-right font-bold text-zinc-950">{product.priceRange}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-zinc-500">Bahan</dt>
            <dd className="text-right font-bold text-zinc-950">{product.material}</dd>
          </div>
        </dl>
        <div className="mt-5 grid gap-2">
          <Link
            href={`/produk/${product.slug}`}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#d9ddcc] px-5 py-3 text-sm font-black text-zinc-700 transition hover:border-[#64734a] hover:text-[#64734a]"
          >
            Detail produk
            <ArrowRight size={17} aria-hidden />
          </Link>
          <a
            href={createProductOrderLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#20251b] px-5 py-3 text-sm font-black text-white transition hover:bg-[#64734a]"
          >
            <MessageCircle size={17} aria-hidden />
            Order WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

