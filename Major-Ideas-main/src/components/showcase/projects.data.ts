export type Project = {
  id: "rex" | "nexus" | "eduflow";
  code: string;
  name: string;
  tagline: string;
  color: string; // tailwind gradient
  accent: string;
  summary: string;
  problem: string;
  solution: string;
  objectives: string[];
  features: string[];
  workflow: string[];
  architecture: { layer: string; items: string[] }[];
  tech: string[];
  applications: string[];
  advantages: string[];
  futureScope: string[];
};

export const projects: Project[] = [
  {
    id: "rex",
    code: "PRJ · 01",
    name: "REX",
    tagline: "Voice-first AI assistant for your desktop.",
    color: "from-cyan-400/40 via-electric/30 to-transparent",
    accent: "cyan",
    summary:
      "REX is a hands-free desktop AI that listens, understands, decides, and executes. It replaces menu-hunting and manual clicks with natural language commands, powered by a modular LLM pipeline.",
    problem:
      "Modern computers still assume you have both hands on a keyboard. Multitasking, accessibility, and productivity all suffer when every action requires precise pointing and typing.",
    solution:
      "A conversational agent that combines speech recognition, intent classification, and system-level automation to run tasks by voice — from opening apps to composing emails and controlling media.",
    objectives: [
      "Sub-second wake-to-response latency",
      "Offline-capable core commands",
      "Extensible skill/plugin architecture",
      "Personality tuned for calm, focused work",
    ],
    features: [
      "Wake-word activation",
      "Continuous conversation mode",
      "System control (apps, files, media)",
      "LLM-powered reasoning",
      "Voice feedback with waveform UI",
      "Customizable command palette",
    ],
    workflow: [
      "User speaks",
      "Speech Recognition",
      "LLM understands intent",
      "Decision engine",
      "Automation executes",
      "Voice response",
    ],
    architecture: [
      { layer: "Input", items: ["Microphone", "Wake-word detector", "VAD"] },
      { layer: "Understanding", items: ["ASR (Whisper)", "Intent classifier", "LLM"] },
      { layer: "Action", items: ["Skill router", "OS automation", "Web APIs"] },
      { layer: "Output", items: ["TTS", "Waveform HUD", "Notifications"] },
    ],
    tech: ["Python", "Whisper", "LLMs", "PyAutoGUI", "FastAPI", "React"],
    applications: [
      "Accessibility for motor-impaired users",
      "Hands-free developer workflows",
      "Voice-driven presentations",
      "Elder-friendly desktop control",
    ],
    advantages: [
      "Zero-touch interaction",
      "Faster than menu navigation",
      "Extensible with plugins",
      "Privacy-first design (local ASR option)",
    ],
    futureScope: [
      "Multi-user voice profiles",
      "On-device fine-tuned LLM",
      "Cross-device continuity with NEXUS",
      "Emotion-aware responses",
    ],
  },
  {
    id: "nexus",
    code: "PRJ · 02",
    name: "NEXUS",
    tagline: "The smart room, reimagined.",
    color: "from-electric/40 via-purple/30 to-transparent",
    accent: "electric",
    summary:
      "NEXUS is an IoT operating system for a single room. It senses presence, gesture, and voice — and orchestrates lights, fans, screens, and modes without a single switch flipped.",
    problem:
      "Home automation today is fragmented: five apps, three remotes, and no context. Rooms don't know who's in them or what you're trying to do.",
    solution:
      "A unified BLE + MQTT mesh, driven by an ESP32 hub and a cloud brain, that reads context and adjusts the environment. Voice, gesture, and preset modes trigger cinematic scene changes.",
    objectives: [
      "Sub-100ms local actuation",
      "One dashboard for the whole room",
      "Zero-config presence detection",
      "Cinematic mode transitions",
    ],
    features: [
      "Presence-based automation",
      "Voice + gesture control",
      "Study / Movie / Sleep modes",
      "Live energy dashboard",
      "OTA firmware updates",
      "Scenes with animation curves",
    ],
    workflow: ["BLE beacon", "ESP32 hub", "MQTT broker", "Cloud rules", "Appliances", "Dashboard"],
    architecture: [
      { layer: "Sensing", items: ["BLE beacon", "PIR", "Ambient light", "Mic array"] },
      { layer: "Edge", items: ["ESP32 hub", "Local rules engine", "Relays"] },
      { layer: "Cloud", items: ["MQTT broker", "Firebase", "Scene engine"] },
      { layer: "Interface", items: ["Room dashboard", "Voice", "Gesture (MediaPipe)"] },
    ],
    tech: ["ESP32", "MQTT", "Firebase", "MediaPipe", "React", "Node.js"],
    applications: [
      "Smart dorm rooms and studios",
      "Boutique hotels and Airbnbs",
      "Focus rooms in coworking spaces",
      "Assistive living environments",
    ],
    advantages: [
      "One system, not five apps",
      "Works offline for critical actions",
      "Beautiful, coherent UX",
      "Low-cost hardware footprint",
    ],
    futureScope: [
      "Multi-room mesh with role handoff",
      "AI-generated ambient scenes",
      "Health-aware climate control",
      "Voice bridge to REX",
    ],
  },
  {
    id: "eduflow",
    code: "PRJ · 03",
    name: "EDUFLOW",
    tagline: "The operating system for faculty.",
    color: "from-purple/40 via-cyan-400/30 to-transparent",
    accent: "purple",
    summary:
      "EDUFLOW compresses hours of faculty admin — attendance, notifications, reports, replies — into minutes. AI reads student responses, categorizes them, and keeps the dashboard alive.",
    problem:
      "Faculty spend more time on spreadsheets than teaching. Attendance, absent-student outreach, and reporting are still manual and disconnected.",
    solution:
      "A single dashboard where attendance uploads trigger AI-classified outreach, and student replies are auto-sorted into buckets: valid excuse, sick, no-show, follow-up.",
    objectives: [
      "Cut admin time by 80%",
      "One dashboard for the whole class",
      "AI-classified reply triage",
      "Auditable reports on demand",
    ],
    features: [
      "One-click attendance upload",
      "Automated student notifications",
      "AI reply categorization",
      "Live class analytics",
      "PDF / Excel report export",
      "Role-based access (HOD, faculty, TA)",
    ],
    workflow: [
      "Faculty uploads attendance",
      "AI processes",
      "Absentees detected",
      "Notifications sent",
      "Students reply",
      "AI categorizes replies",
      "Dashboard updates",
    ],
    architecture: [
      { layer: "Input", items: ["CSV / camera roster", "OCR", "Manual entry"] },
      { layer: "Intelligence", items: ["LLM classifier", "Rules engine", "Report builder"] },
      { layer: "Delivery", items: ["WhatsApp / Email API", "Push notifications"] },
      { layer: "Dashboard", items: ["Live analytics", "Reply inbox", "Exports"] },
    ],
    tech: ["Next.js", "Node.js", "Firebase", "LLMs", "Tailwind", "Chart.js"],
    applications: [
      "Engineering colleges",
      "Schools and coaching institutes",
      "Corporate training programs",
      "Certification bodies",
    ],
    advantages: [
      "Massive time savings",
      "Zero manual follow-ups",
      "Data-rich decisions",
      "Deploys in a day",
    ],
    futureScope: [
      "Student mobile app",
      "Predictive dropout alerts",
      "Auto-scheduling of remedials",
      "Integration with LMS / ERP",
    ],
  },
];
