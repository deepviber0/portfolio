import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import AILab from "@/components/AILab";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AILab />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
           Designed in VS Code • Deployed to the world 🚀
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
