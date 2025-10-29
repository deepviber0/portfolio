import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "MockMate AI Agent",
      description: "AI-powered mock interview preparation tool to help candidates practice and improve their interview skills.",
      tags: ["AI", "Python", "Agent Development"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "EV Recharge Bunk Info System",
      description: "Web application displaying electric vehicle recharge bunk information and available slot details for easy access.",
      tags: ["Web Dev", "JavaScript", "UI/UX"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Calculator",
      description: "Simple and interactive web calculator with clean interface and essential mathematical operations.",
      tags: ["HTML", "CSS", "JavaScript"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Expense Tracker",
      description: "Personal finance management tool to track expenses, categorize spending, and visualize financial data.",
      tags: ["Web Dev", "JavaScript", "Data Viz"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Weather Checker",
      description: "Real-time weather information tool providing current conditions and forecasts for any location.",
      tags: ["API", "JavaScript", "Weather API"],
      gradient: "from-primary to-primary-glow"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl overflow-hidden shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
