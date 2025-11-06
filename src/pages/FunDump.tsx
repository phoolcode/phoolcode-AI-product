import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const FunDump = () => {
  const hobbies = [
    {
      title: "Cat Monstrosity",
      emoji: "🐱",
      description: "My cats are my world. They're chaotic, adorable, and excellent debugging partners.",
      fact: "Did you know cats spend 70% of their lives sleeping? Mine spend 70% judging me.",
    },
    {
      title: "Yarn Barn",
      emoji: "🧶",
      description: "Knitting and crocheting are my zen activities. There's something therapeutic about turning yarn into cozy things.",
      fact: "I have more yarn than I could use in a lifetime, but I still buy more. It's a problem.",
    },
    {
      title: "Coffee Connoisseur",
      emoji: "☕",
      description: "I take my coffee seriously. Too seriously, according to my friends.",
      fact: "I've spent more on coffee equipment than on my first laptop.",
    },
    {
      title: "Plant Parent",
      emoji: "🌱",
      description: "Trying to keep plants alive while managing a tech career. Success rate: 60%.",
      fact: "My cats have eaten more plants than have died naturally.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Fun Dump
            </h1>
            <p className="text-xl text-muted-foreground">
              The non-technical side of me (spoiler: it's chaotic) 🎨
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {hobbies.map((hobby, idx) => (
              <Card
                key={idx}
                className="p-6 hover-lift bg-gradient-to-br from-card to-muted border-2"
              >
                <div className="text-6xl mb-4">{hobby.emoji}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">
                  {hobby.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {hobby.description}
                </p>
                <div className="p-4 bg-accent/20 rounded-lg border-2 border-accent/30">
                  <p className="text-sm italic text-foreground">
                    💡 Fun fact: {hobby.fact}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Cat gallery section */}
          <Card className="p-8 bg-gradient-to-br from-purple-100 to-pink-100 border-4 border-purple-200">
            <h2 className="text-3xl font-bold text-center text-primary mb-6">
              Meet My Feline Overlords 👑
            </h2>
            <div className="text-center space-y-4">
              <p className="text-lg text-muted-foreground">
                Gallery coming soon! Until then, imagine the cutest cats you've ever seen. Now multiply that by 10. That's them.
              </p>
              <div className="flex justify-center gap-4 text-5xl">
                <span className="animate-bounce" style={{ animationDelay: "0s" }}>🐱</span>
                <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>😺</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>😸</span>
                <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>😻</span>
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FunDump;
