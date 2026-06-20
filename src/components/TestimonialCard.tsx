import { Quote, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="rounded-[1.75rem] border border-zinc-200 bg-white p-6 shadow-sm">
      <Quote className="h-8 w-8 text-[#64734a]" />
      <div className="mt-5 flex gap-1 text-[#b99058]">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="mt-4 text-sm leading-7 text-zinc-700">&ldquo;{testimonial.quote}&rdquo;</p>
      <div className="mt-6 border-t border-zinc-100 pt-5">
        <p className="font-black text-zinc-950">{testimonial.name}</p>
        <p className="text-sm font-semibold text-zinc-500">{testimonial.role}</p>
      </div>
    </article>
  );
}

