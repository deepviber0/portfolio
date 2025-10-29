import { useEffect, useState } from "react";
import { Download, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Web Innovator 💻", "AI Agent Builder 🤖", "Creative Problem Solver ⚙️", "Future-Focused Coder 🚀"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Neural Network Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] border border-primary/10 rounded-full animate-rotate" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-secondary/10 rounded-full animate-rotate" style={{ animationDirection: "reverse" }} />
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-primary">
              <Sparkles className="w-5 h-5 animate-pulse-glow" />
              <p className="text-sm font-medium tracking-wider uppercase">Hello, I'm Umar 👋</p>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                Full-Stack Developer
              </span>
              <br />
              <span className="text-foreground">& AI Explorer</span>
            </h1>

            {/* Typewriter Effect */}
            <div className="flex items-center gap-2 h-12">
              <Code2 className="w-6 h-6 text-primary flex-shrink-0" />
              <div className="relative overflow-hidden">
                <p className="text-xl lg:text-2xl font-semibold text-secondary animate-fade-in">
                  {texts[currentText]}
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A creative mind and a curious learner — I craft clean, functional, and intelligent web experiences that blend design with logic.
              Exploring the evolving edge of <span className="font-semibold text-primary">AI</span> and automation, I believe in building tools that amplify human potential.
              <br />
              <span className="block mt-4 italic text-primary">"A Learner May Be An Achiever."</span>
            </p>


            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Umar_CV.pdf";
                  link.download = "Shaik_Umar_Althaf_CV.pdf";
                  link.click();
                }}
                variant="default"
                size="lg"
                className="gap-2 text-base font-semibold shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)] transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="gap-2 text-base font-semibold border-primary/50 text-primary hover:bg-primary/10"
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* 3D Floating Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-60 animate-pulse-glow transition-all duration-500" />

              {/* Rotating Border */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-full animate-rotate opacity-50" style={{ background: "conic-gradient(from 0deg, hsl(186, 100%, 50%), hsl(263, 70%, 65%), hsl(186, 100%, 50%))" }} />

              {/* Glass Card Effect */}
              <div className="relative backdrop-blur-sm bg-card/30 rounded-full p-2 border border-primary/30">
                <img
                  src={profileImage}
                  alt="Shaik Umar Althaf - Full-Stack Developer"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl group-hover:scale-105 transition-transform duration-500 animate-float"
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute top-10 -right-4 w-16 h-16 bg-primary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-primary/30 animate-float" style={{ animationDelay: "0.5s" }}>
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute bottom-10 -left-4 w-16 h-16 bg-secondary/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-secondary/30 animate-float" style={{ animationDelay: "1s" }}>
                <Sparkles className="w-8 h-8 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
