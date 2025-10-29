import { useState } from "react";
import { Mail, Linkedin, Github, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "umar@example.com",
      href: "mailto:umar@example.com",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shaikumaralthaf",
      href: "https://linkedin.com/in/shaikumaranthaf",
      gradient: "from-blue-600 to-blue-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/shaikumaranthaf",
      href: "https://github.com/shaikumaranthaf",
      gradient: "from-gray-700 to-gray-500"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Intelligent
            </span>{" "}
            Together 🤝
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to collaborations, tech discussions, and exciting opportunities. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-card/40 rounded-2xl p-8 border border-primary/20 shadow-[0_8px_32px_rgba(0,229,255,0.15)] animate-fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background/50 border-border focus:border-primary focus:ring-primary transition-colors min-h-[120px]"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full gap-2 shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:shadow-[0_0_50px_rgba(0,229,255,0.7)]"
              >
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Links */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block backdrop-blur-md bg-card/40 rounded-2xl p-6 border border-primary/20 hover:border-primary/50 shadow-[0_4px_24px_rgba(0,229,255,0.1)] hover:shadow-[0_8px_48px_rgba(0,229,255,0.25)] transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${link.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {link.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                      {link.label}
                    </h3>
                    <p className="text-sm text-muted-foreground break-all">
                      {link.value}
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}

            {/* Animated Bot Illustration */}
            <div className="backdrop-blur-md bg-card/40 rounded-2xl p-6 border border-secondary/20 shadow-[0_4px_24px_rgba(123,97,255,0.1)]">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-full animate-pulse-glow" />
                  <div className="relative w-full h-full bg-background rounded-full flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-secondary animate-float" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-1">AI Assistant Ready</h4>
                  <p className="text-sm text-muted-foreground">Quick response guaranteed 🚀</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
