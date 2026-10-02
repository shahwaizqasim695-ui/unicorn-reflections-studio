import { Link } from "@tanstack/react-router";
import { Feather, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav } from "@/lib/site-content";

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Rich Higgins Poetry home">
      <span className="grid size-9 place-items-center rounded-full border border-gold/50 text-gold transition-colors group-hover:bg-gold group-hover:text-navy">
        <Feather className="size-4" aria-hidden="true" />
      </span>
      <span>
        <span className="block font-display text-[1.15rem] leading-none text-pearl">Rich Higgins</span>
        <span className="mt-1 block text-[0.58rem] uppercase tracking-[0.24em] text-sky">Poetry</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-pearl/10 bg-navy/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.75rem] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Wordmark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-xs uppercase tracking-[0.14em] text-pearl/75 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-pearl hover:bg-pearl/10 hover:text-gold" aria-label="Open navigation">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="border-gold/20 bg-navy text-pearl">
              <SheetHeader className="text-left">
                <SheetTitle className="font-display text-2xl text-pearl">Rich Higgins</SheetTitle>
                <SheetDescription className="text-sky">Poetry, memory, and the imagination.</SheetDescription>
              </SheetHeader>
              <nav className="mt-10 flex flex-col" aria-label="Mobile navigation">
                <SheetClose asChild>
                  <Link to="/" className="border-b border-pearl/10 py-4 font-display text-2xl text-pearl">Home</Link>
                </SheetClose>
                {primaryNav.map((item) => (
                  <SheetClose asChild key={item.to}>
                    <Link to={item.to} className="border-b border-pearl/10 py-4 font-display text-2xl text-pearl">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy text-pearl">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <Wordmark />
          <p className="mt-5 max-w-sm font-display text-2xl leading-snug text-pearl/75">
            Poems for the places where memory, nature, and wonder meet.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Explore</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-pearl/70">
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/blog" className="hover:text-gold">Blog</Link>
            <Link to="/book" className="hover:text-gold">The Book</Link>
          </div>
        </div>
        <div>
          <p className="eyebrow text-gold">Correspondence</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-pearl/70">
            <Link to="/contact" className="hover:text-gold">Contact Rich</Link>
            <a href="mailto:Rchiggins3@outlook.com" className="hover:text-gold">Rchiggins3@outlook.com</a>
          </div>
        </div>
      </div>
      <div className="border-t border-pearl/10 px-5 py-6 text-center text-xs text-pearl/50">
        © 2026 Rich Higgins. Published by The Collingwood Press.
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}