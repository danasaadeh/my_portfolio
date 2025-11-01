import { Scene3D } from "../Scene3D";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-primary font-semibold">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient">Dana Saadeh</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
                Front-End Developer | Mobile Developer
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Passionate about creating beautiful, responsive web and mobile applications 
              using modern technologies like React, Flutter, TypeScript, and Tailwind CSS.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                variant="gradient"
              >
                <a href="/Dana_CV.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
              
              <Button variant="outline" asChild className="group">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <a 
                href="https://github.com/danasaadeh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:shadow-glow transition-all hover:scale-110"
              >
                <Github className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com/in/dana-saadeh-8aa67128a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass hover:shadow-glow transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="mailto:danasaadeh675@gmail.com"
                className="p-3 rounded-full glass hover:shadow-glow transition-all hover:scale-110"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
            </div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Scene3D />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
