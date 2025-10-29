import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "MockMate AI Agent",
      description:
        "AI-powered mock interview preparation tool to help candidates practice and improve their interview skills.",
      tags: ["AI", "Python", "Agent Development"],
      gradient: "from-blue-500 to-cyan-500",
      url: "https://www.linkedin.com/posts/deepviber03shaikumar_ai-interviewcoach-mockmate-activity-7300220324535541760-2rJU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFEcbpgBfCYl_P_RnDYzAtfIwFoLJ3Hrg8k",
    },
    {
      title: "EVision Drive",
      description:
        "Web application displaying electric vehicle recharge bunk information and available slot details for easy access and booking.",
      tags: ["Web Dev", "JavaScript", "UI/UX"],
      gradient: "from-green-500 to-emerald-500",
      url: "https://sprintsquad0.github.io/EVisionDrive/Client/index.html",
    },
    {
      title: "Expense Tracker",
      description:
        "Personal finance management tool to track expenses, categorize spending, and visualize financial data.",
      tags: ["Web Dev", "JavaScript", "Data Viz"],
      gradient: "from-orange-500 to-red-500",
      url: "https://deepviber0.github.io/ExpenseTracker/",
    },
    {
      title: "Weather Checker",
      description:
        "Real-time weather information tool providing current conditions and forecasts for any location.",
      tags: ["API", "JavaScript", "Weather API"],
      gradient: "from-primary to-primary-glow",
      url: "https://deepviber0.github.io/UnifiedMentor/Basic/Task2/",
    },
    {
      title: "LinkedIn GhostWriter AI",
      description:
        "Smart AI agent that automates LinkedIn post creation with tone-based content generation and workflow automation via n8n.",
      tags: ["Automation", "RESTful API", "n8n"],
      gradient: "from-primary to-primary-glow",
      url: "https://drive.google.com/file/d/1KrWzbr8Rz8Ff1Zf1utGFC4ev2ktIM2gF/view?usp=drivesdk",
    },
    {
      title: "AI Personal Assistant",
      description:
        "An AI-powered workflow assistant that checks your Google Calendar, analyzes weather for each event’s location, and sends you a personalized daily email with smart recommendations — all fully automated with n8n and OpenAI.",
      tags: ["AI", "Automation", "n8n", "OpenAI", "APIs"],
      gradient: "from-cyan-500 to-blue-600",
      url: "https://www.linkedin.com/posts/deepviber03shaikumar_ai-automation-n8n-activity-7339214433547616257-hr7-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEcbpgBfCYl_P_RnDYzAtfIwFoLJ3Hrg8k",
    },
    {
      title: "Spam/Ham Classifier",
      description:
        "An AI-based email classification system that detects and categorizes messages as spam or legitimate (ham) using NLP and machine learning techniques.",
      tags: ["AI", "Machine Learning", "NLP", "Text Classification"],
      gradient: "from-purple-500 to-pink-500",
      url: "https://www.linkedin.com/posts/deepviber03shaikumar_machinelearning-nlp-spamdetection-activity-7325134776279941121-dYhG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEcbpgBfCYl_P_RnDYzAtfIwFoLJ3Hrg8k",
    },
    {
      title: "Power BI Dashboard for Food Orders Data",
      description:
        "An interactive Power BI dashboard analyzing monthly sales (Jan–Apr) with radio button filters to explore top-performing months, best-selling dishes, customer segments (Gold vs Regular), and preferred payment modes (COD vs UPI).",
      tags: ["Data Visualization", "Power BI", "Analytics", "Dashboard"],
      gradient: "from-yellow-500 to-orange-500",
      url: "https://www.linkedin.com/posts/deepviber03shaikumar_powerbi-interactivedashboard-learningjourney-activity-7389334324380323841-h65M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFEcbpgBfCYl_P_RnDYzAtfIwFoLJ3Hrg8k",
    },



  ];

  return (
    <section id="projects" className="relative py-20 px-6 overflow-hidden">
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

                {/* Dynamic Button with project URL */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </a>
              </div>

            </div>

          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
