import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";

import { ContactForm } from "@/components/forms";
import { PageIntro } from "@/components/page-intro";
import { makeHead } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({ head: () => makeHead("Contact", "Contact poet Rich Higgins about the collection, readings, literary events, or reader correspondence.", "/contact"), component: ContactPage });

function ContactPage() { return <><PageIntro eyebrow="Correspondence" title="Write to Rich" description="For readings, book groups, literary events, orders, or a note about the poems, please reach out." /><section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-[0.75fr_1.25fr]">
  <aside><p className="eyebrow text-gold-deep">Contact</p><h2 className="mt-4 font-display text-4xl text-navy">A line is always welcome</h2><p className="mt-5 leading-8 text-muted-foreground">Reader correspondence is one of the quiet gifts of publishing. Share what moved you, inquire about a reading, or ask about the collection.</p><a href="mailto:Rchiggins3@outlook.com" className="mt-8 flex items-center gap-3 text-sm text-navy hover:text-gold-deep"><span className="grid size-10 place-items-center rounded-full bg-cream"><Mail className="size-4" /></span>Rchiggins3@outlook.com</a></aside>
  <div><ContactForm /></div>
  </div></section></>; }