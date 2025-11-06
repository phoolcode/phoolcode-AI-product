import Navigation from "@/components/Navigation";
import WorldMap from "@/components/WorldMap";
import FloatingEmojis from "@/components/FloatingEmojis";

const About = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingEmojis />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-4 text-center">
            My Journey Around the World 🌍
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center">
            Click on the markers to explore my adventure from ML to Product!
          </p>

          <WorldMap />
        </div>
      </main>
    </div>
  );
};

export default About;
