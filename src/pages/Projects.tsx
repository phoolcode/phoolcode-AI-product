import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const mlProjects = [
    {
      title: "Hyperspectral Image Classification",
      description: "Worked with the Indian Pines dataset to classify land cover using 3D CNNs and ensemble learning. Combined spatial and spectral features to identify crop types from satellite imagery—turns out multiple dimensions make classification significantly more accurate. Implemented dimensionality reduction techniques and tested various ensemble methods to optimize performance.",
      skills: ["3D CNNs", "Ensemble Learning", "Hyperspectral Analysis", "Dimensionality Reduction", "TensorFlow"]
    },
    {
      title: "Indian Sign Language Recognition",
      description: "Built a complete pipeline for recognizing Indian Sign Language gestures. Started with Canny edge detection and SIFT feature extraction, moved to visual bag of words model, then implemented CNNs for real-time classification. Created a system that actually works for accessibility—which matters more than the tech stack.",
      skills: ["Computer Vision", "CNNs", "Feature Extraction (SIFT)", "Canny Edge Detection", "Visual Bag of Words", "OpenCV"]
    },
    {
      title: "Personal Portfolio Manager AI",
      description: "An AI-powered investment portfolio manager that tracks stocks and provides intelligent rebalancing recommendations. Built because manually tracking portfolios is tedious, and I wanted something smarter than spreadsheets. Uses ML models to analyze market trends and suggest optimal allocation strategies.",
      skills: ["Financial Modeling", "API Integration", "Data Analysis", "Portfolio Optimization", "Python"],
      github: "https://github.com/phoolcode"
    },
    {
      title: "Smart Insulin Pump System",
      description: "Designed an IoT-based insulin delivery system that adapts to real-time glucose monitoring. The pump adjusts dosage automatically based on continuous glucose data, reducing the burden on patients managing diabetes. Healthcare + engineering at its most practical.",
      skills: ["IoT", "Embedded Systems", "Healthcare Tech", "Real-time Data Processing", "Arduino/Raspberry Pi"],
      github: "https://github.com/phoolcode"
    },
    {
      title: "Mini Mahilo - Multi-Agent Workflow Manager",
      description: "Created a lightweight flexible agent manager for orchestrating multiple AI agents. Basically air traffic control for chatbots—handles naming, routing, and coordination between different AI agents in complex workflows. Makes multi-agent systems less chaotic.",
      skills: ["Agent Orchestration", "LLM Integration", "Workflow Management", "Python", "System Architecture"],
      github: "https://github.com/phoolcode"
    },
    {
      title: "Caterpillar MCP Server",
      description: "Building an MCP (Model Context Protocol) server using Llama to generate intelligent dashboards from Caterpillar's proprietary heavy machinery track data. Creating a natural language interface for engineers to query and visualize complex equipment performance metrics without writing SQL.",
      skills: ["LLMs (Llama)", "Data Visualization", "Dashboard Design", "Large-scale Data Processing", "MCP Architecture"],
      inProgress: true
    }
  ];

  const productProjects = [
    {
      title: "Amazon Subscribe & Save - UX Redesign",
      description: "Conducted comprehensive UX audit of Amazon's Subscribe & Save program (currently at 10% adoption). Identified three user segments based on subscription intent, mapped critical drop-off points across the purchase journey, and designed solutions to increase discoverability and conversion.",
      details: [
        "Smart bundling to unlock 10% multi-item discount",
        "Personalized homepage nudges based on purchase behavior",
        "Improved PLP/PDP visibility with interactive UI elements",
        "Cart-level subscription upsells and clear differentiation",
        "Cross-platform reminders via push notifications & WhatsApp"
      ],
      impact: "Used RICE framework to prioritize initiatives. Proposed solutions targeting discoverability (badges, highlights), checkout friction (one-click switches), and retention (personalized restock reminders).",
      skills: ["User Research", "Journey Mapping", "UX/UI Design", "A/B Testing Strategy", "Behavioral Segmentation", "RICE Framework"]
    },
    {
      title: "GPT Text Scanner Chrome Extension",
      description: "Building a chrome extension that eliminates the tab-switching hell of using ChatGPT. Highlight any text on any webpage, scan it, and GPT opens in a small overlay window—no copy-paste, no context switching. Features include text improvement, summarization, and tone adjustment.",
      problem: "Current workflow requires opening ChatGPT in new tab → copy text → paste → switch back. This makes it seamless.",
      skills: ["Chrome Extension Development", "API Integration", "UX Design", "JavaScript"],
      inProgress: true
    },
    {
      title: "Math Equation Mood Visualizer",
      description: "An experimental tool that converts math equations and symbols into visual art based on emotional association. Upload your photo, select an equation (plus signs feel structured, integrals feel flowy), and generate a visual representation of how math makes you feel.",
      note: "Is it useful? Unclear. Is it cool? Absolutely.",
      skills: ["Generative Art", "Image Processing", "Creative Tech", "Python"],
      concept: true
    },
    {
      title: "AI Teacher with Personality",
      description: "Creating AI tutors that don't just teach—they have distinct personalities and evoke genuine emotion. The system learns your learning style and adapts both content and delivery. Because learning calculus from a robot that gets genuinely excited about derivatives hits different than one that just recites formulas.",
      innovation: "Personalized pedagogy that adapts to individual learning patterns while maintaining consistent character traits.",
      skills: ["LLM Fine-tuning", "Adaptive Learning Systems", "Personality Modeling", "EdTech"]
    },
    {
      title: "System Design Whiteboard Tool",
      description: "A drag-and-drop whiteboard specifically built for system design interviews and architecture planning. Includes a built-in repository of all major MLOps and DevOps tools with their functionalities. Drag components, connect them, and see real-time pros/cons analysis.",
      problem: "Current tools (Excalidraw, Lucidchart) aren't built for system design specifically. This one knows what a load balancer does and can tell you why you probably don't need Kafka.",
      skills: ["System Architecture", "Tool Knowledge (MLOps/DevOps)", "Interactive Diagramming", "Product Design"],
      concept: true
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building at the intersection of machine learning and product. Here's proof I actually ship things.
            </p>
          </div>

          {/* ML Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Machine Learning & Technical Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {mlProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.inProgress && (
                        <Badge variant="secondary" className="ml-2">In Progress</Badge>
                      )}
                      {project.github && (
                        <Button variant="ghost" size="icon" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-4 text-foreground/80">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Product Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-foreground mb-8">Product Projects</h2>
            <div className="space-y-6">
              {productProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      <div className="flex gap-2">
                        {project.inProgress && (
                          <Badge variant="secondary">In Development</Badge>
                        )}
                        {project.concept && (
                          <Badge variant="outline">Concept</Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base text-foreground/80">
                      {project.description}
                    </CardDescription>
                    
                    {project.details && (
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Key Solutions:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {project.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.impact && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Impact Focus:</span> {project.impact}
                      </p>
                    )}
                    
                    {project.problem && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Problem Solved:</span> {project.problem}
                      </p>
                    )}
                    
                    {project.innovation && (
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Innovation:</span> {project.innovation}
                      </p>
                    )}
                    
                    {project.note && (
                      <p className="text-sm italic text-muted-foreground">{project.note}</p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Closing Statement */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">What This All Means</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                I build things that exist at the intersection of machine learning engineering and product thinking. 
                The ML projects show I can actually code and understand algorithms. The product projects show I think 
                about users, problems, and business impact—not just features.
              </p>
              <p className="text-foreground font-medium mt-4">
                If you're hiring an AI-native PM or ML engineer who thinks like a product person, these are my receipts.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Projects;
