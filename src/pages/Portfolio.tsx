import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Portfolio = () => {
  const projects = {
    product: [
      {
        title: "Money Manager AI",
        description: "I made this as a personal finance assistant that can import, categorize, and analyze expenses using LLM technology.",
        tags: ["LLM", "MCP", "Python"],
        image: "💰",
      },
      {
        title: "Radio-driver",
        description: "A personal finance assistant that can import transactions and provide insights using AI.",
        tags: ["LLM", "MCP", "Python"],
        image: "📻",
      },
    ],
    ml: [
      {
        title: "Sentiment Analysis Engine",
        description: "Built a custom NLP model for real-time sentiment analysis across multiple languages.",
        tags: ["NLP", "TensorFlow", "Python"],
        image: "🤖",
      },
      {
        title: "Predictive Analytics Dashboard",
        description: "Created ML-powered forecasting tool for business intelligence.",
        tags: ["ML", "Data Science", "Visualization"],
        image: "📊",
      },
    ],
    strategy: [
      {
        title: "Product Roadmap Framework",
        description: "Developed strategic framework for prioritizing AI features based on user impact and technical feasibility.",
        tags: ["Strategy", "Product", "Planning"],
        image: "🎯",
      },
      {
        title: "User Research Initiative",
        description: "Led comprehensive user research to identify pain points in ML product adoption.",
        tags: ["Research", "UX", "Strategy"],
        image: "🔍",
      },
    ],
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-primary mb-4 text-center">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            A collection of my work in Product design, Strategy, Machine Learning and coding, and more. Each project represents a unique challenge and solution.
          </p>

          <Tabs defaultValue="product" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="ml">Machine Learning</TabsTrigger>
              <TabsTrigger value="strategy">Strategy</TabsTrigger>
            </TabsList>

            {Object.entries(projects).map(([category, items]) => (
              <TabsContent key={category} value={category} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((project, idx) => (
                    <Card
                      key={idx}
                      className="p-6 hover-lift bg-card border-2 border-border overflow-hidden relative group"
                    >
                      {/* Background emoji */}
                      <div className="absolute -right-8 -top-8 text-8xl opacity-10 group-hover:scale-110 transition-transform">
                        {project.image}
                      </div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="text-5xl">{project.image}</div>
                          <div className="flex-1">
                            <Badge variant="secondary" className="mb-2">
                              {category.toUpperCase()}
                            </Badge>
                            <h3 className="text-2xl font-bold text-primary mb-2">
                              {project.title}
                            </h3>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="font-medium">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
