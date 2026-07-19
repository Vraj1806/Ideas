import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    initial: "V",
    name: "Vraj",
    role: "Developer",
    description:
      "Computer Engineering · Building products at the intersection of AI, IoT, and automation.",
    college: "Computer Engineering",
    guide: "Project Guide",
    skills: "Full-stack · Embedded · AI",
    vision: "Ship products, not slides",
  },
  {
    initial: "R",
    name: "Ronit",
    role: "Developer",
    description:
      "Computer Engineering · Passionate about AI assistants, desktop automation, and futuristic user experiences.",
    college: "Computer Engineering",
    guide: "Project Guide",
    skills: "Python · AI · React",
    vision: "Build the future with AI",
  },
  {
    initial: "S",
    name: "Shaunak",
    role: "Developer",
    description:
      "Computer Engineering · Interested in software development, problem solving, and innovative technology.",
    college: "Computer Engineering",
    guide: "Project Guide",
    skills: "Web Development · AI",
    vision: "Create impactful software",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16">
          <div className="mb-4 text-xs uppercase tracking-[0.4em] text-cyan">
            // 08 · Team
          </div>

          <h2 className="font-display text-4xl font-bold sm:text-6xl">
            Our <span className="text-gradient">Team</span>.
          </h2>
        </div>

        <div className="space-y-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-strong overflow-hidden rounded-3xl"
            >
              <div className="grid md:grid-cols-[280px_1fr]">
                <div className="relative flex items-center justify-center bg-gradient-to-br from-electric/30 to-purple/30 p-10">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-primary blur-2xl opacity-60" />
                    <div className="relative grid h-40 w-40 place-items-center rounded-full bg-background ring-1 ring-white/10">
                      <span className="font-display text-6xl font-bold text-gradient">
                        {member.initial}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-10">
                  <div className="text-xs uppercase tracking-[0.3em] text-cyan">
                    {member.role}
                  </div>

                  <h3 className="mt-2 font-display text-4xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-muted-foreground">
                    {member.description}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                    <Detail label="College" value={member.college} />
                    <Detail label="Guide" value={member.guide} />
                    <Detail label="Skills" value={member.skills} />
                    <Detail label="Vision" value={member.vision} />
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <SocialButton icon={Github} label="GitHub" />
                    <SocialButton icon={Linkedin} label="LinkedIn" />
                    <SocialButton icon={Mail} label="Email" />
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

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-foreground">{value}</div>
    </div>
  );
}

function SocialButton({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}) {
  return (
    <button className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm transition hover:scale-105 hover:glow-ring">
      <Icon size={14} />
      {label}
    </button>
  );
}