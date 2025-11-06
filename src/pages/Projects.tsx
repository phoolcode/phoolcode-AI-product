import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Detailed project showcase coming soon! 🚀
          </p>

          <Card className="p-12 bg-gradient-to-br from-card to-muted">
            <div className="text-8xl mb-6">🏗️</div>
            <h2 className="text-3xl font-bold mb-4">Under Construction</h2>
            <p className="text-muted-foreground text-lg">
              I'm currently curating my best work to share with you. Check back soon for detailed case studies, code samples, and project breakdowns!
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Projects;
