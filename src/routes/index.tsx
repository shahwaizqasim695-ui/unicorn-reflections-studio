import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Feather, Quote } from "lucide-react";

import coverAsset from "@/assets/rich-higgins-full-cover.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/page-intro";
import { makeHead, themes } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => makeHead("Poetry by Rich Higgins", "Discover Unicorns and Other Reflections, a poetry collection exploring nature, memory, coaching, magic, and reflection.", "/"),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <>
    <section className="relative min-h-[calc(100svh-4.75rem)] overflow-hidden bg-navy text-pearl">
      <img src={coverAsset.url} alt="Full cover artwork for Unicorns and Other Reflections" className="absolute inset-0 h-full w-full object-cover object-[76%_center]" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-[calc(100svh-4.75rem)] max-w-7xl items-end px-5 pb-16 pt-32 md:items-center md:pb-20 lg:px-8">
        <div className="animate-rise max-w-2xl">
          <p className="eyebrow text-gold">A new collection by Rich Higgins</p>
          <h1 className="mt-5 font-display text-5xl leading-[0.96] md:text-7xl lg:text-[5.5rem]">Unicorns <span className="block italic text-pearl/85">and Other Reflections</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-pearl/80 md:text-lg">Poems shaped by the sea and the seasons—by years of coaching, memories held close, and the magic that still moves beneath ordinary days.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg"><Link to="/order">Order the book <ArrowRight /></Link></Button>
            <Button asChild variant="pearl" size="lg"><Link to="/book">Discover the collection</Link></Button>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -inset-5 border border-gold/30" aria-hidden="true" />
          <img src={coverAsset.url} alt="Front cover of Unicorns and Other Reflections" className="relative aspect-[4/5] w-full object-cover object-right shadow-2xl" />
        </div>
        <div>
          <SectionHeading eyebrow="The collection" title="A life considered in changing light" description="Across six movements, Rich Higgins follows the lines connecting childhood and age, solitude and kinship, discipline and wonder. These poems look carefully at what remains—and what returns." />
          <div className="mt-9 flex flex-wrap gap-2">
            {themes.map((theme) => <span key={theme} className="border border-navy/15 px-4 py-2 text-xs uppercase tracking-[0.14em] text-navy/70">{theme}</span>)}
          </div>
          <Button asChild variant="link" className="mt-7 h-auto p-0 text-gold-deep"><Link to="/book">Read about the book <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div><p className="eyebrow text-gold-deep">The poet</p><h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">Listening for what time leaves behind</h2></div>
        <div><p className="text-lg leading-9 text-muted-foreground">Rich Higgins writes from a life attentive to people, places, and the quiet revelations held in memory. His work moves from salt-weathered piers to playing fields, from childhood fantasy to the sober clarity of reflection.</p><Button asChild variant="link" className="mt-6 h-auto p-0 text-gold-deep"><Link to="/about">Meet Rich <ArrowRight /></Link></Button></div>
      </div>
    </section>

    <section className="bg-sky-soft px-5 py-24 text-center lg:px-8">
      <Quote className="mx-auto size-8 text-gold-deep" aria-hidden="true" />
      <blockquote className="mx-auto mt-7 max-w-4xl font-display text-3xl leading-snug text-navy md:text-5xl">“A collection alive to memory’s music, the natural world, and the enduring possibility of wonder.”</blockquote>
      <p className="mt-7 text-sm font-medium text-navy">Dr. Kathleen P. Decker</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Past President, The Poetry Society of Virginia</p>
    </section>

    <section className="bg-navy px-5 py-20 text-center text-pearl">
      <Feather className="mx-auto size-6 text-gold" />
      <h2 className="mt-5 font-display text-4xl md:text-5xl">Bring the collection home</h2>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-pearl/65">Order a copy of <em>Unicorns and Other Reflections</em> from The Collingwood Press.</p>
      <Button asChild variant="gold" size="lg" className="mt-8"><Link to="/order">Order your copy <ArrowRight /></Link></Button>
    </section>
  </>;
}
