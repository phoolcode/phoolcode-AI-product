import { useState } from "react";
import Navigation from "@/components/Navigation";
import FloatingEmojis from "@/components/FloatingEmojis";
import { mlProjects, productProjects, type Project } from "@/data/portfolio";

// Alternating slight rotations for scrapbook feel
const tiltAngles = ["-1.2deg", "0.8deg", "-0.6deg", "1.4deg", "-1.8deg", "0.5deg", "-1deg", "1.2deg"];

const colorAccents = [
  "hsl(320 45% 88%)",
  "hsl(48 100% 88%)",
  "hsl(180 45% 88%)",
  "hsl(270 45% 88%)",
  "hsl(15 80% 88%)",
  "hsl(210 45% 88%)",
];

const ProjectCard = ({ project, idx }: { project: Project; idx: number }) => {
  const [expanded, setExpanded] = useState(false);
  const tilt = tiltAngles[idx % tiltAngles.length];
  const accent = colorAccents[idx % colorAccents.length];

  return (
    <div
      className="relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
      style={{
        transform: `rotate(${tilt})`,
        border: `2px solid ${accent}`,
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.02)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = `rotate(${tilt})`)}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top accent strip */}
      <div className="h-1.5 w-full" style={{ background: accent }} />

      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            {project.emoji && <span className="text-2xl flex-shrink-0">{project.emoji}</span>}
            <h3 className="font-bold text-base leading-snug text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </div>
          <div className="flex gap-1 flex-shrink-0">
            {project.inProgress && (
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-yellow-100 text-yellow-700 border border-yellow-200">
                in progress
              </span>
            )}
            {project.concept && (
              <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-purple-100 text-purple-600 border border-purple-200">
                concept
              </span>
            )}
            {project.year && (
              <span className="text-xs px-2 py-0.5 text-muted-foreground font-medium">{project.year}</span>
            )}
          </div>
        </div>

        <p className="text-sm text-foreground/75 leading-relaxed mb-3">{project.description}</p>

        {/* Expandable details */}
        {expanded && (
          <div className="mt-3 space-y-2 border-t border-border/50 pt-3">
            {project.details && (
              <ul className="space-y-1">
                {project.details.map((d, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                    <span className="text-primary mt-0.5">→</span>
                    {d}
                  </li>
                ))}
              </ul>
            )}
            {project.problem && (
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/70">Problem: </span>
                {project.problem}
              </p>
            )}
            {project.impact && (
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/70">Impact: </span>
                {project.impact}
              </p>
            )}
            {project.innovation && (
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground/70">Innovation: </span>
                {project.innovation}
              </p>
            )}
            {project.note && (
              <p className="text-xs italic text-muted-foreground">{project.note}</p>
            )}
          </div>
        )}

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.skills.slice(0, expanded ? undefined : 4).map((skill) => (
            <span
              key={skill}
              className="text-xs px-2 py-0.5 rounded font-medium"
              style={{ background: accent, color: "hsl(var(--foreground))" }}
            >
              {skill}
            </span>
          ))}
          {!expanded && project.skills.length > 4 && (
            <span className="text-xs text-muted-foreground px-1">+{project.skills.length - 4} more</span>
          )}
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-4">
          <button className="text-xs text-primary font-medium hover:underline">
            {expanded ? "↑ collapse" : "↓ read more"}
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              GitHub →
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Live →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [tab, setTab] = useState<"all" | "ml" | "product">("all");

  const mlList = mlProjects;
  const productList = productProjects;

  return (
    <div className="min-h-screen relative">
      <FloatingEmojis />
      <Navigation />

      <main className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-6xl mx-auto">

          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Work 🗂️</h1>
            <p className="text-muted-foreground text-lg">
              Built at the intersection of ML and product. Click any card to expand.
            </p>
          </div>

          {/* Tab switcher */}
          <div className="flex gap-2 mb-10">
            {(["all", "ml", "product"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{
                  background: tab === t ? "hsl(var(--primary))" : "hsl(var(--muted))",
                  color: tab === t ? "white" : "hsl(var(--muted-foreground))",
                }}
              >
                {t === "all" ? "All" : t === "ml" ? "ML & Technical" : "Product"}
              </button>
            ))}
          </div>

          {(tab === "all" || tab === "ml") && (
            <section className="mb-14">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                🤖 Machine Learning & Technical
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {mlList.map((project, idx) => (
                  <ProjectCard key={project.title} project={project} idx={idx} />
                ))}
              </div>
            </section>
          )}

          {(tab === "all" || tab === "product") && (
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                📐 Product
              </h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {productList.map((project, idx) => (
                  <ProjectCard key={project.title} project={project} idx={mlList.length + idx} />
                ))}
              </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
};

export default Portfolio;
