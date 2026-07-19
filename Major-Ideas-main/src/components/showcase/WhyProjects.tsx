import { motion } from "framer-motion";

const cards = [
  { title: "Real problem", body: "Each product targets a daily-life friction, not a made-up demo." },
  { title: "Innovation", body: "Novel combinations of AI, IoT, and automation — not repackaged tutorials." },
  { title: "Industry relevance", body: "Applicable across homes, campuses, workplaces, and assistive tech." },
  { title: "Commercial value", body: "Each concept has a plausible go-to-market and revenue model." },
  { title: "Future opportunities", body: "Every product opens a roadmap of adjacent features and integrations." },
  { title: "Scalability", body: "Architected as products, not projects — cloud, edge, and multi-tenant ready." },
];

export function WhyProjects() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 07 · Why these?</div>
          <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">
            Why <span className="text-gradient">these projects</span>.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-3 font-mono text-xs text-cyan">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold">{c.title}</h3>
              <p className="text-sm text-muted-foreground">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
