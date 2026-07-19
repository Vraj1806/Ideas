import { motion } from "framer-motion";

const stack = [
  "React", "Next.js", "Python", "Node.js", "ESP32", "Firebase",
  "MQTT", "MediaPipe", "OpenCV", "Whisper", "LLMs", "Tailwind",
  "GSAP", "Three.js", "Framer Motion",
];

export function TechStack() {
  return (
    <section id="tech" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 04 · Technology</div>
          <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">
            The <span className="text-gradient">stack</span>.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {stack.map((t, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ y: -8, rotate: 3 }}
              className="glass group relative flex h-28 w-32 items-center justify-center rounded-2xl text-center transition hover:glow-ring"
              style={{
                clipPath:
                  "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)",
              }}
            >
              <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-primary/20" />
              <span className="relative font-display text-sm font-semibold">{t}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
