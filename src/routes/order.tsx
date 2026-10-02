import { createFileRoute } from "@tanstack/react-router";

import coverAsset from "@/assets/rich-higgins-full-cover.jpg.asset.json";
import { OrderForm } from "@/components/forms";
import { PageIntro } from "@/components/page-intro";
import { makeHead } from "@/lib/site-content";

export const Route = createFileRoute("/order")({
  head: () => makeHead("Order the Book", "Request a copy of Unicorns and Other Reflections by Rich Higgins.", "/order"),
  component: OrderPage,
});

function OrderPage() {
  return <><PageIntro eyebrow="Order" title="Request your copy" description="Send your order request for Unicorns and Other Reflections. Final price and delivery details will be confirmed personally." /><section className="px-5 py-20 lg:px-8 lg:py-28"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.7fr_1.3fr]">
    <aside className="bg-navy p-8 text-pearl"><img src={coverAsset.url} alt="Cover of Unicorns and Other Reflections" className="aspect-[4/5] w-full object-cover object-right" /><h2 className="mt-7 font-display text-3xl">Unicorns and Other Reflections</h2><p className="mt-3 text-sm leading-6 text-pearl/65">By Rich Higgins<br />The Collingwood Press</p><div className="mt-7 border-t border-pearl/15 pt-6 text-sm leading-6 text-pearl/65">Pricing, postage, and available inscription options will be confirmed before payment.</div></aside>
    <div><p className="eyebrow text-gold-deep">Order form</p><h2 className="mt-4 font-display text-4xl text-navy">A book for your shelf—or someone you love</h2><p className="mt-4 mb-9 leading-7 text-muted-foreground">Complete the form and Rich or The Collingwood Press will follow up with availability and next steps.</p><OrderForm /></div>
  </div></section></>;
}