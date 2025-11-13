import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const CV = () => {
  const experience = [
    {
      title: "Machine Learning Engineer – II (Product Development)",
      company: "Athenahealth",
      location: "Bangalore, India",
      period: "Dec 2023 – July 2025",
      description: [
        "Drove 0→1 launch of AI document labelling across athenahealth's client base and led 15-person cross-functional team saving 70K+ hrs/month and 82% user adoption rate, to ship automated clinical coding that reduced 8-min manual labelling process to <30 seconds.",
        "Authored PRDs and led GTM strategy by designing product demos for 200+ Thrive Conference attendees and C-suite, generating 12 qualified pilot leads and securing exec approval to accelerate Q3 roadmap to Q1 launch.",
        "Achieved $1.5M in cost savings by resolving CRM issues, deploying 4 custom ML solutions, and building evaluation pipelines that improved automation by 3% across 500K+ daily documents.",
        "Liaised with UI/UX teams on A/B testing to validate usability improvements, increasing provider satisfaction and accelerating model adoption by analysing large-scale unstructured data.",
      ],
    },
    {
      title: "Machine Learning Engineer",
      company: "Athenahealth",
      location: "Bangalore, India",
      period: "July 2022 – Nov 2023",
      description: [
        "Transformed team efficiency by 80% by restructuring Data Science support into agile framework as Scrum Master for 7 engineers, slashing client ticket resolution time and boosting cross-functional velocity.",
        "Architected the company's first GenAI feature by reframing the business problem into a valuable product, optimizing cost through token reduction (GPT/Claude/LLaMA), and building a scalable platform for future deployments.",
        "Shaped product roadmap through user-centered discovery by identifying critical UX bottlenecks via exploratory data analysis and focus groups, reducing label taxonomy from 44K+ to 250 categories, and launching highest rated feature.",
        "Optimized client ticket resolution by analysing backlog patterns, creating self-service documentation, developing tool for document history retrieval, and training QA teams, reducing product backlog and improving cross-team efficiency.",
      ],
    },
    {
      title: "Product Management Intern",
      company: "MakeShift Education",
      location: "Pune, India",
      period: "Jan 2022 – April 2022",
      description: [
        "Designed scalable product and market strategy for institutional education programs in non-STEM colleges, identifying underserved market segment and creating product-market fit by extensive competitor analysis.",
        "Executed successful GTM strategy by collaborating with Marketing, Sales, and Pre-Sales teams to launch new product lines, achieving 15x increase in user adoption and 65% profit growth.",
      ],
    },
    {
      title: "Deep Learning Research Assistant",
      company: "Indian Institute of Technology – Delhi",
      location: "Delhi, India",
      period: "Jun 2021 – Aug 2021",
      description: [
        "Engineered 3D CNN for hyperspectral image classification on IndianPines dataset achieving 97% accuracy across 20 classes using spectral-spatial feature extraction.",
        "Benchmarked lightweight vs deep architectures demonstrating performance gap (43% vs 97%) for complex multi-band remote sensing data.",
      ],
    },
  ];

  const education = [
    {
      school: "Purdue University",
      location: "West Lafayette, IN",
      degree: "Master of Engineering Management",
      gpa: "4.0/4.0",
      period: "Aug 2025 – May 2027",
      details: [
        "Coursework: Technical Product Management, Student Consultant – Caterpillar LLM analyser, Pro-Bono Product Consultant -Bayer, Student Managed Venture Fund, Human factors in Engineering.",
        "VP – Product Management Club | Lead Project Manager – 180 Degrees Consulting.",
        "Teaching Assistant – Project Manager for ML-led Drug Discovery.",
      ],
    },
    {
      school: "Cummins College of Engineering",
      location: "Pune, India",
      degree: "Bachelor of Electronics and Telecommunications Engineering",
      period: "Aug 2018 – May 2022",
      details: [
        "Relevant Coursework: Big Data Analytics, New Product Development, Design Thinking, Advance Mathematics, NLP.",
      ],
    },
  ];

  const skills = {
    technical: ["Python", "SQL", "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Hugging Face", "LangChain", "Streamlit", "Git", "AWS", "Databricks", "Apache Airflow", "Tableau", "Figma", "Postman", "JIRA"],
    product: ["Roadmapping & Strategy", "User Research & Discovery", "A/B Testing & Experimentation", "Product Analytics (Google Analytics, Mixpanel)", "Cross-functional Leadership", "GTM Strategy", "Agile & Scrum"],
    certifications: ["Google Analytics Certified", "Enterprise Design Thinking Practitioner – IBM SkillBuild"],
  };

  const achievements = [
    "Recognized by leadership by receiving \"Standing Ovation\" Award from CTO for reducing provider burnout.",
    "1 of 10 nation-wide Awardee of Avery Dennison InvEnt Scholarship for creating invention.",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-primary mb-4">
              Falguni Mutha
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              AI Product Engineer | Machine Learning Engineer
            </p>
            <p className="text-muted-foreground">
              fmutha@purdue.edu | +1 (765)-543-4276
            </p>
          </div>

          {/* Summary */}
          <Card className="p-8 mb-8 bg-card">
            <p className="text-lg text-foreground leading-relaxed">
              AI Product Engineer with 3+ years driving data-driven decision making and AI solutions from concept to launch. Delivered $1.5M in savings and 70K+ monthly productivity hours by turning ML research into scalable healthcare products. Currently pursuing Master's in Engineering Management. Seeking internship/Co-op roles starting January 2026.
            </p>
          </Card>

          {/* Education */}
          <Card className="p-8 mb-8 bg-card">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <span>🎓</span> Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx}>
                  {idx > 0 && <Separator className="my-6" />}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {edu.school}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {edu.degree}
                        </p>
                        {edu.gpa && (
                          <p className="text-muted-foreground">GPA: {edu.gpa}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{edu.period}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.location}
                        </p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="leading-relaxed">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>

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
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">{exp.period}</Badge>
                        <p className="text-sm text-muted-foreground mt-1">
                          {exp.location}
                        </p>
                      </div>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="leading-relaxed">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 mb-8 bg-card">
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
                  Product & Business Skills
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
                  Certifications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="text-sm py-1">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-8 bg-card">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-2">
              <span>🏆</span> Achievements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="leading-relaxed">{achievement}</li>
              ))}
            </ul>
          </Card>

          {/* Download CTA */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Want the full PDF version?
            </p>
            <a
              href="/Falguni_Mutha_CV.pdf"
              download="Falguni_Mutha_CV.pdf"
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
