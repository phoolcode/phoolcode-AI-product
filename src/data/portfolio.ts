// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✏️  ADD / EDIT YOUR PROJECTS HERE
// Just copy a block below, fill in the fields, save.
// The portfolio page picks it up automatically.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface Project {
  title: string;
  description: string;
  skills: string[];
  github?: string;
  link?: string;
  inProgress?: boolean;
  concept?: boolean;
  note?: string;
  details?: string[];
  impact?: string;
  problem?: string;
  innovation?: string;
  year?: string;
  emoji?: string;
}

export const mlProjects: Project[] = [
  {
    title: "Caterpillar MCP Server",
    emoji: "🏗️",
    year: "2024",
    description:
      "Building an MCP server using Llama to generate intelligent dashboards from Caterpillar's proprietary heavy machinery track data. Natural language interface for engineers to query and visualize complex equipment performance metrics without writing SQL.",
    skills: ["LLMs (Llama)", "Data Visualization", "Dashboard Design", "Large-scale Data Processing", "MCP Architecture"],
    inProgress: true,
  },
  {
    title: "Hyperspectral Image Classification",
    emoji: "🛰️",
    year: "2023",
    description:
      "Worked with the Indian Pines dataset to classify land cover using 3D CNNs and ensemble learning. Combined spatial and spectral features to identify crop types from satellite imagery.",
    skills: ["3D CNNs", "Ensemble Learning", "Hyperspectral Analysis", "Dimensionality Reduction", "TensorFlow"],
  },
  {
    title: "Indian Sign Language Recognition",
    emoji: "🤟",
    year: "2022",
    description:
      "Built a complete pipeline for recognizing Indian Sign Language gestures — Canny edge detection, SIFT feature extraction, visual bag of words, then CNNs for real-time classification. Built for accessibility.",
    skills: ["Computer Vision", "CNNs", "Feature Extraction (SIFT)", "Canny Edge Detection", "OpenCV"],
  },
  {
    title: "Personal Portfolio Manager AI",
    emoji: "📈",
    year: "2023",
    description:
      "An AI-powered investment portfolio manager that tracks stocks and provides intelligent rebalancing recommendations. Uses ML models to analyze market trends and suggest optimal allocation strategies.",
    skills: ["Financial Modeling", "API Integration", "Data Analysis", "Portfolio Optimization", "Python"],
    github: "https://github.com/phoolcode",
  },
  {
    title: "Smart Insulin Pump System",
    emoji: "💊",
    year: "2022",
    description:
      "Designed an IoT-based insulin delivery system that adapts to real-time glucose monitoring. The pump adjusts dosage automatically based on continuous glucose data.",
    skills: ["IoT", "Embedded Systems", "Healthcare Tech", "Real-time Data Processing", "Arduino/Raspberry Pi"],
    github: "https://github.com/phoolcode",
  },
  {
    title: "Mini Mahilo — Multi-Agent Workflow Manager",
    emoji: "🕸️",
    year: "2024",
    description:
      "Lightweight flexible agent manager for orchestrating multiple AI agents — like air traffic control for chatbots. Handles naming, routing, and coordination between different AI agents in complex workflows.",
    skills: ["Agent Orchestration", "LLM Integration", "Workflow Management", "Python", "System Architecture"],
    github: "https://github.com/phoolcode",
  },
];

export const productProjects: Project[] = [
  {
    title: "Amazon Subscribe & Save — UX Redesign",
    emoji: "📦",
    year: "2024",
    description:
      "Comprehensive UX audit of Amazon's Subscribe & Save program (currently at 10% adoption). Identified three user segments based on subscription intent, mapped critical drop-off points, designed solutions to increase discoverability and conversion.",
    details: [
      "Smart bundling to unlock 10% multi-item discount",
      "Personalized homepage nudges based on purchase behavior",
      "Improved PLP/PDP visibility with interactive UI elements",
      "Cart-level subscription upsells and clear differentiation",
      "Cross-platform reminders via push notifications & WhatsApp",
    ],
    impact:
      "Used RICE framework to prioritize initiatives. Proposed solutions targeting discoverability, checkout friction, and retention.",
    skills: ["User Research", "Journey Mapping", "UX/UI Design", "A/B Testing Strategy", "RICE Framework"],
  },
  {
    title: "GPT Text Scanner Chrome Extension",
    emoji: "🔍",
    year: "2024",
    description:
      "Chrome extension that eliminates tab-switching hell. Highlight any text on any webpage, scan it, GPT opens in a small overlay window — no copy-paste, no context switching. Includes text improvement, summarization, tone adjustment.",
    problem: "Current workflow requires opening ChatGPT in new tab → copy text → paste → switch back. This makes it seamless.",
    skills: ["Chrome Extension Development", "API Integration", "UX Design", "JavaScript"],
    inProgress: true,
  },
  {
    title: "Math Equation Mood Visualizer",
    emoji: "∫",
    year: "2023",
    description:
      "Experimental tool that converts math equations into visual art based on emotional association. Upload your photo, select an equation, generate a visual representation of how math makes you feel.",
    note: "Is it useful? Unclear. Is it cool? Absolutely.",
    skills: ["Generative Art", "Image Processing", "Creative Tech", "Python"],
    concept: true,
  },
  {
    title: "AI Teacher with Personality",
    emoji: "🧑‍🏫",
    year: "2024",
    description:
      "AI tutors that don't just teach — they have distinct personalities and evoke genuine emotion. The system learns your learning style and adapts both content and delivery.",
    innovation:
      "Personalized pedagogy that adapts to individual learning patterns while maintaining consistent character traits.",
    skills: ["LLM Fine-tuning", "Adaptive Learning Systems", "Personality Modeling", "EdTech"],
  },
  {
    title: "System Design Whiteboard Tool",
    emoji: "🗺️",
    year: "2024",
    description:
      "Drag-and-drop whiteboard specifically built for system design interviews and architecture planning. Includes a built-in repository of all major MLOps and DevOps tools with their functionalities.",
    problem:
      "Current tools (Excalidraw, Lucidchart) aren't built for system design specifically. This one knows what a load balancer does.",
    skills: ["System Architecture", "Tool Knowledge (MLOps/DevOps)", "Interactive Diagramming", "Product Design"],
    concept: true,
  },
];
