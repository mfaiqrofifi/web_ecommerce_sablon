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
    <article className="border border-[color:var(--line)] bg-[color:var(--paper)] p-6 transition hover:-translate-y-1 hover:shadow-[8px_8px_0_0_var(--sun)]">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--ink)] text-white">
        <service.icon size={26} />
      </div>
      <h3 className="mt-6 font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)]">
        <Link href={`/layanan/${service.slug}`} className="hover:text-[color:var(--orange)]">
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm font-semibold leading-6 text-[color:var(--muted)]">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.benefits.map((benefit) => (
          <span key={benefit} className="rounded-full bg-[#fff2c2] px-3 py-1 text-xs font-black text-[color:var(--ink)]">
            {benefit}
          </span>
        ))}
      </div>
      <p className="mt-5 border border-[color:var(--line)] bg-[#fff7db] p-4 text-sm font-bold leading-6 text-[color:var(--muted)]">
        Cocok untuk: {service.useCase}
      </p>
    </article>
  );
}

