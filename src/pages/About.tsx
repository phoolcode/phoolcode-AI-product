import Navigation from "@/components/Navigation";
import WorldMap from "@/components/WorldMap";
import FloatingEmojis from "@/components/FloatingEmojis";

const About = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingEmojis />
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-20">
        <div className="max-w-7xl mx-auto">
          <WorldMap />
        </div>
      </main>
    </div>
  );
};

export default About;
