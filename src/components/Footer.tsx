import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-dark py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Dana Saadeh</h3>
            <p className="text-white/70">Front-End Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/danasaadeh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:shadow-glow transition-all hover:scale-110"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/dana-saadeh-8aa67128a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover:shadow-glow transition-all hover:scale-110"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:danasaadeh675@gmail.com"
              className="p-3 rounded-full glass hover:shadow-glow transition-all hover:scale-110"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-4 text-center md:text-right">
            <a href="#home" className="text-white/70 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
          <p>© {currentYear} Dana Saadeh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
