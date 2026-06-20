import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PortfolioItem } from "@/data/site";
import { OptimizedImage } from "./OptimizedImage";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-[#d9ddcc] bg-[#fbfaf4] shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10">
      <Link href={`/portfolio/${item.slug}`} aria-label={`Lihat portfolio ${item.title}`}>
        <OptimizedImage src={item.image} alt={item.title} className="h-72" />
      </Link>
      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#8a6a3d]">{item.clientType}</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-950">
          <Link href={`/portfolio/${item.slug}`} className="hover:text-[#64734a]">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-zinc-600">{item.excerpt}</p>
        <dl className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-bold">
          <div className="rounded-2xl bg-[#f1f2e9] px-2 py-3">
            <dt className="sr-only">Jumlah</dt>
            <dd>{item.quantity}</dd>
          </div>
          <div className="rounded-2xl bg-[#f1f2e9] px-2 py-3">
            <dt className="sr-only">Bahan</dt>
            <dd>{item.material}</dd>
          </div>
          <div className="rounded-2xl bg-[#20251b] px-2 py-3 text-white">
            <dt className="sr-only">Metode</dt>
            <dd>{item.printingMethod}</dd>
          </div>
        </dl>
        <Link
          href={`/portfolio/${item.slug}`}
          className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#d9ddcc] px-5 py-3 text-sm font-black text-zinc-700 transition hover:border-[#64734a] hover:text-[#64734a]"
        >
          Lihat case study
          <ArrowRight size={17} aria-hidden />
        </Link>
      </div>
    </article>
  );
}

