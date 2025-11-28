import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Origin", href: "#origin" },
    { name: "Journey", href: "#journey" },
    { name: "Platform", href: "#platform" },
    { name: "Analysis", href: "#swot" },
    { name: "Roadmap", href: "#roadmap" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
      isScrolled ? "bg-black/80 backdrop-blur-lg border-white/5 py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative w-12 h-12 flex items-center justify-center group cursor-pointer">
            <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary via-emerald-600 to-emerald-900 shadow-lg shadow-primary/50 animate-pulse group-hover:shadow-primary/80 transition-all"></div>
            <div className="absolute w-10 h-10 rounded-full bg-black/90 flex items-center justify-center z-10">
              <Zap className="w-5 h-5 text-primary fill-primary" />
            </div>
            <div className="absolute w-2 h-2 rounded-full bg-white top-3 left-4 blur-[1px]"></div>
          </div>
          
          <div className="leading-none flex flex-col">
            <span className="text-xl sm:text-2xl font-heading font-bold tracking-[0.2em] text-primary">ECO</span>
            <span className="text-sm sm:text-base font-heading font-bold tracking-[0.4em] text-white/80">RIDE-TN</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-sm uppercase tracking-[0.2em] font-medium text-white/70 hover:text-primary hover:scale-105 transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-[0.2em] font-bold text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
