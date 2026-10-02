import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { PageIntro } from "@/components/page-intro";
import { blogPosts, makeHead } from "@/lib/site-content";

export const Route = createFileRoute("/blog")({
  head: () => makeHead("Journal", "Notes from Rich Higgins on poetry, memory, nature, coaching, and the writing life.", "/blog"),
  component: BlogPage,
});

function BlogPage() {
  return <><PageIntro eyebrow="Journal" title="Notes from the quiet edge" description="Occasional essays and reflections on poetry, memory, nature, and the work of paying attention." /><section className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl">
    <article className="grid gap-10 border-b border-gold/30 pb-16 md:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow text-gold-deep">Featured reflection</p><p className="mt-4 text-sm text-muted-foreground">October 1, 2026</p></div><div><h2 className="font-display text-4xl text-navy md:text-5xl">A bridge is also a way of listening</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Writing across decades means allowing the past to answer in its own voice—not as we wish it had been, but as memory continues to shape it.</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-deep">Essay coming soon <ArrowUpRight className="size-4" /></span></div></article>
    <div className="mt-16 grid gap-px bg-gold/25 md:grid-cols-3">{blogPosts.map((post) => <article key={post.title} className="bg-background p-8"><p className="eyebrow text-gold-deep">{post.category}</p><h2 className="mt-5 font-display text-3xl leading-tight text-navy">{post.title}</h2><p className="mt-4 leading-7 text-muted-foreground">{post.excerpt}</p><p className="mt-8 text-xs uppercase tracking-[0.12em] text-muted-foreground">{post.date}</p></article>)}</div>
  </div></section></>;
}