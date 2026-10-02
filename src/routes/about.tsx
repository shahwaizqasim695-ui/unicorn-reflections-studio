import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro, SectionHeading } from "@/components/page-intro";
import { makeHead } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => makeHead("About Rich Higgins", "Meet poet Rich Higgins and discover the lived experience behind Unicorns and Other Reflections.", "/about"),
  component: AboutPage,
});

function AboutPage() {
  return <>
    <PageIntro eyebrow="About the author" title="A life observed, a life remembered" description="Rich Higgins writes with an eye for the detail that outlasts the moment: a hand held across generations, a shoreline at dusk, a team gathered before the game." />
    <section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.85fr_1.15fr]">
      <div><SectionHeading eyebrow="Rich Higgins" title="Poetry rooted in attention" /><p className="mt-8 border-l-2 border-gold pl-6 font-display text-2xl italic leading-relaxed text-navy">“The poem begins when the familiar asks to be seen again.”</p></div>
      <div className="space-y-6 text-base leading-8 text-muted-foreground"><p>Rich Higgins is a poet whose work reaches across decades, tracing the quiet continuities between youth and age, vocation and imagination, loss and renewal.</p><p>His poems draw from the natural world and a life spent among communities, families, colleagues, and teams. Salt air, winter light, the energy of a playing field, and the elusive figure of the unicorn become ways of asking how we remember—and how we continue to hope.</p><p><em>Unicorns and Other Reflections</em> brings these strands together in a generous, searching collection published by The Collingwood Press.</p></div>
    </div></section>
    <section className="bg-cream px-5 py-24 lg:px-8"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="The journey" title="Across the decades" /><div className="mt-14 grid gap-px bg-gold/25 md:grid-cols-3">{[
      ["Memory", "The collection looks backward without nostalgia, finding tenderness and complexity in what time changes."],
      ["Coaching", "Years spent guiding teams become poems about purpose, belonging, discipline, and the names we carry."],
      ["Wonder", "Myth and the everyday meet in images of unicorns, fairie hills, midnight arches, and the open sea."],
    ].map(([title, text]) => <article key={title} className="bg-cream p-8"><h2 className="font-display text-3xl text-navy">{title}</h2><p className="mt-4 leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>
    <section className="px-5 py-20 text-center"><h2 className="font-display text-4xl text-navy">Meet the work on the page</h2><Button asChild variant="gold" size="lg" className="mt-7"><Link to="/book">Explore the collection <ArrowRight /></Link></Button></section>
  </>;
}