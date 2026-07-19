import { motion } from "framer-motion";
import { Particles } from "./Particles";

const lines = [
  "Technology evolves.",
  "Innovation inspires.",
  "The future isn't waiting.",
  "It's being built.",
];

export function Ending() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
      <div className="absolute inset-0"><Particles density={90} /></div>
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, oklch(0.08 0.02 260) 80%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {lines.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: i * 0.3 }}
            className="font-display text-3xl font-semibold sm:text-5xl"
          >
            {i < 3 ? (
              <span className="text-foreground/90">{l}</span>
            ) : (
              <span className="text-gradient">{l}</span>
            )}
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.6, duration: 1 }}
          className="mt-16 space-y-2"
        >
          <div className="font-display text-6xl font-bold text-gradient sm:text-8xl">
            Thank You.
          </div>
          <div className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Questions?
          </div>
        </motion.div>
      </div>
    </section>
  );
}
