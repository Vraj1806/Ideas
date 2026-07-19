import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stages = [
  { title: "Research", body: "Domain study, user interviews, feasibility analysis." },
  { title: "Planning", body: "Scope, milestones, architecture decisions, risk map." },
  { title: "Design", body: "System diagrams, UI direction, prototypes, interaction models." },
  { title: "Development", body: "Iterative build across firmware, backend, and product UI." },
  { title: "Testing", body: "Unit, integration, and real-user validation loops." },
  { title: "Deployment", body: "Cloud + edge rollout, monitoring, and analytics wired in." },
  { title: "Future Expansion", body: "Product-grade roadmap: mobile, multi-tenant, marketplace." },
];

export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="roadmap" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 06 · Roadmap</div>
          <h2 className="font-display text-4xl font-bold sm:text-6xl">
            The <span className="text-gradient">timeline</span>.
          </h2>
        </div>

        <div ref={ref} className="relative pl-12">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-white/5" />
          <motion.div
            className="absolute left-4 top-0 w-[2px] bg-gradient-to-b from-cyan to-purple"
            style={{ height: lineH }}
          />

          <div className="space-y-10">
            {stages.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-[34px] top-2 h-4 w-4 rounded-full bg-background ring-2 ring-cyan glow-ring" />
                <div className="glass rounded-2xl p-6">
                  <div className="mb-1 text-xs uppercase tracking-widest text-cyan">
                    Stage {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
