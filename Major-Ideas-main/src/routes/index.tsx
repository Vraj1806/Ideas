import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SmoothScroll } from "@/components/showcase/SmoothScroll";
import { BootSequence } from "@/components/showcase/BootSequence";
import { CursorGlow } from "@/components/showcase/CursorGlow";
import { SoundToggle } from "@/components/showcase/SoundToggle";
import { Nav } from "@/components/showcase/Nav";
import { Hero } from "@/components/showcase/Hero";
import { About } from "@/components/showcase/About";
import { ProblemStory } from "@/components/showcase/ProblemStory";
import { Projects } from "@/components/showcase/Projects";
import { TechStack } from "@/components/showcase/TechStack";
import { Comparison } from "@/components/showcase/Comparison";
import { Roadmap } from "@/components/showcase/Roadmap";
import { WhyProjects } from "@/components/showcase/WhyProjects";
import { Team } from "@/components/showcase/Team";
import { Ending } from "@/components/showcase/Ending";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [booted, setBooted] = useState(false);
  return (
    <SmoothScroll>
      <BootSequence onDone={() => setBooted(true)} />
      {booted && (
        <>
          <CursorGlow />
          <Nav />
          <SoundToggle />
          <main className="relative">
            <Hero />
            <About />
            <ProblemStory />
            <Projects />
            <TechStack />
            <Comparison />
            <Roadmap />
            <WhyProjects />
            <Team />
            <Ending />
            <footer className="border-t border-white/5 py-10 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              NEXUS · OS — Major Project Showcase 2026 · Built by Vraj
            </footer>
          </main>
        </>
      )}
    </SmoothScroll>
  );
}
