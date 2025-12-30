import { Clock, Calendar, Home } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Get a fair offer within 24 hours",
    description: "Within 24 hours, we'll provide you with a 100% guaranteed cash offer for your home—no gimmicks or surprises. What we offer is exactly what you'll receive at closing, with no fees or commissions!",
  },
  {
    icon: Calendar,
    title: "Pick the date you want to close",
    description: "We cover all closing costs and pay in cash, so there's no need to deal with banks or lengthy approval processes. Plus, you get to choose the closing date that works best for you!",
  },
  {
    icon: Home,
    title: "Sell on your terms. Close quickly",
    description: "We buy your home directly, eliminating the need for unnecessary showings with realtors or having your private space showcased online. Enjoy a hassle-free sale without the typical disruptions and stress.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            The Easiest Way To Sell Your Home
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            We Offer a Quick & Easy Home Selling Experience and Guarantee the Easiest Home Selling Experience Ever!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
