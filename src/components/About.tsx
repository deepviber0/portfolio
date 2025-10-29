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
                Hey there 👋, I'm <span className="font-semibold text-primary">Umar</span> — a creative and curious web developer
                who loves crafting interactive, smart, and visually engaging digital experiences. 
                I enjoy blending creativity with logic to design websites that not only look great but also feel intuitive and alive.
              </span>

              <span className="block">
                Currently, I’m exploring <span className="font-semibold text-primary">AI/ML-based technologies</span> and 
                <span className="font-semibold text-primary"> automation tools</span>, experimenting with how intelligence can 
                elevate web experiences and streamline real-world workflows. My goal is to merge the power of 
                automation with human creativity — building projects that think, learn, and evolve.
              </span>

              <span className="block">
                I believe technology should feel personal, expressive, and inspiring. 
                When I’m not coding, you’ll probably find me <span className="font-semibold text-primary">skating</span> 🛹 —
                recharging my creativity and embracing new perspectives with every spin.
              </span>

              <span className="block">
                Welcome to my digital space — where <span className="font-semibold text-primary">creativity meets intelligence</span> 
                and every idea turns into code ✨.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
