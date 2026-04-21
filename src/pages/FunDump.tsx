import { useState } from "react";
import Navigation from "@/components/Navigation";

// ✏️ GALLERY: drop image files into public/gallery/ and update the src fields below
// Format: { src: "/gallery/yourfile.jpg", title: "...", caption: "...", span: "wide"|"tall"|"normal" }

const galleryItems = [
  {
    emoji: "🐱",
    title: "Cat Monstrosity",
    caption: "My cats are my world. They're chaotic, adorable, and excellent debugging partners.",
    fact: "Mine spend 70% of their time judging me.",
    bg: "hsl(320 45% 88%)",
    accent: "hsl(320 60% 65%)",
    span: "wide",
    // src: "/gallery/cats.jpg"  ← drop your photo here
  },
  {
    emoji: "🧶",
    title: "Yarn Barn",
    caption: "Knitting is my zen. There is something deeply therapeutic about turning yarn into cozy things.",
    fact: "I have more yarn than I could use in a lifetime.",
    bg: "hsl(270 40% 88%)",
    accent: "hsl(270 60% 55%)",
    span: "normal",
  },
  {
    emoji: "☕",
    title: "Coffee Person",
    caption: "I take my coffee seriously. Too seriously, according to my friends.",
    fact: "Spent more on coffee equipment than my first laptop.",
    bg: "hsl(30 70% 88%)",
    accent: "hsl(30 80% 50%)",
    span: "normal",
  },
  {
    emoji: "🌱",
    title: "Plant Parent",
    caption: "Trying to keep plants alive while managing a tech career. 60% success rate.",
    fact: "My cats have eaten more plants than have died naturally.",
    bg: "hsl(140 40% 88%)",
    accent: "hsl(140 55% 45%)",
    span: "tall",
  },
  {
    emoji: "✈️",
    title: "Always in transit",
    caption: "Every city teaches you something different. Usually something about yourself.",
    fact: "Moved between 3 countries in 5 years.",
    bg: "hsl(200 45% 88%)",
    accent: "hsl(200 60% 50%)",
    span: "normal",
  },
  {
    emoji: "🎨",
    title: "Making things",
    caption: "Not always code. Sometimes paint, fabric, bad doodles.",
    fact: "The best ideas often come from doing something totally unrelated.",
    bg: "hsl(48 100% 88%)",
    accent: "hsl(48 100% 45%)",
    span: "wide",
  },
];

const GalleryCell = ({ item, idx }: { item: typeof galleryItems[0]; idx: number }) => {
  const [hovered, setHovered] = useState(false);

  const rotation = [-1.5, 0.8, -0.5, 1.2, -0.9, 0.4][idx % 6];

  return (
    <div
      className="relative overflow-hidden rounded-xl shadow-md transition-all duration-300"
      style={{
        background: item.bg,
        transform: hovered ? "scale(1.04) rotate(0deg)" : `rotate(${rotation}deg)`,
        cursor: "pointer",
        gridColumn: item.span === "wide" ? "span 2" : "span 1",
        gridRow: item.span === "tall" ? "span 2" : "span 1",
        minHeight: item.span === "tall" ? "260px" : "140px",
        border: `2px solid ${item.accent}44`,
        boxShadow: hovered ? `0 12px 32px ${item.accent}44` : `0 4px 12px rgba(0,0,0,0.1)`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Photo placeholder — replace with <img> when you have photos */}
      <div
        className="absolute inset-0 flex items-center justify-center text-6xl opacity-30"
        style={{ fontSize: item.span === "tall" ? "5rem" : "4rem" }}
      >
        {item.emoji}
      </div>

      {/* Content overlay */}
      <div
        className="absolute inset-0 p-5 flex flex-col justify-end transition-all duration-300"
        style={{
          background: hovered
            ? `linear-gradient(to top, ${item.bg}ee 0%, ${item.bg}88 60%, transparent 100%)`
            : `linear-gradient(to top, ${item.bg}cc 0%, transparent 70%)`,
        }}
      >
        <div
          className="transition-all duration-300"
          style={{ transform: hovered ? "translateY(0)" : "translateY(8px)", opacity: hovered ? 1 : 0.8 }}
        >
          <h3 className="font-bold text-foreground text-base leading-tight mb-1">{item.title}</h3>
          {hovered && (
            <p className="text-xs text-foreground/70 leading-relaxed">{item.caption}</p>
          )}
        </div>
      </div>

      {/* Top-right emoji label */}
      <div className="absolute top-3 right-3 text-xl">{item.emoji}</div>

      {/* Fun fact pill — shows on hover */}
      {hovered && (
        <div
          className="absolute top-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ background: item.accent, color: "white", maxWidth: "70%" }}
        >
          💡 {item.fact}
        </div>
      )}
    </div>
  );
};

const FunDump = () => (
  <div className="min-h-screen">
    <Navigation />

    <main className="container mx-auto px-6 pt-24 pb-20">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Fun Dump 🎨</h1>
          <p className="text-muted-foreground text-lg">
            The non-technical side. Hover to explore.
          </p>
        </div>

        {/* Abstract gallery grid */}
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "140px",
          }}
        >
          {galleryItems.map((item, idx) => (
            <GalleryCell key={idx} item={item} idx={idx} />
          ))}
        </div>

        {/* Cat gallery section */}
        <div
          className="mt-12 rounded-2xl p-8 border-2"
          style={{
            background: "hsl(320 35% 92%)",
            borderColor: "hsl(320 45% 78%)",
            borderStyle: "dashed",
          }}
        >
          <h2 className="text-2xl font-bold text-primary mb-2">Meet My Feline Overlords 👑</h2>
          <p className="text-muted-foreground text-sm mb-6">
            Gallery incoming. Drop photos in{" "}
            <code className="bg-white/60 px-1.5 py-0.5 rounded text-xs font-mono">public/gallery/</code>{" "}
            and update FunDump.tsx to use them.
          </p>
          <div className="flex gap-4 text-5xl">
            {["🐱", "😺", "😸", "😻", "🙀", "😿"].map((emoji, i) => (
              <span
                key={i}
                className="animate-bounce"
                style={{ animationDelay: `${i * 0.12}s`, animationDuration: "1.2s" }}
              >
                {emoji}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  </div>
);

export default FunDump;
