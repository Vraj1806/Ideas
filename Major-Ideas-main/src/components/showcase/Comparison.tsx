import { motion } from "framer-motion";

type Row = { label: string; rex: number; nexus: number; eduflow: number };

const rows: Row[] = [
  { label: "Innovation", rex: 90, nexus: 95, eduflow: 85 },
  { label: "Difficulty", rex: 88, nexus: 94, eduflow: 78 },
  { label: "AI", rex: 95, nexus: 70, eduflow: 88 },
  { label: "IoT", rex: 40, nexus: 98, eduflow: 30 },
  { label: "Automation", rex: 92, nexus: 90, eduflow: 95 },
  { label: "Scalability", rex: 80, nexus: 85, eduflow: 92 },
  { label: "Commercial Potential", rex: 82, nexus: 90, eduflow: 94 },
  { label: "Industry Use", rex: 78, nexus: 88, eduflow: 90 },
  { label: "Resume Value", rex: 90, nexus: 95, eduflow: 88 },
];

const colors = {
  rex: "from-cyan-400 to-cyan-600",
  nexus: "from-electric to-purple",
  eduflow: "from-purple to-cyan-400",
};

function Bar({ value, color }: { value: number; color: string }) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-full bg-gradient-to-r ${color}`}
      />
    </div>
  );
}

export function Comparison() {
  return (
    <section id="compare" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 05 · Comparison</div>
          <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">
            Head to <span className="text-gradient">head</span>.
          </h2>
        </div>

        <div className="glass-strong overflow-hidden rounded-3xl p-8">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-6 border-b border-white/10 pb-4 text-xs uppercase tracking-widest text-muted-foreground">
            <div>Metric</div>
            <div className="text-center">REX</div>
            <div className="text-center">NEXUS</div>
            <div className="text-center">EDUFLOW</div>
          </div>

          <div className="divide-y divide-white/5">
            {rows.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-[1.4fr_1fr_1fr_1fr] items-center gap-6 py-4"
              >
                <div className="font-display text-sm font-medium">{r.label}</div>
                {(["rex", "nexus", "eduflow"] as const).map((k) => (
                  <div key={k} className="space-y-1.5">
                    <Bar value={r[k]} color={colors[k]} />
                    <div className="text-right font-mono text-[10px] text-muted-foreground tabular-nums">
                      {r[k]}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
