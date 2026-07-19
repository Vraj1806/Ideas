// Tiny Web Audio synth for UI cues. Muted by default via context state.
let ctx: AudioContext | null = null;
let muted = true;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    try {
      ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch {
      return null;
    }
  }
  return ctx;
}

export function setMuted(v: boolean) {
  muted = v;
  if (!v) getCtx()?.resume();
}
export function isMuted() {
  return muted;
}

type ToneOpts = {
  freq?: number;
  freqTo?: number;
  dur?: number;
  type?: OscillatorType;
  vol?: number;
  delay?: number;
};

function tone({ freq = 440, freqTo, dur = 0.15, type = "sine", vol = 0.06, delay = 0 }: ToneOpts) {
  if (muted) return;
  const ac = getCtx();
  if (!ac) return;
  const t0 = ac.currentTime + delay;
  const osc = ac.createOscillator();
  const gain = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (freqTo) osc.frequency.exponentialRampToValueAtTime(Math.max(1, freqTo), t0 + dur);
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(vol, t0 + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(gain).connect(ac.destination);
  osc.start(t0);
  osc.stop(t0 + dur + 0.02);
}

export const sfx = {
  boot() {
    tone({ freq: 180, freqTo: 720, dur: 1.2, type: "sawtooth", vol: 0.04 });
    tone({ freq: 90, freqTo: 360, dur: 1.4, type: "sine", vol: 0.05 });
  },
  tick() {
    tone({ freq: 1200, dur: 0.04, type: "square", vol: 0.02 });
  },
  hover() {
    tone({ freq: 880, dur: 0.06, type: "sine", vol: 0.03 });
  },
  click() {
    tone({ freq: 660, freqTo: 1200, dur: 0.09, type: "triangle", vol: 0.05 });
  },
  whoosh() {
    tone({ freq: 300, freqTo: 60, dur: 0.5, type: "sawtooth", vol: 0.05 });
  },
  activate() {
    tone({ freq: 440, freqTo: 1320, dur: 0.35, type: "sine", vol: 0.06 });
    tone({ freq: 660, freqTo: 1760, dur: 0.35, type: "triangle", vol: 0.04, delay: 0.05 });
  },
  ping() {
    tone({ freq: 1760, dur: 0.18, type: "sine", vol: 0.05 });
  },
};
