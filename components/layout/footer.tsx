import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold tracking-tighter">
              <span className="text-primary">Furqan</span>
              <span className="text-muted-foreground">.dev</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-1">
              Full Stack Developer & UI/UX Designer
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="https://github.com/furqan137" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="https://www.linkedin.com/in/furqan-zafar-426727253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
            <Link href="mailto:furqanjee424@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-6 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Furqan Zafar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}