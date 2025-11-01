import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "IXCoders",
      period: "Oct 2025 - Present",
      description: "Developing modern web applications using React.js and Next.js with focus on clean code architecture and scalable solutions.",
      type: "web",
    },
    {
      title: "Frontend Developer Intern",
      company: "Sanad Youth",
      period: "Aug 2025 - Present",
      description: "Building responsive web interfaces with Tailwind CSS and MUI. Implementing efficient state management with Zustand and TanStack Query for complex applications.",
      type: "web",
    },
    {
      title: "Freelance Frontend Developer",
      company: "Self-Employed",
      period: "Sep 2024 - Present",
      description: "Developing custom web and mobile applications for various clients. Expertise in React.js for web and Flutter for cross-platform mobile development.",
      type: "both",
    },
  ];

  return (
    <section id="experience" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey in web and mobile development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 mt-1">
                      <Briefcase className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-muted-foreground mt-2">{exp.description}</p>
                      
                      {exp.type === "both" && (
                        <div className="flex gap-2 mt-3">
                          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                            Web Development
                          </span>
                          <span className="text-xs px-3 py-1 bg-accent/20 text-accent rounded-full">
                            Mobile Development
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm whitespace-nowrap">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-primary">Web Development</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Specializing in modern React.js applications with TypeScript, state management, and responsive design.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">React.js</span>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Next.js</span>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">TypeScript</span>
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">Tailwind CSS</span>
            </div>
          </div>

          <div className="glass rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-accent">Mobile Development</h3>
            <p className="text-muted-foreground text-sm mb-3">
              Building cross-platform mobile applications with Flutter, focusing on performance and user experience.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">Flutter</span>
              <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">Dart</span>
              <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">Block State</span>
              <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">Google Maps</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="text-muted-foreground">
              Bachelor of Science in Software Engineering
            </p>
            <p className="text-primary font-medium">Damascus University</p>
            <p className="text-sm text-muted-foreground mt-1">Expected Graduation: 2026</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
