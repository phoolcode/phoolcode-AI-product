import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingEmojis from "@/components/FloatingEmojis";
import { journeyStops, type JourneyStop } from "@/data/journey";

const StopCard = ({ stop, isActive, onClick }: { stop: JourneyStop; isActive: boolean; onClick: () => void }) => (
  <div
    onClick={onClick}
    className="relative group cursor-pointer transition-all duration-300"
    style={{ transform: isActive ? "scale(1.02)" : "scale(1)" }}
  >
    {/* Pin dot */}
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white transition-all duration-300 mx-auto"
      style={{
        background: isActive ? stop.accentColor : stop.color,
        boxShadow: isActive ? `0 0 0 4px ${stop.accentColor}44, 0 8px 24px rgba(0,0,0,0.15)` : undefined,
      }}
    >
      {stop.emoji}
    </div>

    {/* City label */}
    <div className="text-center mt-2">
      <p className="font-bold text-sm text-foreground">{stop.city}</p>
      <p className="text-xs text-muted-foreground">{stop.years}</p>
    </div>
  </div>
);

const About = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const active = activeIdx !== null ? journeyStops[activeIdx] : null;

  return (
    <div className="min-h-screen relative">
      <FloatingEmojis />
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-4xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-3">My Journey ✈️</h1>
            <p className="text-muted-foreground text-lg">
              Four cities. One very messy, very intentional path.
            </p>
          </div>

          {/* Timeline track */}
          <div className="relative mb-10">
            {/* Connecting line */}
            <div
              className="absolute top-7 left-0 right-0 h-0.5 mx-[3.5rem]"
              style={{
                background: `linear-gradient(to right, ${journeyStops.map(s => s.accentColor).join(", ")})`,
                opacity: 0.5,
              }}
            />

            {/* Stops row */}
            <div className="grid grid-cols-4 gap-4 relative">
              {journeyStops.map((stop, idx) => (
                <StopCard
                  key={idx}
                  stop={stop}
                  isActive={activeIdx === idx}
                  onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
                />
              ))}
            </div>
          </div>

          {/* Detail card */}
          {active && (
            <div
              className="rounded-2xl p-8 shadow-lg border border-border/50 transition-all duration-300"
              style={{ background: active.color }}
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left: story */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h2 className="text-3xl font-bold">{active.city}</h2>
                    <span className="text-muted-foreground text-sm">{active.country} · {active.years}</span>
                  </div>
                  <p
                    className="text-sm font-semibold uppercase tracking-widest mb-4"
                    style={{ color: active.accentColor }}
                  >
                    {active.tagline}
                  </p>
                  <p className="text-foreground/80 leading-relaxed text-base">{active.story}</p>
                </div>

                {/* Right: highlights */}
                <div className="md:w-56 shrink-0">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">Highlights</p>
                  <ul className="space-y-2">
                    {active.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span style={{ color: active.accentColor }} className="mt-0.5">✦</span>
                        <span className="text-foreground/80">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {!active && (
            <div className="text-center py-10 text-muted-foreground">
              <p className="text-lg">↑ tap a city to read the story</p>
            </div>
          )}

          {/* Bio section */}
          <div className="mt-16 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 bg-card border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">The longer version 📖</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                I'm Falguni — ML engineer turned product thinker, currently doing my MEM at Purdue with a 4.0. I've
                built production ML systems at athenahealth, designed salad vending machines at IIT Delhi, and somehow
                managed to connect all of it into a coherent story about what happens when you refuse to pick a lane.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-card border border-border/50 shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">What I actually care about 💡</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AI/ML systems",
                  "Product strategy",
                  "Animal welfare",
                  "Knitting",
                  "Coffee",
                  "Accessibility tech",
                  "Building things that work",
                  "Cats (always cats)",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border border-border font-medium text-foreground/70"
                    style={{ background: "hsl(var(--muted))" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default About;
