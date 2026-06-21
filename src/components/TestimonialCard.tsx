import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="border border-[color:var(--line)] bg-white p-6 shadow-sm">
      <Quote className="h-8 w-8 text-[color:var(--orange)]" />
      <div className="mt-5 flex gap-1 text-[color:var(--sun)]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold leading-7 text-[color:var(--muted)]">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 border-t border-[color:var(--line)] pt-5">
        <p className="font-black text-[color:var(--ink)]">{testimonial.name}</p>
        <p className="text-sm font-semibold text-[color:var(--muted)]">{testimonial.role}</p>
      </div>
    </article>
  );
}

