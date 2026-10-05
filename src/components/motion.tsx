import { useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform, type Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const ease = [0.22, 1, 0.36, 1] as const;

const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={item}>{children}</motion.div>;
}

export function CoverReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -6, transition: { duration: 0.5, ease } }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease }}
    >
      {children}
    </motion.div>
  );
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.35, ease }}>
      {children}
    </motion.div>
  );
}

export function HeroParallax({ image, children }: { image: ReactNode; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div className="absolute inset-0 scale-110" style={{ y: imgY }} initial={{ opacity: 0, scale: 1.16 }} animate={{ opacity: 1, scale: 1.1 }} transition={{ duration: 2, ease }}>
        {image}
      </motion.div>
      <div className="hero-overlay absolute inset-0" />
      <motion.div className="relative h-full" style={{ y: textY, opacity: textOpacity }}>{children}</motion.div>
    </div>
  );
}

export function FaqList({ items }: { items: readonly (readonly [string, string])[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className="border-b border-gold/25">
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)} className="group flex w-full items-center justify-between gap-6 py-6 text-left font-display text-xl text-navy">
              <span className="transition-colors duration-300 group-hover:text-gold-deep">{q}</span>
              <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.5, ease }} className="shrink-0 text-gold-deep">
                <ChevronDown className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ height: { duration: 0.55, ease }, opacity: { duration: 0.4 } }}
                  className="overflow-hidden"
                >
                  <motion.p initial={{ y: -6 }} animate={{ y: 0 }} exit={{ y: -6 }} transition={{ duration: 0.5, ease }} className="pb-6 text-base leading-7 text-muted-foreground">{a}</motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export { motion };
