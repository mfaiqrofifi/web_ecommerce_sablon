import { faqSchema } from "@/lib/seo";
import type { FAQItem } from "@/data/site";
import { SectionHeader } from "./SectionHeader";
import { StructuredData } from "./StructuredData";

export function FAQSection({ items, title }: { items: FAQItem[]; title?: string }) {
  return (
    <section className="section-padding bg-[color:var(--paper)]">
      <StructuredData data={faqSchema(items)} />
      <div className="container-shell">
        <SectionHeader
          eyebrow="FAQ"
          title={title ?? "Pertanyaan yang sering ditanyakan"}
          description="Jawaban singkat untuk membantu kamu mengambil keputusan sebelum order."
          centered
        />
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {items.map((item) => (
            <article key={item.question} className="border border-[color:var(--line)] bg-white p-6 shadow-sm">
              <h3 className="text-lg font-black text-[color:var(--ink)]">{item.question}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-[color:var(--muted)]">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

