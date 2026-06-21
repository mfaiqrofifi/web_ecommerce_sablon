import { clsx } from "clsx";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, title, description, centered }: SectionHeaderProps) {
  return (
    <div className={clsx("max-w-3xl", centered && "mx-auto text-center")}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl font-black leading-none tracking-tight text-[color:var(--ink)] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base font-semibold leading-7 text-[color:var(--muted)]">{description}</p> : null}
    </div>
  );
}
