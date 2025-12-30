import { Check, X } from "lucide-react";

const cashOfferBenefits = [
  "Competitive cash offer within 24 hours",
  "No Showings – No Hassles",
  "You choose your closing day",
  "We pay ALL closing costs",
  "Zero fees. Zero commissions",
  "We'll cover any repairs",
];

const traditionalDrawbacks = [
  "The months it takes to sell add up",
  "Plenty of showings and disruption to your life",
  "It takes forever to close",
  "1-2% in closing costs paid by you, the seller",
  "6% Realtor Fees of the Sales Price",
  "You could be on the hook for repairs",
];

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What are the benefits of selling your house to Charm Properties?
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            With our cash offer program you get the speed of a quick cash sale with the convenience of dealing with experienced professionals who will provide a fair offer
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cash Offer Program */}
          <div className="bg-primary rounded-2xl p-8 shadow-xl animate-fade-up">
            <h3 className="text-2xl font-bold text-primary-foreground mb-6 text-center">
              Our Cash Offer Program
            </h3>
            <ul className="space-y-4">
              {cashOfferBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-primary-foreground text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Traditional Way */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border border-border animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
              The Traditional Way
            </h3>
            <p className="text-muted-foreground text-center mb-6">Listing your house with an agent</p>
            <ul className="space-y-4">
              {traditionalDrawbacks.map((drawback, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground text-lg">{drawback}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
