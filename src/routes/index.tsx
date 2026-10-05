import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Feather, MessageCircle, Quote, Sparkles } from "lucide-react";

import coverAsset from "@/assets/rich-higgins-full-cover.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "@/components/page-intro";
import { blogPosts, makeHead, themes } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => makeHead("Poetry by Rich Higgins", "Discover Unicorns and Other Reflections, a poetry collection exploring nature, memory, coaching, magic, and reflection.", "/"),
  component: Index,
});

const homeFaqs = [
  ["What is Unicorns and Other Reflections about?", "A wide-ranging collection exploring nature, memory, family, coaching, work, magic, and reflection across a life observed closely."],
  ["How can I order a copy?", "Use the order form to request a copy. Availability, price, postage, and payment details are confirmed before your order is completed."],
  ["Can I request a signed or inscribed copy?", "Yes. Add your request in the message field on the order form, including the name you would like used for an inscription."],
  ["May I invite Rich to a reading or event?", "Yes — visit the contact page with details about your reading, classroom, book group, or literary event."],
] as const;

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

    {/* About the Book */}
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
          <Button asChild variant="link" className="mt-7 h-auto p-0 text-gold-deep"><Link to="/book">View the book <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    {/* About the Author */}
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow text-gold-deep">The poet</p>
          <h2 className="mt-4 font-display text-4xl text-navy md:text-5xl">Listening for what time leaves behind</h2>
        </div>
        <div>
          <p className="text-lg leading-9 text-muted-foreground">Rich Higgins writes from a life attentive to people, places, and the quiet revelations held in memory. His work moves from salt-weathered piers to playing fields, from childhood fantasy to the sober clarity of reflection.</p>
          <Button asChild variant="link" className="mt-6 h-auto p-0 text-gold-deep"><Link to="/about">Meet Rich <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    {/* Order the Book */}
    <section className="bg-navy px-5 py-24 text-pearl lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[0.55fr_1fr]">
        <div className="relative mx-auto w-full max-w-xs">
          <div className="absolute -inset-4 border border-gold/40" aria-hidden="true" />
          <img src={coverAsset.url} alt="Cover of Unicorns and Other Reflections" className="relative aspect-[4/5] w-full object-cover object-right shadow-2xl" />
        </div>
        <div>
          <div className="flex items-center gap-3 text-gold">
            <span className="h-px w-10 bg-gold/60" />
            <Feather className="size-3.5" aria-hidden="true" />
            <span className="eyebrow">Order the book</span>
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight md:text-5xl">Bring the collection home</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-pearl/70">Request your copy of <em>Unicorns and Other Reflections</em> from The Collingwood Press. Signed and inscribed editions are available on request—pricing, postage, and payment details are confirmed personally before your order is completed.</p>
          <Button asChild variant="gold" size="lg" className="mt-9"><Link to="/order">Order now <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    {/* Latest from the Blog */}
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 border-b border-gold/30 pb-10 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Journal" title="Latest from the blog" />
          <Button asChild variant="link" className="h-auto shrink-0 p-0 text-gold-deep"><Link to="/blog">View all posts <ArrowUpRight /></Link></Button>
        </div>
        <div className="mt-12 grid gap-px bg-gold/25 md:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.title} className="bg-background p-8 transition-colors hover:bg-cream">
              <p className="eyebrow text-gold-deep">{post.category}</p>
              <h3 className="mt-5 font-display text-2xl leading-tight text-navy">{post.title}</h3>
              <p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-8 text-xs uppercase tracking-[0.12em] text-muted-foreground">{post.date}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Forum */}
    <section className="bg-sky-soft px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <MessageCircle className="mx-auto size-7 text-gold-deep" aria-hidden="true" />
        <p className="eyebrow mt-6 text-gold-deep">Readers’ forum</p>
        <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">Where readers gather</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-muted-foreground">Share the lines that stayed with you, trade reflections on nature and memory, and join a warm, thoughtful conversation around the collection.</p>
        <Button asChild variant="gold" size="lg" className="mt-8"><Link to="/forum">Enter the forum <ArrowRight /></Link></Button>
      </div>
    </section>

    {/* FAQ */}
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <SectionHeading eyebrow="FAQ" title="A few gentle answers" description="The questions readers ask most often—about the collection, ordering, and inviting Rich to events." />
          <Button asChild variant="link" className="mt-7 h-auto p-0 text-gold-deep"><Link to="/faq">View all FAQs <ArrowRight /></Link></Button>
        </div>
        <div>
          <Accordion type="single" collapsible>
            {homeFaqs.map(([question, answer], i) => (
              <AccordionItem key={question} value={`home-faq-${i}`} className="border-gold/25">
                <AccordionTrigger className="py-6 text-left font-display text-xl text-navy hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-7 text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    {/* Testimonial */}
    <section className="bg-cream px-5 py-24 text-center lg:px-8">
      <Quote className="mx-auto size-8 text-gold-deep" aria-hidden="true" />
      <blockquote className="mx-auto mt-7 max-w-4xl font-display text-3xl leading-snug text-navy md:text-5xl">“A collection alive to memory’s music, the natural world, and the enduring possibility of wonder.”</blockquote>
      <p className="mt-7 text-sm font-medium text-navy">Dr. Kathleen P. Decker</p>
      <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">Past President, The Poetry Society of Virginia</p>
-     </section>
  </>;
}
