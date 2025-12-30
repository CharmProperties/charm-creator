import { Button } from "@/components/ui/button";
import charmLogo from "@/assets/charm-logo.png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center shadow-lg">
            <img src={charmLogo} alt="Charm Properties" className="w-14 h-14 object-contain" />
          </div>
          <div className="hidden sm:block">
            <span className="text-secondary-foreground font-bold text-lg tracking-wide">CHARM</span>
            <span className="text-secondary-foreground/70 text-sm block -mt-1 tracking-widest">PROPERTIES</span>
          </div>
        </div>
        <Button variant="hero" size="lg" asChild>
          <a href="#contact">Get Started</a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
