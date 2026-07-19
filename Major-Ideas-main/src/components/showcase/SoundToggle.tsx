import { useEffect, useState } from "react";
import { setMuted, sfx } from "@/lib/sound";
import { Volume2, VolumeX } from "lucide-react";

export function SoundToggle() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setMuted(!on);
    if (on) sfx.ping();
  }, [on]);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="glass fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full text-cyan transition hover:scale-110 hover:glow-ring"
      aria-label={on ? "Mute sound" : "Enable sound"}
    >
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
}
