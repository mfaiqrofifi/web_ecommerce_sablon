import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { PortfolioItem } from "@/data/site";
import { MediaVisual } from "./MediaVisual";

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group overflow-hidden border border-[color:var(--line)] bg-[color:var(--paper)] transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--sun)]">
      <Link href={`/portfolio/${item.slug}`} aria-label={`Lihat portfolio ${item.title}`} className="relative block overflow-hidden border-b border-[color:var(--line)]">
        <MediaVisual
          image={item.image}
          video={item.video}
          poster={item.poster}
          alt={item.title}
          className="h-72 transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 bg-[color:var(--orange)] px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-white">
          {item.printingMethod}
        </span>
      </Link>
      <div className="p-6">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[color:var(--orange)]">{item.clientType}</p>
        <h3 className="mt-3 font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">
          <Link href={`/portfolio/${item.slug}`} className="hover:text-[color:var(--orange)]">
            {item.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm font-semibold leading-6 text-[color:var(--muted)]">{item.excerpt}</p>
        <dl className="mt-5 grid grid-cols-3 border border-[color:var(--line)] text-center text-xs font-black">
          <div className="border-r border-[color:var(--line)] bg-[#fff7db] px-2 py-3">
            <dt className="sr-only">Jumlah</dt>
            <dd>{item.quantity}</dd>
          </div>
          <div className="border-r border-[color:var(--line)] bg-[#fff7db] px-2 py-3">
            <dt className="sr-only">Bahan</dt>
            <dd>{item.material}</dd>
          </div>
          <div className="bg-[color:var(--ink)] px-2 py-3 text-white">
            <dt className="sr-only">Metode</dt>
            <dd>{item.printingMethod}</dd>
          </div>
        </dl>
        <Link
          href={`/portfolio/${item.slug}`}
          className="focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 border border-[color:var(--ink)] px-5 py-3 text-sm font-black text-[color:var(--ink)] transition hover:bg-[#fff2c2]"
        >
          Lihat case study
          <ArrowRight size={17} aria-hidden />
        </Link>
      </div>
    </article>
  );
}

