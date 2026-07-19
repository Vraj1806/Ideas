import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Particles } from "./Particles";
import { sfx } from "@/lib/sound";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0"><Particles density={70} /></div>

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-electric/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[600px] w-[600px] rounded-full bg-accent/25 blur-[160px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-cyan"
          >
            <Sparkles size={14} /> CE Major Project Ideas · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[7.5rem]"
          >
            <span className="block text-muted-foreground/70 text-sm uppercase tracking-[0.4em] mb-4">
              Computer Engineering
            </span>
            <span className="text-gradient">MAJOR PROJECT</span>
            <br />
            <span className="text-foreground">IDEAS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground"
          >
            We don't build projects. <span className="text-foreground">We build solutions.</span>{" "}
            Three products, one launch — a voice-first AI, a smart room, and a faculty operating
            system.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              onMouseEnter={() => sfx.hover()}
              onClick={() => sfx.click()}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition hover:scale-[1.03] hover:glow-ring"
            >
              ENTER EXPERIENCE
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="glass rounded-full px-6 py-3 text-sm uppercase tracking-widest text-foreground transition hover:bg-white/10"
            >
              View Projects
            </a>
          </motion.div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "03", v: "Products" },
              { k: "12+", v: "Technologies" },
              { k: "∞", v: "Possibilities" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Core */}
        <div className="relative mx-auto aspect-square w-full max-w-[520px]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-8 rounded-full border border-purple/20"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            className="absolute inset-16 rounded-full border border-cyan/15"
          />

          {/* Orbiting nodes */}
          {[0, 120, 240].map((deg, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan glow-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "center", translateX: "-50%", translateY: "-50%" }}
              initial={{ rotate: deg }}
            >
              <div style={{ transform: `translateX(${180 + i * 20}px)` }} className="h-3 w-3 rounded-full bg-current" />
            </motion.div>
          ))}

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary blur-2xl opacity-70"
          />
          <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-primary glow-ring flex items-center justify-center">
            <div className="font-display text-2xl font-bold text-primary-foreground">AI</div>
          </div>
        </div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
        <div className="flex flex-col items-center gap-2">
          <span>scroll</span>
          <div className="h-10 w-[1px] bg-gradient-to-b from-cyan to-transparent" />
        </div>
      </div>
    </section>
  );
}
