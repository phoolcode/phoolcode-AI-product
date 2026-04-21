import { useState } from "react";
import portraitImage from "@/assets/portrait.png";
// ✏️ REPLACE: swap portrait.png with your HP-style painting (cat chariot portrait)
// Place it at src/assets/hp-portrait.png and update the import above

interface EntryScreenProps {
  onEnter: () => void;
}

const EntryScreen = ({ onEnter }: EntryScreenProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => setIsFading(true), 900);
    setTimeout(onEnter, 1400);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #2a1458 0%, #130a2e 55%, #080310 100%)",
        fontFamily: "Georgia, 'Times New Roman', serif",
        opacity: isFading ? 0 : 1,
        transition: "opacity 0.5s ease-out",
        pointerEvents: isFading ? "none" : "auto",
      }}
    >
      {/* Stone wall dots */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(180,140,255,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Atmospheric glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(218,165,32,0.08) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Torches */}
      <div className="absolute text-3xl animate-pulse" style={{ left: "8%", top: "38%" }}>🕯️</div>
      <div className="absolute text-3xl animate-pulse" style={{ right: "8%", top: "38%", animationDelay: "0.7s" }}>🕯️</div>
      <div className="absolute text-2xl animate-pulse" style={{ left: "5%", top: "55%", animationDelay: "0.3s" }}>🕯️</div>
      <div className="absolute text-2xl animate-pulse" style={{ right: "5%", top: "55%", animationDelay: "1s" }}>🕯️</div>

      {/* 3D perspective wrapper */}
      <div style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}>
        {/* Portrait frame — the door */}
        <div
          onClick={handleClick}
          className="select-none group"
          style={{
            cursor: isOpening ? "default" : "pointer",
            transformOrigin: "left center",
            transform: isOpening ? "rotateY(-105deg)" : "rotateY(0deg)",
            transition: "transform 1.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Outer ornate frame */}
          <div
            style={{
              background:
                "linear-gradient(145deg, #5a3a08 0%, #c9962f 18%, #f0c040 35%, #daa520 52%, #c9962f 68%, #8b6914 85%, #5a3a08 100%)",
              padding: "22px",
              borderRadius: "6px",
              boxShadow:
                "0 0 100px rgba(218,165,32,0.35), 0 24px 64px rgba(0,0,0,0.9), inset 0 0 30px rgba(0,0,0,0.5)",
            }}
          >
            {/* Corner ornaments (CSS) */}
            <div
              style={{
                position: "absolute",
                inset: "6px",
                border: "2px solid rgba(255,215,0,0.4)",
                borderRadius: "4px",
                pointerEvents: "none",
              }}
            />

            {/* Inner frame */}
            <div
              style={{
                border: "5px solid #3d2608",
                padding: "4px",
                background: "linear-gradient(145deg, #4a3010, #7a5418, #4a3010)",
              }}
            >
              {/* Portrait */}
              <div
                className="relative overflow-hidden"
                style={{ width: "280px", height: "370px" }}
              >
                <img
                  src={portraitImage}
                  alt="The Witch of West Lafayette"
                  className="w-full h-full object-cover"
                  style={{
                    filter: "sepia(20%) saturate(90%) brightness(0.95)",
                  }}
                />

                {/* Painting overlay — slight canvas texture feel */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,220,100,0.05) 0%, transparent 40%, rgba(100,60,0,0.08) 100%)",
                    mixBlendMode: "multiply",
                  }}
                />

                {/* Hover shimmer when not opening */}
                {!isOpening && (
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 25%, rgba(255,255,255,0.08) 50%, transparent 75%)",
                      transition: "opacity 0.4s ease",
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Nameplate */}
          <div
            style={{
              background: "linear-gradient(145deg, #7a5418 0%, #c9962f 40%, #daa520 60%, #7a5418 100%)",
              textAlign: "center",
              padding: "10px 24px",
              marginTop: "10px",
              borderRadius: "3px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.6)",
            }}
          >
            <p
              style={{
                color: "#1a0a2e",
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "2px",
              }}
            >
              Falguni Mutha
            </p>
            <p style={{ color: "#2d1240", fontSize: "10px", letterSpacing: "2px", fontStyle: "italic" }}>
              Phoolcode ✿ · Witch of West Lafayette
            </p>
          </div>
        </div>
      </div>

      {/* Prompt text */}
      <div
        className="absolute bottom-14 text-center w-full"
        style={{
          color: "rgba(255,215,0,0.55)",
          letterSpacing: "0.35em",
          fontSize: "11px",
          textTransform: "uppercase",
        }}
      >
        <p className={isOpening ? "" : "animate-pulse"}>
          {isOpening ? "the portrait swings open..." : "✦  tap the portrait to enter  ✦"}
        </p>
      </div>

      {/* Floating sparkles */}
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse pointer-events-none"
          style={{
            left: `${[8, 15, 22, 30, 40, 52, 62, 70, 78, 85, 90, 18, 35, 55, 75, 92][i]}%`,
            top: `${[15, 60, 30, 75, 20, 10, 65, 40, 18, 55, 30, 85, 50, 82, 70, 45][i]}%`,
            width: `${i % 3 === 0 ? 3 : 2}px`,
            height: `${i % 3 === 0 ? 3 : 2}px`,
            background: "#ffd700",
            borderRadius: "50%",
            opacity: 0.3 + (i % 4) * 0.1,
            animationDelay: `${(i * 0.4) % 3}s`,
            animationDuration: `${1.5 + (i % 3)}s`,
          }}
        />
      ))}
    </div>
  );
};

export default EntryScreen;
