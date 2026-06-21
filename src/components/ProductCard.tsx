import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/data/site";
import { createProductOrderLink } from "@/lib/whatsapp";
import { MediaVisual } from "./MediaVisual";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--sun)]">
      <Link href={`/produk/${product.slug}`} aria-label={`Lihat detail ${product.name}`} className="relative block overflow-hidden border-b border-[color:var(--line)]">
        <MediaVisual
          image={product.image}
          video={product.video}
          poster={product.poster}
          alt={product.name}
          className="h-64 transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-[color:var(--sun)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[color:var(--ink)]">
          {product.category}
        </span>
      </Link>
      <div className="p-6">
        <h3 className="font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">
          <Link href={`/produk/${product.slug}`} className="hover:text-[color:var(--orange)]">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-[color:var(--muted)]">{product.description}</p>
        <dl className="mt-5 grid gap-3 border border-[color:var(--line)] bg-[#fff7db] p-4 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="font-bold text-[color:var(--muted)]">Harga</dt>
            <dd className="text-right font-black text-[color:var(--ink)]">{product.priceRange}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="font-bold text-[color:var(--muted)]">Bahan</dt>
            <dd className="text-right font-black text-[color:var(--ink)]">{product.material}</dd>
          </div>
        </dl>
        <div className="mt-5 grid gap-2">
          <Link
            href={`/produk/${product.slug}`}
            className="focus-ring inline-flex items-center justify-center gap-2 border border-[color:var(--ink)] px-5 py-3 text-sm font-black text-[color:var(--ink)] transition hover:bg-[#fff2c2]"
          >
            Detail produk
            <ArrowRight size={17} aria-hidden />
          </Link>
          <a
            href={createProductOrderLink(product.name)}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center justify-center gap-2 bg-[color:var(--orange)] px-5 py-3 text-sm font-black text-white shadow-[4px_4px_0_0_var(--ink)] transition hover:-translate-y-0.5"
          >
            <MessageCircle size={17} aria-hidden />
            Order WhatsApp
          </a>
        </div>
      </div>
    </article>
  );
}

