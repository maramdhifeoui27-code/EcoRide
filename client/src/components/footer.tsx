import { Zap, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center text-black">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span className="font-heading font-bold text-xl tracking-widest text-white">ECO<span className="text-primary">RIDE</span></span>
        </div>

        <div className="text-gray-500 text-xs uppercase tracking-[0.2em]">
          © 2025 Student Project Case Study
        </div>

        <div className="flex gap-6">
          {[Instagram, Twitter, Facebook].map((Icon, i) => (
            <a key={i} href="#" className="text-gray-500 hover:text-primary transition-colors">
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
