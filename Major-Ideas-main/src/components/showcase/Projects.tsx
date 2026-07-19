import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Cpu, Zap, Layers, Rocket } from "lucide-react";
import { projects, type Project } from "./projects.data";
import { sfx } from "@/lib/sound";

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 03 · Projects</div>
          <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">
            Three products. <span className="text-gradient">One launch.</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => { sfx.activate(); setActive(p); }} />
          ))}
        </div>
      </div>

      <ProjectDetail project={active} onClose={() => { sfx.whoosh(); setActive(null); }} />
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: -py * 8, y: px * 8 });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      onMouseEnter={() => sfx.hover()}
      style={{ transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      className="glass group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-3xl p-8 transition-shadow duration-500 hover:shadow-[0_30px_100px_-20px_oklch(0.82_0.16_220_/_0.4)]"
      onClick={onOpen}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 transition-opacity duration-500 group-hover:opacity-90`}
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

      {/* animated border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, oklch(0.82 0.16 220 / 0.5) 50%, transparent 70%)",
          maskImage:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: 1,
        }}
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-cyan">
            {project.code}
          </span>
          <ArrowRight
            size={18}
            className="text-muted-foreground transition group-hover:translate-x-1 group-hover:text-foreground"
          />
        </div>

        <div className="mt-auto">
          <div className="font-display text-6xl font-bold leading-none text-gradient">
            {project.name}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{project.tagline}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-widest text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="mb-4 flex items-center gap-2 text-cyan">
        <Icon size={16} />
        <h4 className="text-xs uppercase tracking-[0.3em]">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function ProjectDetail({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] overflow-y-auto bg-background/85 backdrop-blur-2xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto min-h-screen w-full max-w-6xl px-6 py-16"
          >
            <button
              onClick={onClose}
              className="glass-strong sticky top-6 z-10 float-right flex h-11 w-11 items-center justify-center rounded-full text-foreground transition hover:scale-110"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            {/* Header */}
            <div className="relative overflow-hidden rounded-3xl glass-strong p-10 mb-8">
              <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${project.color}`} />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.4em] text-cyan">{project.code}</div>
                <div className="mt-3 font-display text-7xl font-bold text-gradient sm:text-9xl">
                  {project.name}
                </div>
                <p className="mt-3 max-w-2xl text-lg text-foreground/90">{project.tagline}</p>
              </div>
            </div>

            {/* Summary */}
            <div className="glass rounded-2xl p-8 mb-8">
              <h3 className="mb-3 font-display text-2xl">Project Summary</h3>
              <p className="text-muted-foreground">{project.summary}</p>
            </div>

            {/* Problem / Solution */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="glass rounded-2xl p-8">
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-destructive">
                  Problem
                </div>
                <p className="text-muted-foreground">{project.problem}</p>
              </div>
              <div className="glass rounded-2xl p-8">
                <div className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan">Solution</div>
                <p className="text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            {/* Objectives + Features */}
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <Section icon={Rocket} title="Objectives">
                <ul className="space-y-2">
                  {project.objectives.map((o) => (
                    <li key={o} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" /> {o}
                    </li>
                  ))}
                </ul>
              </Section>
              <Section icon={Zap} title="Features">
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" /> {f}
                    </li>
                  ))}
                </ul>
              </Section>
            </div>

            {/* Workflow */}
            <div className="mb-8 glass rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-2 text-cyan">
                <Layers size={16} />
                <h4 className="text-xs uppercase tracking-[0.3em]">Workflow</h4>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {project.workflow.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.08 }}
                      className="glass rounded-xl px-4 py-3 text-sm font-mono"
                    >
                      <span className="mr-2 text-cyan">{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </motion.div>
                    {i < project.workflow.length - 1 && (
                      <ArrowRight size={16} className="text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div className="mb-8 glass rounded-2xl p-8">
              <div className="mb-6 flex items-center gap-2 text-cyan">
                <Cpu size={16} />
                <h4 className="text-xs uppercase tracking-[0.3em]">Architecture</h4>
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {project.architecture.map((layer, i) => (
                  <motion.div
                    key={layer.layer}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-3 text-xs uppercase tracking-widest text-cyan">
                      {layer.layer}
                    </div>
                    <ul className="space-y-1.5">
                      {layer.items.map((x) => (
                        <li key={x} className="text-sm text-muted-foreground">
                          · {x}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="mb-8 glass rounded-2xl p-8">
              <h4 className="mb-4 text-xs uppercase tracking-[0.3em] text-cyan">Technology Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-cyan/30 bg-cyan/5 px-4 py-1.5 text-xs uppercase tracking-widest text-cyan"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Applications / Advantages / Future */}
            <div className="grid gap-6 md:grid-cols-3">
              <Section icon={Rocket} title="Applications">
                <ul className="space-y-2">
                  {project.applications.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground">· {a}</li>
                  ))}
                </ul>
              </Section>
              <Section icon={Zap} title="Advantages">
                <ul className="space-y-2">
                  {project.advantages.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground">· {a}</li>
                  ))}
                </ul>
              </Section>
              <Section icon={Layers} title="Future Scope">
                <ul className="space-y-2">
                  {project.futureScope.map((a) => (
                    <li key={a} className="text-sm text-muted-foreground">· {a}</li>
                  ))}
                </ul>
              </Section>
            </div>

            <div className="h-16" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
