import collinsIgwe from "@/assets/collins-igwe.jpg";
import lucasBenson from "@/assets/lucas-benson.jpg";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const leaders = [
  {
    name: "Mr. Collins Igwe",
    title: "Board Chairman",
    image: collinsIgwe,
    quote: "At Luca Tech Power Solution Limited, we are committed to revolutionizing Nigeria's power sector through innovative smart metering solutions. Our vision is to deliver reliable, efficient energy management systems that empower communities and drive sustainable development across Africa.",
  },
  {
    name: "Lucas Benson O.",
    title: "CEO/MD",
    image: lucasBenson,
    quote: "Our commitment to excellence and innovation drives us to deliver world-class smart metering solutions. We are dedicated to transforming the energy landscape across Nigeria and beyond through cutting-edge technology and exceptional service.",
  },
];

const Leadership = () => {
  return (
    <section id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
              Leadership
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guided by visionary leadership with decades of experience in the energy sector.
            </p>
          </div>
        </ScrollReveal>

        {/* Leaders Grid */}
        <div className="max-w-5xl mx-auto space-y-8">
          {leaders.map((leader, index) => (
            <ScrollReveal key={index} delay={index * 200}>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 shadow-lg">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Leader Image */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                        <img
                          src={leader.image}
                          alt={`${leader.name} - ${leader.title}`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-6">
                      {leader.title}
                    </p>
                    <blockquote className="text-muted-foreground italic text-lg leading-relaxed">
                      "{leader.quote}"
                    </blockquote>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
