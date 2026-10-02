import { createFileRoute, Link } from "@tanstack/react-router";

import { PageIntro } from "@/components/page-intro";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { makeHead } from "@/lib/site-content";

const faqs = [
  ["What is Unicorns and Other Reflections about?", "It is a wide-ranging poetry collection exploring nature, memory, family, coaching, work, magic, and reflection across a life observed closely."],
  ["Who published the collection?", "Unicorns and Other Reflections is published by The Collingwood Press."],
  ["How can I order a copy?", "Use the order form to request a copy. Availability, price, postage, and payment details will be confirmed before your order is completed."],
  ["Can I request a signed or inscribed copy?", "Yes. Add your request in the message field on the order form, including the name you would like used for an inscription."],
  ["May I invite Rich to a reading or event?", "Please use the contact page with details about your reading, classroom, book group, or literary event."],
  ["Can readers discuss the book together?", "The Readers’ Forum is designed as a home for thoughtful conversation about the collection and the experiences it evokes."],
] as const;

export const Route = createFileRoute("/faq")({ head: () => makeHead("Frequently Asked Questions", "Answers about Rich Higgins, Unicorns and Other Reflections, orders, readings, and the readers’ forum.", "/faq"), component: FaqPage });

function FaqPage() { return <><PageIntro eyebrow="FAQ" title="Questions, answered" description="A few helpful notes about the collection, orders, inscriptions, and literary events." /><section className="px-5 py-20 lg:px-8"><div className="mx-auto max-w-3xl"><Accordion type="single" collapsible>{faqs.map(([question, answer], i) => <AccordionItem key={question} value={`item-${i}`} className="border-gold/25"><AccordionTrigger className="py-6 font-display text-xl text-navy hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pb-6 text-base leading-7 text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion><div className="mt-14 bg-cream p-8 text-center"><h2 className="font-display text-3xl text-navy">Still wondering?</h2><p className="mt-3 text-muted-foreground">Rich welcomes thoughtful questions from readers.</p><Button asChild variant="gold" className="mt-6"><Link to="/contact">Get in touch</Link></Button></div></div></section></>; }