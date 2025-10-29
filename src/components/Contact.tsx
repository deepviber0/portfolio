import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "umar@example.com",
      href: "mailto:umar@example.com",
      color: "hover:bg-red-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/shaikumaralthaf",
      href: "https://linkedin.com/in/shaikumaranthaf",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/shaikumaranthaf",
      href: "https://github.com/shaikumaranthaf",
      color: "hover:bg-gray-800"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-2">
            Wonna Contact <span className="text-primary">Me?</span>
          </h2>
          <p className="text-2xl text-muted-foreground font-medium">Let's Connect</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            I'm always open to collaborations and tech discussions. Feel free to reach out through any of the platforms below!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ${link.color} hover:text-white`}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300">
                  <div className="text-primary group-hover:text-white transition-colors duration-300">
                    {link.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-white transition-colors">
                  {link.label}
                </h3>
                
                <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors break-all">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
