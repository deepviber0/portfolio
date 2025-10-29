import { Brain, Workflow, Code2, Sparkles, Zap, Network } from "lucide-react";

const AILab = () => {
  const aiProjects = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Agent Development",
      description: "Building intelligent agents using Lyzr Studio for automated workflows and smart decision-making systems.",
      tech: ["Lyzr Studio", "Python", "AI Agents"],
      status: "Active"
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: "n8n Automation",
      description: "Creating sophisticated automation workflows connecting multiple services and APIs for seamless integrations.",
      tech: ["n8n", "Workflows", "API Integration"],
      status: "Exploring"
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "OpenAI Integration",
      description: "Leveraging GPT models for natural language processing, content generation, and intelligent chatbot development.",
      tech: ["OpenAI API", "GPT-4", "NLP"],
      status: "Active"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "LangChain Projects",
      description: "Building LLM-powered applications with advanced prompt engineering and chain-based reasoning systems.",
      tech: ["LangChain", "Python", "RAG"],
      status: "Learning"
    }
  ];

  return (
    <section id="ai-lab" className="relative py-20 px-6 overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00e5ff12_1px,transparent_1px),linear-gradient(to_bottom,#00e5ff12_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-secondary animate-pulse-glow" />
            <p className="text-sm font-semibold text-secondary uppercase tracking-wider">AI Lab</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
              AI Experiments
            </span>{" "}
            & Innovation
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Exploring the frontiers of artificial intelligence, automation, and machine learning
          </p>
        </div>

        {/* AI Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-up">
          {aiProjects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-md bg-card/40 rounded-2xl p-6 border border-secondary/20 hover:border-secondary/50 shadow-[0_8px_32px_rgba(123,97,255,0.15)] hover:shadow-[0_8px_48px_rgba(123,97,255,0.3)] transition-all duration-500 hover:scale-102 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${
                  project.status === "Active" 
                    ? "bg-primary/10 text-primary border-primary/30" 
                    : project.status === "Exploring"
                    ? "bg-secondary/10 text-secondary border-secondary/30"
                    : "bg-muted text-muted-foreground border-border"
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl flex items-center justify-center mb-4 border border-secondary/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <div className="text-secondary group-hover:text-primary transition-colors">
                  {project.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 py-1 bg-secondary/10 text-secondary rounded-lg text-xs font-medium border border-secondary/20 hover:border-secondary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Terminal-Style AI Simulation */}
        <div className="backdrop-blur-md bg-card/40 rounded-2xl p-6 border border-primary/20 shadow-[0_8px_32px_rgba(0,229,255,0.15)] animate-fade-in-up">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">AI System Status</h3>
          </div>
          <div className="bg-background/50 rounded-xl p-4 font-mono text-sm space-y-2 border border-border">
            <div className="flex items-center gap-2">
              <span className="text-primary">▸</span>
              <span className="text-muted-foreground">Initializing AI neural network...</span>
              <span className="text-primary animate-blink">_</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">✓</span>
              <span className="text-muted-foreground">Loading machine learning models... Complete</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary">▸</span>
              <span className="text-muted-foreground">Running simulations: </span>
              <span className="text-primary font-semibold">1,247 iterations/sec</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-secondary">✓</span>
              <span className="text-muted-foreground">System ready for intelligent tasks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILab;
