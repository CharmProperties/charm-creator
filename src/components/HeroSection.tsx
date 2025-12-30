import { Button } from "@/components/ui/button";
import heroHouse from "@/assets/hero-house.png";

const HeroSection = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-foreground leading-tight mb-6">
              SELL YOUR TEXAS<br />PROPERTY FAST!!
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/90 font-semibold mb-2">
              We're Buying 5–7 Homes This Month – All Cash!
            </p>
            <p className="text-secondary-foreground/80 text-lg mb-8">
              Looking to sell fast? Get a <span className="font-bold">no-obligation, hassle-free cash offer</span> today. We close on your timeline.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">GET MY CASH OFFER</a>
            </Button>
          </div>
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <img 
                src={heroHouse} 
                alt="Beautiful Texas home" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
