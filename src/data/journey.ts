// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✏️  EDIT YOUR JOURNEY STOPS HERE
// Each city = one "stop" on your About page timeline.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export interface JourneyStop {
  city: string;
  country: string;
  years: string;
  emoji: string;
  tagline: string;
  story: string;
  highlights: string[];
  color: string;
  accentColor: string;
}

export const journeyStops: JourneyStop[] = [
  {
    city: "Pune",
    country: "India",
    years: "1999 – 2018",
    emoji: "🌸",
    tagline: "Where it all began",
    story:
      "Grew up surrounded by curiosity and chaos. Founded the Economics Club, ran Rotaract, adopted every stray animal in sight. Pune made me a builder before I knew what that meant.",
    highlights: [
      "Founded Economics Club",
      "Rotaract Club leadership",
      "Animal rescue & welfare",
      "First experiments in tech",
    ],
    color: "hsl(320 45% 92%)",
    accentColor: "hsl(320 60% 65%)",
  },
  {
    city: "Delhi",
    country: "India",
    years: "2018 – 2020",
    emoji: "⚡",
    tagline: "The innovation era",
    story:
      "IIT Delhi opened my eyes to what engineering could look like when you refused to accept boring constraints. Built a salad vending machine. Won the HPAIR scholarship. Realized I was more interested in the why than the how.",
    highlights: [
      "Salad vending machine prototype",
      "HPAIR Harvard scholarship",
      "IIT Delhi research exposure",
      "First product design projects",
    ],
    color: "hsl(48 100% 93%)",
    accentColor: "hsl(48 100% 50%)",
  },
  {
    city: "Bangalore",
    country: "India",
    years: "2020 – 2023",
    emoji: "🤖",
    tagline: "ML & tech era",
    story:
      "athenahealth. Real production ML. Real stakeholders. Learned that models are 20% of the job and understanding what people actually need is the other 80%. Travelled everywhere. Built everything.",
    highlights: [
      "ML Engineer at athenahealth",
      "Production ML systems at scale",
      "MakeShift Education work",
      "Extensive travel across India",
    ],
    color: "hsl(180 45% 92%)",
    accentColor: "hsl(180 60% 45%)",
  },
  {
    city: "West Lafayette",
    country: "USA",
    years: "2023 – present",
    emoji: "🎓",
    tagline: "The present chapter",
    story:
      "Purdue MEM with a 4.0. Consulting. Venture fund work. Building things at the intersection of ML and product. West Lafayette is cold and flat and I love it here.",
    highlights: [
      "Purdue MEM — 4.0 GPA",
      "AI product consulting",
      "Venture fund involvement",
      "Caterpillar MCP Server project",
    ],
    color: "hsl(270 45% 93%)",
    accentColor: "hsl(270 60% 55%)",
  },
];
