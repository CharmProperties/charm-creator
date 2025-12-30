import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Charm Properties has been an absolute game-changer. Their professionalism, industry knowledge, and attention to detail set them apart. They made the entire process seamless and stress-free. I highly recommend them to anyone looking for real results!",
    name: "Sophia Reynolds",
    title: "Real Estate Investor",
  },
  {
    quote: "Charm Properties exceeded my expectations in every way. From start to finish, they provided top-tier service and valuable insights that helped me make the best decision. Their expertise and dedication truly stands out!",
    name: "Jessica Carter",
    title: "Business Consultant",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What clients say about us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
