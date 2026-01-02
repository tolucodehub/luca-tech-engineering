import manufacturing1 from "@/assets/manufacturing-1.jpg";
import manufacturing2 from "@/assets/manufacturing-2.jpg";
import manufacturing3 from "@/assets/manufacturing-3.jpg";
import { Factory, Cog, CheckCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Manufacturing = () => {
  const images = [
    { src: manufacturing1, alt: "Meter assembly production line" },
    { src: manufacturing2, alt: "Technicians assembling smart meters" },
    { src: manufacturing3, alt: "Quality control inspection" },
  ];

  return (
    <section id="manufacturing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              <Factory className="w-4 h-4" />
              Our Manufacturing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              State-of-the-Art Manufacturing Facility
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our world-class manufacturing facility produces high-quality smart meters 
              with precision engineering and rigorous quality control.
            </p>
          </div>
        </ScrollReveal>

        {/* Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Manufacturing Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Factory, title: "Modern Facility", desc: "Equipped with cutting-edge machinery and technology for precision manufacturing." },
            { icon: Cog, title: "Expert Assembly", desc: "Skilled technicians ensuring every meter meets our exacting standards." },
            { icon: CheckCircle, title: "Quality Assurance", desc: "Rigorous testing and quality control at every stage of production." },
          ].map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-sm">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manufacturing;
