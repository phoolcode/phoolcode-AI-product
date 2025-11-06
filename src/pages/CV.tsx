import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CV = () => {
  const experience = [
    {
      title: "AI Product Manager",
      company: "TechCorp",
      period: "2024 - Present",
      description: "Leading AI product strategy and development, bridging technical and business needs.",
    },
    {
      title: "Machine Learning Engineer",
      company: "DataWorks",
      period: "2022 - 2024",
      description: "Built and deployed ML models for production systems, focusing on NLP and computer vision.",
    },
    {
      title: "Software Engineer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Full-stack development with focus on Python backends and React frontends.",
    },
  ];

  const skills = {
    technical: ["Python", "TensorFlow", "PyTorch", "React", "TypeScript", "SQL", "Docker"],
    product: ["Product Strategy", "User Research", "Roadmapping", "A/B Testing", "Analytics"],
    soft: ["Problem Solving", "Communication", "Leadership", "Adaptability", "Curiosity"],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Curriculum Vitae
            </h1>
            <p className="text-xl text-muted-foreground">
              My professional journey at a glance
            </p>
          </div>

          {/* Experience */}
          <Card className="p-8 mb-8 bg-card">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <span>💼</span> Experience
            </h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx}>
                  {idx > 0 && <Separator className="my-6" />}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <Badge variant="secondary">{exp.period}</Badge>
                    </div>
                    <p className="text-lg text-primary font-semibold">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 bg-card">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <span>🎯</span> Skills
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Product Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.product.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-sm py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Download CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Want the full PDF version?
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors shadow-md"
            >
              <span>📄</span> Download Full CV
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;
