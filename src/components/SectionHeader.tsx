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
      <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-600">{description}</p> : null}
    </div>
  );
}
