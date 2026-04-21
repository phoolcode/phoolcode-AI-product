import { useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import portraitImage from "@/assets/portrait.png";
import FloatingEmojis from "@/components/FloatingEmojis";
import RotatingText from "@/components/RotatingText";

// ✏️ AUDIO: drop your singing file at public/audio/winner.mp3 and it will auto-play on portrait click

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePortraitClick = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      <FloatingEmojis />
      <Navigation />

      {/* Hidden audio player — ✏️ replace /audio/winner.mp3 with your file */}
      <audio
        ref={audioRef}
        src="/audio/winner.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      <main className="container mx-auto px-6 pt-28 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">

          {/* Portrait — oval shape, click to play */}
          <div className="relative group flex-shrink-0">
            <div
              onClick={handlePortraitClick}
              className="relative overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105"
              style={{
                width: "220px",
                height: "300px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "4px solid hsl(var(--primary) / 0.25)",
              }}
            >
              <img
                src={portraitImage}
                alt="Falguni"
                className="w-full h-full object-cover"
              />
              {/* Play indicator */}
              <div
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                style={{ opacity: isPlaying ? 1 : 0, background: "rgba(0,0,0,0.25)" }}
              >
                <span className="text-4xl">🎵</span>
              </div>
              {/* Hover hint */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-xs font-medium text-white bg-black/40 px-3 py-1 rounded-full">
                    click me ♪
                  </span>
                </div>
              )}
            </div>
            {/* Soft glow under photo */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-primary/15 rounded-full blur-xl" />
          </div>

          {/* Hero text */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-3">
              Hi! It's{" "}
              <span className="inline-flex items-center gap-2">
                <span className="text-4xl md:text-5xl">👋</span>
                <span className="text-primary">Falguni</span>
              </span>
            </h1>

            <RotatingText />

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mt-6">
              <a
                href="mailto:fmutha@purdue.edu"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors text-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                Send Message
              </a>
              <a
                href="https://www.linkedin.com/in/falguni-mutha"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a
                href="https://github.com/phoolcode"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a
                href="https://www.instagram.com/falguni.the.phool/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://medium.com/@isha.mutha003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                aria-label="Medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
