import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import FloatingEmojis from "@/components/FloatingEmojis";
import { title } from "process";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  
  const projects = {
    product: [
      {
        title: "Amazon Subscribe and Save - UX redesign",
        description: "Conducted comprehensive UX audit of Amazon's Subscribe & Save program (currently at 10% adoption). Identified three user segments based on subscription intent, mapped critical drop-off points across the purchase journey, and designed solutions to increase discoverability and conversion.",
        tags: ["User Research", "Journey Mapping", "UX/UI Design", "A/B Testing Strategy", "Behavioral Segmentation", "RICE Framework"],
        image: "🛒",
      },
      {
        title: "System Design Whiteboard Tool ",
        description: "A drag-and-drop whiteboard specifically built for system design interviews and architecture planning. Includes a built-in repository of all major MLOps and DevOps tools with their functionalities. Drag components, connect them, and see real-time pros/cons analysis. Problem Solved: Current tools (Excalidraw, Lucidchart) aren't built for system design specifically. This one knows what a load balancer does and can tell you why you probably don't need Kafka.",
        tags: ["Product Design", "UX Research", "Frontend Development", "React"],
        image: "🧑‍💻",
      },
      {
        title: "GPT Text Scanner Chrome Extension (In Development)",
        description: "Building a chrome extension that eliminates the tab-switching hell of using ChatGPT. Highlight any text on any webpage, scan it, and GPT opens in a small overlay window—no copy-paste, no context switching. Features include text improvement, summarization, and tone adjustment.Problem Solved: Current workflow requires opening ChatGPT in new tab → copy text → paste → switch back. This makes it seamless.",
        tags: ["Chrome Extension Development", "API Integration", "UX Design", "JavaScript"],
        image: "📻",
      },
      {
        title: "Math Equation mood visulizer",
        description: "An experimental tool that converts math equations and symbols into visual art based on emotional association. Upload your photo, select an equation (plus signs feel structured, integrals feel flowy), and generate a visual representation of how math makes you feel. Is it useful? Unclear. Is it cool? Absolutely.",
        tags: ["Generative Art", "Image Processing", "Creative Tech", "Python"],
        image: "📐",
      },
      {
        title: "AI Teacher with Personality",
        description: "Creating AI tutors that don't just teach—they have distinct personalities and evoke genuine emotion. The system learns your learning style and adapts both content and delivery. Because learning calculus from a robot that gets genuinely excited about derivatives hits different than one that just recites formulas. Innovation: Personalized pedagogy that adapts to individual learning patterns while maintaining consistent character traits.",
        tags: ["LLM Prompting","EdTech"],
        image: "👩‍🏫",
      }
    ],
    ml: [
      {
        title: "Caterpillar MCP Server (In Progress)",
        description: "Building an MCP (Model Context Protocol) server using Llama to generate intelligent dashboards from Caterpillar's proprietary heavy machinery track data. Creating a natural language interface for engineers to query and visualize complex equipment performance metrics without writing SQL.",
        tags: ["Llama", "Data Visualization", "Folium", "MCP", "FastAPI", "Javascript"],
        image: "🚜",
      },
      {
        title: "Hyperspectral Image Classification",
        description: "Worked with the Indian Pines dataset to classify land cover using 3D CNNs and ensemble learning. Combined spatial and spectral features to identify crop types from satellite imagery—turns out multiple dimensions make classification significantly more accurate. Implemented dimensionality reduction techniques and tested various ensemble methods to optimize performance.",
        tags: ["3D CNNs", "Ensemble Learning", "Hyperspectral Analysis", "Dimensionality Reduction", "TensorFlow"],
        image: "🌾",
      },
      {
        title: "Indian Sign Language Recognition",
        description: "Built a complete pipeline for recognizing Indian Sign Language gestures. Started with Canny edge detection and SIFT feature extraction, moved to visual bag of words model, then implemented CNNs for real-time classification. Created a system that actually works for accessibility—which matters more than the tech stack.",
        tags: ["Computer Vision", "CNNs", "Feature Extraction (SIFT)", "Canny Edge Detection", "Visual Bag of Words, OpenCV"],
        image: "🤟",
      },
      {
        title: "Personal Portfolio Manager AI",
        description: "An AI-powered investment portfolio manager that tracks stocks and provides intelligent rebalancing recommendations. Built because manually tracking portfolios is tedious, and I wanted something smarter than spreadsheets. Uses ML models to analyze market trends and suggest optimal allocation strategies.",
        tags: ["Streamlit", "GPT-4", "API integration"],
        image: "📰",
      },
      {
        title: "Smart Insulin Pump System",
        description: "Designed an IoT-based insulin delivery system that adapts to real-time glucose monitoring. The pump adjusts dosage automatically based on continuous glucose data, reducing the burden on patients managing diabetes. Healthcare + engineering at its most practical.",
        tags: ["IoT, Embedded Systems", "Healthcare Tech", "Real-time Data Processing", "Arduino/Raspberry Pi"],
        image: "💉",
      },
      {
        title: "Mini Multi-Agent Workflow Manager",
        description: "Created a lightweight flexible agent manager for orchestrating multiple AI agents. Basically air traffic control for chatbots—handles naming, routing, and coordination between different AI agents in complex workflows. Makes multi-agent systems less chaotic.",
        tags: ["Agent Orchestration", "LLM Integration"],
        image: "🤖",
      }
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
    <div className="min-h-screen relative">
      <FloatingEmojis />
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
                      className="p-6 hover-lift bg-card border-2 border-border overflow-hidden relative group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
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

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl flex items-center gap-3">
              <span className="text-4xl">{selectedProject?.image}</span>
              {selectedProject?.title}
            </DialogTitle>
            <DialogDescription className="text-lg pt-4">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-primary mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="font-medium">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Portfolio;
