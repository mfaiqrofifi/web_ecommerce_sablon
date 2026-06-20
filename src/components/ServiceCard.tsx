import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  benefits: string[];
  useCase: string;
};

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="rounded-[1.5rem] border border-[#d9ddcc] bg-[#fbfaf4] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/10">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#20251b] text-white">
        <service.icon size={26} />
      </div>
      <h3 className="mt-6 text-2xl font-black tracking-tight text-zinc-950">
        <Link href={`/layanan/${service.slug}`} className="hover:text-[#64734a]">
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.benefits.map((benefit) => (
          <span key={benefit} className="rounded-full bg-[#eef3e3] px-3 py-1 text-xs font-bold text-[#4f5d38]">
            {benefit}
          </span>
        ))}
      </div>
      <p className="mt-5 rounded-2xl bg-[#f1f2e9] p-4 text-sm font-semibold leading-6 text-zinc-700">
        Cocok untuk: {service.useCase}
      </p>
    </article>
  );
}

