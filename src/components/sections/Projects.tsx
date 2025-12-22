import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import umbraImg from "@/assets/umbra.png";
import ecommerceImg from "@/assets/e-commerce.png";
import jewelryImg from "@/assets/project-jewelry.jpg";
import dwelloImg from "@/assets/dwello.png";
import foodImg from "@/assets/food-order.png";
import weatherImg from "@/assets/weather.png";
import reservaImg from "@/assets/reserva.jpg";
import medicineImg from "@/assets/pharmadose.png";
import complaintsImg from "@/assets/compliants.png";
import bankingImg from "@/assets/bank (1).png";
type ProjectCategory = "all" | "web" | "mobile";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects = [
    {
      title: "Advanced Enterprise Banking System",
      description:
        "A mission-critical banking platform featuring complex financial logic, multi-tier transaction approval workflows, and a robust administrative engine. Built with a focus on scalability and security using modern design patterns.",
      technologies: [
        "React 19",
        "TypeScript",
        "TanStack Router",
        "Zustand",
        "TanStack Query",
        "Tailwind CSS",
        "i18next",
      ],
      image: bankingImg, // Make sure to import your screenshot!
      year: "2025",
      category: "web" as const,
    },
    {
      title: "Government Complaints System",
      description:
        "A modern administrative dashboard for managing citizen complaints, featuring role-based access control, real-time analytics, and multilingual support (i18n).",
      technologies: [
        "React 19",
        "TypeScript",
        "TanStack Query",
        "Zustand",
        "Tailwind CSS",
        "Recharts",
      ],
      image: complaintsImg,
      year: "2025",
      category: "web" as const,
    },
    {
      title: "Umbra - Visitor Management System",
      description:
        "A comprehensive real-world project for university entrepreneurship center with event management, visitor tracking, and IoT integration.",
      technologies: ["React", "TypeScript", "Redux", "Tailwind CSS", "Pusher"],
      image: umbraImg,
      year: "2025",
      category: "web" as const,
    },
    {
      title: "Advanced E-Commerce Platform",
      description:
        "Full-featured modern e-commerce with sophisticated state management, real-time search, and complete checkout flow.",
      technologies: ["React 19", "TypeScript", "Zustand", "TanStack Query"],
      image: ecommerceImg,
      year: "2025",
      category: "web" as const,
    },
    {
      title: "Reserva - Reservation System",
      description:
        "Mobile reservation system integrating Google Maps and push notifications. Built with Flutter and Block State Management for seamless booking experience.",
      technologies: [
        "Flutter",
        "Block State Management",
        "Google Maps",
        "Dart",
      ],
      image: reservaImg,
      year: "2024",
      category: "mobile" as const,
    },
    {
      title: "Medicine Warehouse",
      description:
        "Mobile inventory management app with HTTP integration. User-friendly data handling for efficient medicine warehouse operations.",
      technologies: ["Flutter", "HTTP Integration", "Dart", "REST API"],
      image: medicineImg,
      year: "2024",
      category: "mobile" as const,
    },
    {
      title: "Jewelry E-Commerce Website",
      description:
        "Fully functional, responsive luxury e-commerce site with elegant design and smooth user experience.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      image: jewelryImg,
      year: "2024",
      category: "web" as const,
    },
    {
      title: "Dwello - Real Estate",
      description:
        "Modern landing page with property search filters, interactive carousel, and beautiful responsive design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      image: dwelloImg,
      year: "2024",
      category: "web" as const,
    },
    {
      title: "Food Order App",
      description:
        "Dynamic food ordering interface with managed cart state using Context API and useReducer.",
      technologies: ["React", "Context API", "CSS"],
      image: foodImg,
      year: "2024",
      category: "web" as const,
    },
    {
      title: "Weather Website",
      description:
        "Interactive weather application with real-time data from weather API and beautiful UI.",
      technologies: ["React", "API Integration", "CSS"],
      image: weatherImg,
      year: "2024",
      category: "web" as const,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Some of my recent work and personal projects
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              onClick={() => setActiveFilter("all")}
              className="transition-all"
            >
              All Projects
            </Button>
            <Button
              variant={activeFilter === "web" ? "default" : "outline"}
              onClick={() => setActiveFilter("web")}
              className="transition-all"
            >
              Web Development
            </Button>
            <Button
              variant={activeFilter === "mobile" ? "default" : "outline"}
              onClick={() => setActiveFilter("mobile")}
              className="transition-all"
            >
              Mobile Development
            </Button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-xl overflow-hidden hover:shadow-glow transition-all hover:scale-105 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      project.category === "mobile"
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {project.category === "mobile" ? "Mobile" : "Web"}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gradient">
                    {project.title}
                  </h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
