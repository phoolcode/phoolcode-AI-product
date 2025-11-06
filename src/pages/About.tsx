import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-12 text-center">
            About Me
          </h1>

          {/* Scroll/Parchment style card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-amber-50 to-yellow-50 border-4 border-amber-200 shadow-xl relative overflow-hidden">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-amber-400 rounded-tl-3xl" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-amber-400 rounded-tr-3xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-amber-400 rounded-bl-3xl" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-amber-400 rounded-br-3xl" />

            <div className="relative z-10 space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-amber-900 mb-2">
                  My Journey 🗺️
                </h2>
                <p className="text-amber-700 italic">
                  "I turned my college name 'spanning-engineering' into a personality trait"
                </p>
              </div>

              <div className="space-y-4 text-amber-900">
                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">From Machine Learning to Product:</strong> I'm on an exciting journey transitioning from the technical depths of ML engineering to the strategic world of AI product management. Why? Because I believe the best products are built by people who understand both the technology and the user.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Problem Solver at Heart:</strong> Whether it's debugging code, designing user experiences, or figuring out why my cat is staring at the wall at 3 AM, I love solving puzzles. Each challenge is a new adventure!
                </p>

                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Aspiring Polymath:</strong> Jack of all trades, master of... well, I'm working on it! From coding to strategy, from AI to product design, I embrace the joy of learning everything.
                </p>

                <p className="text-lg leading-relaxed">
                  <strong className="text-primary">Animal Companion:</strong> My cats are my rubber ducks for debugging. They're excellent listeners and their judgment-free stares help me think through problems. Plus, they're adorable.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t-2 border-amber-300">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 text-center">
                  Skills & Interests
                </h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {["Machine Learning", "Product Management", "Python", "Problem Solving", "AI/ML", "Strategy", "User Experience", "Cat Whispering", "Continuous Learning"].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-accent text-accent-foreground rounded-full font-medium shadow-md hover:scale-105 transition-transform"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default About;
