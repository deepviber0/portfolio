import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-lg font-medium text-muted-foreground">Hello, It's Me</p>
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground">
                Shaik Umar Althaf
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
                And I'm A <span className="relative inline-block">Tech Explorer</span>
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Aspiring Web Developer | Passionate about Coding & AI | Enthusiastic Learner of Emerging Technologies | 
              Proficient in Python, NumPy, Pandas, and AI Agent Development.
            </p>

            <div className="pt-4">
              <Button variant="hero" size="lg" className="gap-2 text-base font-semibold">
                <Download className="w-5 h-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-glow rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative">
                <img
                  src={profileImage}
                  alt="Shaik Umar Althaf"
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-card group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
