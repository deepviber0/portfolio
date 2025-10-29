import { Code2, Brain, Palette, Lightbulb } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Programming",
      skills: ["Java", "Python", "C"],
      color: "from-primary to-primary-glow"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Currently Learning",
      skills: ["MongoDB", "Express.js", "React", "Node.js"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design & Tools",
      skills: ["Tkinter", "Figma"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Data",
      skills: ["NumPy", "Pandas", "AI Agents"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Soft Skills",
      skills: ["Consistency", "Problem Solving", "Positive Thinking", "Continuous Learning"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-background">
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
