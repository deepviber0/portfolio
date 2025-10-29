const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
            <p className="text-lg text-foreground leading-relaxed space-y-4">
              <span className="block">
                Hello! I'm <span className="font-semibold text-primary">Umar</span>, an aspiring web developer passionate about building clean, 
                functional, and user-friendly websites. I thrive on the blend of creativity and logic that web development offers, 
                allowing me to bring ideas to life through code.
              </span>
              
              <span className="block">
                Beyond web development, I have a strong interest in <span className="font-semibold text-primary">AI</span> and enjoy 
                exploring its potential to create intelligent solutions. I'm always eager to learn new technologies, tackle challenges, 
                and expand my expertise in both web and AI development.
              </span>
              
              <span className="block">
                Outside of coding, I have a love for <span className="font-semibold text-primary">skating</span>, which keeps me active and inspired. 
                My portfolio reflects my journey, growth, and dedication to the tech world, and I look forward to connecting with like-minded individuals.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
