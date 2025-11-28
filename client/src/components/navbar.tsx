import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Zap } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Features</a>
      <a href="#ai-tech" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>AI Tech</a>
      <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>How it Works</a>
      <a href="#impact" className="text-muted-foreground hover:text-primary transition-colors font-medium" onClick={() => setIsOpen(false)}>Impact</a>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl tracking-tight">
          <div className="bg-primary text-primary-foreground p-1.5 rounded-lg">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <span className="text-foreground">EcoRide<span className="text-primary">-TN</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button className="rounded-full px-6">Download App</Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-6 mt-8">
                <NavLinks />
                <Button className="w-full rounded-full">Download App</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
