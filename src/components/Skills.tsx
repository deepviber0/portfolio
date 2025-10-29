import { Code2, Database, Cpu, Palette, Brain, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React Basics"],
      color: "from-primary to-primary-glow",
      borderColor: "border-primary/30 hover:border-primary/60"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "SQL"],
      color: "from-secondary to-purple-500",
      borderColor: "border-secondary/30 hover:border-secondary/60"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Programming",
      skills: ["Python", "Java", "C"],
      color: "from-primary to-secondary",
      borderColor: "border-primary/30 hover:border-secondary/60"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML & AI Agents",
      skills: ["NumPy", "Pandas", "Matplotlib", "Lyzr", "n8n"],
      color: "from-secondary to-pink-500",
      borderColor: "border-secondary/30 hover:border-pink-500/60"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools & Version Control",
      skills: ["Figma", "Tkinter", "VS Code", "GitHub", "Git", "Postman", "PowerBI"],
      color: "from-primary to-cyan-500",
      borderColor: "border-primary/30 hover:border-cyan-500/60"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Soft Skills",
      skills: ["Problem Solving", "Consistent Learning", "Creative Thinking", "Adaptability"],
      color: "from-purple-500 to-secondary",
      borderColor: "border-purple-500/30 hover:border-secondary/60"
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
