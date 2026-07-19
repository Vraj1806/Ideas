import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sfx } from "@/lib/sound";
import { Particles } from "./Particles";

const modules = [
  { name: "REX", desc: "Voice AI Core" },
  { name: "NEXUS", desc: "IoT Automation Grid" },
  { name: "EDUFLOW", desc: "Faculty Intelligence" },
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"boot" | "modules" | "welcome" | "done">("boot");
  const [modChecked, setModChecked] = useState(0);

  useEffect(() => {
    sfx.boot();
    const int = setInterval(() => {
      setProgress((p) => {
        const next = Math.min(100, p + (Math.random() * 9 + 3));
        if (next >= 100) clearInterval(int);
        return next;
      });
    }, 140);
    return () => clearInterval(int);
  }, []);

  useEffect(() => {
    if (progress >= 100 && phase === "boot") {
      setPhase("modules");
    }
  }, [progress, phase]);

  useEffect(() => {
    if (phase !== "modules") return;
    const int = setInterval(() => {
      setModChecked((c) => {
        if (c >= modules.length) {
          clearInterval(int);
          setTimeout(() => setPhase("welcome"), 400);
          return c;
        }
        sfx.tick();
        return c + 1;
      });
    }, 380);
    return () => clearInterval(int);
  }, [phase]);

  useEffect(() => {
    if (phase !== "welcome") return;
    const t = setTimeout(() => {
      sfx.whoosh();
      setPhase("done");
      setTimeout(onDone, 900);
    }, 1400);
    return () => clearTimeout(t);
  }, [phase, onDone]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.9 }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute inset-0"><Particles density={40} /></div>

          {/* scan line */}
          <div
            className="pointer-events-none absolute inset-x-0 h-24 animate-scan"
            style={{
              background:
                "linear-gradient(180deg, transparent, oklch(0.82 0.16 220 / 0.15), transparent)",
            }}
          />

          <div className="relative z-10 w-full max-w-2xl px-6 font-mono text-sm">
            <AnimatePresence mode="wait">
              {phase === "boot" && (
                <motion.div key="boot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-6 text-cyan/80">
                    <span className="opacity-60">$</span> SYSTEM INITIALIZING…
                  </div>
                  <div className="text-muted-foreground">Loading Project Showcase…</div>
                  <div className="mt-6 flex items-baseline gap-4">
                    <div className="font-display text-6xl font-bold text-gradient tabular-nums">
                      {Math.floor(progress)}%
                    </div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">
                      compiling modules
                    </div>
                  </div>
                  <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full bg-gradient-primary"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </motion.div>
              )}
              {phase === "modules" && (
                <motion.div key="mods" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="mb-4 text-cyan/80">Checking Modules…</div>
                  <ul className="space-y-2">
                    {modules.map((m, i) => (
                      <li
                        key={m.name}
                        className="flex items-center justify-between border-b border-white/5 py-2"
                      >
                        <div>
                          <span className="mr-3 text-muted-foreground">
                            [{String(i + 1).padStart(2, "0")}]
                          </span>
                          <span className="text-foreground">{m.name}</span>
                          <span className="ml-3 text-muted-foreground">{m.desc}</span>
                        </div>
                        {i < modChecked ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-cyan"
                          >
                            ✔
                          </motion.span>
                        ) : (
                          <span className="text-muted-foreground animate-pulse">…</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {phase === "welcome" && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-center"
                >
                  <div className="text-xs uppercase tracking-[0.4em] text-cyan/70">
                    Launching Interface
                  </div>
                  <div className="mt-6 font-display text-7xl font-bold text-gradient">
                    WELCOME.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
