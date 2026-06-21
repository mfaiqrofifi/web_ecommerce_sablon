import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";
import { StructuredData } from "./StructuredData";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: "Beranda", href: "/" }, ...items];

  return (
    <>
      <StructuredData data={breadcrumbSchema(allItems)} />
      <nav aria-label="Breadcrumb" className="container-shell py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm font-bold text-[color:var(--muted)]">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <ChevronRight className="h-4 w-4 text-[color:var(--line)]" aria-hidden /> : null}
                {isLast ? (
                  <span aria-current="page" className="text-[color:var(--ink)]">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[color:var(--orange)]">
                    {index === 0 ? <Home className="h-4 w-4" aria-label="Beranda" /> : item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}


