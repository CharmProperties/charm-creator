import { Phone, Mail, MapPin } from "lucide-react";
import charmLogo from "@/assets/charm-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center shadow-lg mb-6">
            <img src={charmLogo} alt="Charm Properties" className="w-16 h-16 object-contain" />
          </div>
          <p className="text-secondary-foreground/80 text-lg max-w-xl">
            Charm Properties is dedicated to providing reliable and efficient real estate solutions with integrity and professionalism.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-primary" />
            <span className="text-secondary-foreground text-lg font-semibold">(713) 357-1590</span>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-primary" />
            <span className="text-secondary-foreground text-lg">info@charm.properties</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            <span className="text-secondary-foreground text-lg">Houston, TX</span>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-secondary-foreground/60 text-sm">
            ©2035 – Charm Properties, LLC | All Rights Reserved |{" "}
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-primary transition-colors">Terms And Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
