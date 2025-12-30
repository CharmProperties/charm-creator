import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center shadow-2xl animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Talk with our Team Right Now!
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            Let's talk about your house!
          </p>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="#contact">Get My Offer!</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
