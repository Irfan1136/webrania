import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu, Code, Users, Calendar, Target, MessageSquare } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string>("#home");

  useEffect(() => {
    const ids = ["home", "about", "vision", "mission", "contact", "events"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`);
        }
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: [0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Code },
    { name: "About", href: "#about", icon: Users },
    { name: "Vision", href: "#vision", icon: Target },
    { name: "Mission", href: "#mission", icon: MessageSquare },
    { name: "Contact", href: "#contact", icon: MessageSquare },
    { name: "Events", href: "#events", icon: Calendar },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2Fc300dff8710a4251833c0d954fc07e32?format=webp&width=800"
              alt="WEBRANIA Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold gradient-text">WEBRANIA</span>
              <div className="flex items-center space-x-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F9322a68a83e449cc8adff5cef366c9a5%2F19fc527444b4458fb63e408f611fd371?format=webp&width=800"
                  alt="AL-AMEEN ENGINEERING COLLEGE Logo"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-xs text-foreground/60 font-medium">AL-AMEEN ENGINEERING COLLEGE</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={activeHref === item.href ? "page" : undefined}
                className={
                  "transition-colors duration-200 font-medium " +
                  (activeHref === item.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground/80 hover:text-primary")
                }
              >
                {item.name}
              </a>
            ))}
          </div>


          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-card border-border">
              <SheetHeader><SheetTitle className="sr-only">Mobile Menu</SheetTitle></SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeHref === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={
                        "flex items-center space-x-3 transition-colors duration-200 font-medium " +
                        (isActive ? "text-primary" : "text-foreground/80 hover:text-primary")
                      }
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </a>
                  );
                })}
                <Button
                  className="bg-primary hover:bg-primary/90 mt-4"
                  onClick={() => {
                    window.location.href = 'mailto:aec.webrania@gmail.com?subject=Join WEBRANIA Community';
                    setIsOpen(false);
                  }}
                >
                  Join Community
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
