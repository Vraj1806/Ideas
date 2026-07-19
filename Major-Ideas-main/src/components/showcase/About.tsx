import { motion } from "framer-motion";
import { Target, Compass, Rocket } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Mission",
    body: "Turn everyday friction into intelligent, ambient systems. AI, IoT, and Automation that quietly do the work.",
  },
  {
    icon: Compass,
    title: "Vision",
    body: "Move Computer Engineering from theory to product — three launches that could ship as real startups.",
  },
  {
    icon: Rocket,
    title: "Goals",
    body: "Prove commercial-grade design, engineering craft, and cross-domain systems thinking in a single year.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 01 · About</div>
          <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">
            Three Ideas. <span className="text-gradient">One Vision.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
            This showcase presents three engineered products built to solve real, everyday problems
            — the way a computer is used, the way a room responds, the way a faculty runs their
            classroom. Each one is designed to be shipped.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass group relative overflow-hidden rounded-2xl p-8"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-primary opacity-0 blur-3xl transition group-hover:opacity-30" />
              <it.icon className="mb-5 text-cyan" size={28} />
              <h3 className="mb-2 font-display text-2xl font-semibold">{it.title}</h3>
              <p className="text-muted-foreground">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
