import { motion } from "framer-motion";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "Dart"],
      color: "primary" as const,
    },
    {
      title: "Web Development",
      skills: ["React.js", "Next.js", "Redux Toolkit", "TanStack Query", "React Hook Form", "React Router"],
      color: "primary" as const,
    },
    {
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "Block State Management", "Google Maps", "HTTP Integration"],
      color: "accent" as const,
    },
    {
      title: "Styling & UI",
      skills: ["Tailwind CSS", "Bootstrap", "Material-UI", "Ant Design", "Shadcn/ui", "Radix UI"],
      color: "primary" as const,
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "GitLab", "Vite", "Jira", "ClickUp", "Figma", "Axios", "Pusher"],
      color: "primary" as const,
    },
    {
      title: "Concepts",
      skills: ["State Management", "RESTful APIs", "Responsive Design", "i18n", "Agile", "Clean Code"],
      color: "primary" as const,
    },
  ];

  return (
    <section id="skills" className="py-20 gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:shadow-glow transition-all"
            >
              <h3 className={`text-xl font-semibold mb-4 ${
                category.color === "accent" ? "text-accent" : "text-primary"
              }`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      category.color === "accent"
                        ? "bg-accent/20 text-accent hover:bg-accent hover:text-white"
                        : "bg-secondary/50 hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
