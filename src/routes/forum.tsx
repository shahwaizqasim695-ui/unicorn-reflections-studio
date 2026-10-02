import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/page-intro";
import { forumThreads, makeHead } from "@/lib/site-content";

export const Route = createFileRoute("/forum")({
  head: () => makeHead("Readers’ Forum", "A welcoming space for readers of Rich Higgins to discuss poetry, memory, nature, and the collection.", "/forum"),
  component: ForumPage,
});

function ForumPage() {
  return <><PageIntro eyebrow="Readers’ forum" title="The conversation continues" description="A gathering place for readers to share interpretations, questions, memories, and lines of their own." /><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-5xl">
    <div className="mb-8 flex flex-col justify-between gap-5 border-b border-gold/30 pb-8 sm:flex-row sm:items-end"><div><p className="eyebrow text-gold-deep">Recent conversations</p><h2 className="mt-3 font-display text-4xl text-navy">In the reading room</h2></div><Button variant="gold">Start a conversation</Button></div>
    <div>{forumThreads.map((thread) => <article key={thread.title} className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-xs uppercase tracking-[0.14em] text-gold-deep">{thread.area}</p><h3 className="mt-2 font-display text-2xl text-navy transition-colors group-hover:text-gold-deep">{thread.title}</h3></div><div className="flex items-center gap-2 text-sm text-muted-foreground"><MessageCircle className="size-4" /> {thread.replies} replies</div></article>)}</div>
    <div className="mt-12 bg-cream p-8 text-center"><h2 className="font-display text-3xl text-navy">A thoughtful, welcoming room</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">The forum is presented as a preview. Community accounts and live discussion can be activated before launch.</p><Button asChild variant="link" className="mt-4 text-gold-deep"><Link to="/contact">Ask about the community <ArrowRight /></Link></Button></div>
  </div></section></>;
}