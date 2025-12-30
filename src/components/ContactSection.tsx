import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    marketingConsent: false,
    orderConsent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Offer Request Submitted!",
      description: "We'll get back to you within 24 hours with your cash offer.",
    });
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      marketingConsent: false,
      orderConsent: false,
    });
  };

  return (
    <section id="contact" className="section-padding hero-gradient">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-4">
              Receive Your No Obligation<br />Cash Offer Below!
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-2xl animate-fade-up">
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div className="space-y-4">
                <p className="text-sm font-medium text-foreground">Consent Forms</p>
                
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, marketingConsent: checked as boolean })
                    }
                  />
                  <label htmlFor="marketingConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I consent to receive marketing text messages from Charm Properties LLC at the phone number provided. Frequency may vary. Message & data rates may apply. Text HELP for assistance, reply STOP to opt out.
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="orderConsent"
                    checked={formData.orderConsent}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, orderConsent: checked as boolean })
                    }
                  />
                  <label htmlFor="orderConsent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I consent to receive non-marketing text messages from Charm Properties LLC about my order updates, appointment reminders, order tracking, and customer questions. Message & data rates may apply.
                  </label>
                </div>
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                SUBMIT
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                {" | "}
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
