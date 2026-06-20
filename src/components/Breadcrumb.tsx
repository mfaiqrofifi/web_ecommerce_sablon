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
        <ol className="flex flex-wrap items-center gap-2 text-sm font-semibold text-zinc-500">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <ChevronRight className="h-4 w-4 text-zinc-300" aria-hidden /> : null}
                {isLast ? (
                  <span aria-current="page" className="text-zinc-950">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-[#64734a]">
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


