import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import portraitImage from "@/assets/portrait.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Portrait with shadow */}
          <div className="relative group">
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white group-hover:scale-105 transition-transform duration-500">
              <img
                src={portraitImage}
                alt="Falouni portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary/10 rounded-full blur-xl" />
          </div>

          {/* Hero text */}
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi! It's{" "}
              <span className="inline-flex items-center gap-2">
                <span className="text-4xl md:text-5xl">👋</span>
                <span className="text-primary">Falouni</span>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Aspiring Polymath, Problem Solver, Machine Learning Engineer, Product Manager, Animal Companion
            </p>

            <Button variant="y2k" size="lg" className="text-base px-8">
              Contact
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="fixed top-1/4 left-10 text-6xl animate-bounce opacity-30 pointer-events-none hidden lg:block">
          ✨
        </div>
        <div className="fixed bottom-1/4 right-10 text-5xl animate-bounce opacity-30 pointer-events-none hidden lg:block" style={{ animationDelay: "0.5s" }}>
          💫
        </div>
      </main>
    </div>
  );
};

export default Home;
