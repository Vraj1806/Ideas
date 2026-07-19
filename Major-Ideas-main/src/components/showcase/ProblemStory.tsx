import { motion } from "framer-motion";
import { Keyboard, Home, ClipboardList, ArrowDown } from "lucide-react";

const panels = [
  {
    icon: Keyboard,
    domain: "Computers",
    pain: ["Keyboard", "Mouse", "Manual interaction"],
    project: "REX",
    tagline: "A voice-first AI you actually talk to.",
    color: "from-cyan-400 to-electric",
  },
  {
    icon: Home,
    domain: "Homes",
    pain: ["Switches", "Remotes", "Manual control"],
    project: "NEXUS",
    tagline: "A smart room that reads presence, mood, and intent.",
    color: "from-electric to-purple",
  },
  {
    icon: ClipboardList,
    domain: "Faculty",
    pain: ["Attendance", "Reports", "Messaging"],
    project: "EDUFLOW",
    tagline: "The operating system for the modern classroom.",
    color: "from-purple to-cyan-400",
  },
];

export function ProblemStory() {
  return (
    <section id="problem" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">// 02 · The Problem</div>
          <h2 className="max-w-4xl font-display text-4xl font-bold sm:text-6xl">
            The problems <span className="text-gradient">around us.</span>
          </h2>
        </motion.div>

        <div className="mt-20 space-y-16">
          {panels.map((p, i) => (
            <motion.div
              key={p.project}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
                {/* Problem */}
                <div className="glass rounded-2xl p-8">
                  <div className="mb-4 flex items-center gap-3 text-muted-foreground">
                    <p.icon size={22} />
                    <span className="text-xs uppercase tracking-[0.3em]">
                      Problem · {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-4 font-display text-3xl font-semibold">
                    {p.domain} still depend on…
                  </h3>
                  <ul className="space-y-2">
                    {p.pain.map((x) => (
                      <li key={x} className="flex items-center gap-3 text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-destructive" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow */}
                <div className="flex flex-col items-center gap-2 py-6 text-cyan md:py-0">
                  <ArrowDown size={28} className="animate-pulse md:hidden" />
                  <div className="hidden md:flex flex-col items-center">
                    <div className="h-16 w-[2px] bg-gradient-to-b from-transparent via-cyan to-transparent" />
                    <ArrowDown size={20} className="rotate-[-90deg]" />
                  </div>
                </div>

                {/* Solution */}
                <div className={"relative rounded-2xl p-8 glass-strong overflow-hidden"}>
                  <div
                    className={`absolute inset-0 opacity-20 bg-gradient-to-br ${p.color}`}
                    aria-hidden
                  />
                  <div className="relative">
                    <div className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan">
                      Introduce
                    </div>
                    <div className="font-display text-6xl font-bold text-gradient">
                      {p.project}
                    </div>
                    <p className="mt-4 text-lg text-foreground/90">{p.tagline}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
