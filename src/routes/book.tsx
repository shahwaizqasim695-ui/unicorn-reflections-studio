import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Quote } from "lucide-react";

import mockupAsset from "@/assets/rich-higgins-book-mockup.png.asset.json";
import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/page-intro";
import { makeHead } from "@/lib/site-content";

export const Route = createFileRoute("/book")({
  head: () => makeHead("Unicorns and Other Reflections", "Explore Rich Higgins’s poetry collection, published by The Collingwood Press.", "/book"),
  component: BookPage,
});

function BookPage() {
  return <>
    <PageIntro eyebrow="The book" title="Unicorns and Other Reflections" description="A collection about what we carry, what we lose, and the enduring shimmer of possibility." />
    <section className="overflow-hidden bg-sky-soft px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
      <img src={mockupAsset.url} alt="Three-dimensional mockup of Unicorns and Other Reflections by Rich Higgins" className="mx-auto w-full max-w-lg shadow-2xl" />
      <div><p className="eyebrow text-gold-deep">The Collingwood Press</p><h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-6xl">The ordinary world, illuminated</h2><p className="mt-7 text-lg leading-9 text-muted-foreground">In poems that span shoreline, workplace, family, and field, Rich Higgins looks for the current beneath experience. The collection moves through six lyrical movements—from <em>Bridge Across the Decades</em> and <em>A Sand Warmed Tide</em> to <em>My Name Was Coach</em> and <em>The Disappearance of Magic</em>.</p><div className="mt-8 flex items-center gap-4 text-sm text-navy/65"><BookOpen className="text-gold-deep" /><span>Poetry collection</span><span>•</span><span>ISBN 978-0-7334-2609-4</span></div><Button asChild variant="gold" size="lg" className="mt-9"><Link to="/order">Order the book <ArrowRight /></Link></Button></div>
    </div></section>
    <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Inside the collection" title="Six movements of memory and wonder" /><div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">{[
      ["I", "Bridge Across the Decades", "Family, age, identity, and the faces time reveals."], ["II", "A Sand Warmed Tide", "Water, weather, solitude, and the paths we learn to follow."], ["III", "Songs Don’t Die", "Love, work, ambition, and the refrains that endure."], ["IV", "My Name Was Coach", "Teams, teaching, relationship, and a life shaped by others."], ["V", "In Tempo", "The seasons as measures of change, beauty, and return."], ["VI", "The Disappearance of Magic", "Myth, childhood, imagination, and the courage to keep wonder close."],
    ].map(([number, title, text]) => <article key={title} className="border-t border-gold/40 pt-6"><span className="font-display text-gold-deep">{number}</span><h3 className="mt-3 font-display text-2xl text-navy">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>
    <section className="bg-navy px-5 py-24 text-center text-pearl"><Quote className="mx-auto text-gold" /><blockquote className="mx-auto mt-6 max-w-4xl font-display text-3xl leading-snug md:text-5xl">“A thoughtful gathering of poems in which experience becomes image, and image opens again into feeling.”</blockquote><p className="mt-7 text-sm text-sky">Dr. Kathleen P. Decker · Past President, The Poetry Society of Virginia</p></section>
  </>;
}