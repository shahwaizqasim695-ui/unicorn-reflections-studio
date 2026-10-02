import { Sparkles } from "lucide-react";

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-24 text-pearl md:py-32 lg:px-8">
      <div className="atmosphere absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3 text-gold">
          <span className="h-px w-10 bg-gold/60" />
          <Sparkles className="size-3.5" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-10 bg-gold/60" />
        </div>
        <h1 className="font-display text-5xl leading-[0.98] md:text-7xl">{title}</h1>
        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-pearl/70 md:text-lg">{description}</p>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow text-gold-deep">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-muted-foreground">{description}</p> : null}
    </div>
  );
}