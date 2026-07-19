import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#problem", label: "Problem" },
  { href: "#projects", label: "Projects" },
  { href: "#tech", label: "Tech" },
  { href: "#compare", label: "Compare" },
  { href: "#team", label: "Team" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 300 && y > last);
      last = y;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (y / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-primary transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
      <nav
        className={
          "fixed left-1/2 top-4 z-40 -translate-x-1/2 transition-all duration-500 " +
          (hidden ? "-translate-y-24 opacity-0" : "translate-y-0 opacity-100")
        }
      >
        <div className="glass-strong flex items-center gap-1 rounded-full px-2 py-2">
          <a href="#top" className="mr-2 flex items-center gap-2 px-3 py-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-primary text-[10px] font-bold text-primary-foreground">
              N
            </span>
            <span className="font-display text-sm font-semibold tracking-wide">IDEAS</span>
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
