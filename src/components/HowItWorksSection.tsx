const steps = [
  {
    number: "01",
    title: "Tell us about your house & goals for your property sale.",
    description: "Start by sharing key details about your property, such as the condition, location, and any unique features. We'll also discuss your personal goals for selling—whether you're looking for a quick sale, need to move by a certain date, or are dealing with financial constraints.",
  },
  {
    number: "02",
    title: "We'll make offers based on the market value and condition.",
    description: "Within 24 hours, we'll present you with a no-obligation, all-cash offer. This offer will be tailored to your needs and reflect the best possible terms for a smooth, hassle-free sale.",
  },
  {
    number: "03",
    title: "Accept Your Offer & Get Your Full Amount on the Closing Date of Your Choice!",
    description: "We handle all the paperwork and cover the closing costs. There are no hidden fees or commissions, ensuring you get exactly what was offered at closing.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            How our entire process works for you to get your no hassle cash offer!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex gap-8 items-start mb-12 last:mb-0 animate-fade-up ${
                index % 2 === 1 ? "flex-row-reverse text-right" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
