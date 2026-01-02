import { CheckCircle, Target, Users, Lightbulb } from "lucide-react";
import teamWorking from "@/assets/team-working.jpg";
import engineerPortrait from "@/assets/engineer-portrait.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver quality products with full turnkey solutions that reflect our high standards and uncompromising commitment to excellence.",
  },
  {
    icon: Users,
    title: "Our Expertise",
    description:
      "Professional corporate installers across the 11 DISCOs in Nigeria with deep understanding of revenue cycles.",
  },
  {
    icon: Lightbulb,
    title: "Our Vision",
    description:
      "To remain the market leader and innovator in smart metering across Africa and into smart grid technologies.",
  },
];

const highlights = [
  "International holdings company headquartered in Nigeria",
  "Operations across Africa, China, and USA",
  "Partnership with Zhejiang Xinghao Technology Limited China",
  "Largest supplier of meters in Nigeria",
  "Products in all distribution companies nationwide",
  "Access to rare expertise through international affiliations",
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Engineering Excellence
              <span className="text-gradient"> Since Inception</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Luca Tech Engineering is an international holdings company with a
              track record of delivering innovative energy solutions across
              multiple continents.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Images */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={teamWorking}
                  alt="Luca Tech Engineering Team"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 z-20">
                <img
                  src={engineerPortrait}
                  alt="Luca Tech Engineer"
                  className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-background"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-8 lg:pl-8">
              <h3 className="text-2xl md:text-3xl font-heading font-bold">
                Powering Progress Across{" "}
                <span className="text-gradient">Three Continents</span>
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Our business interests span across the sectors of power, oil and
                gas, real estate, and trading. The company has several
                international affiliations and technical partnerships with access
                to knowledge and rare expertise, thereby increasing the capacity
                of our staff.
              </p>

              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 150}>
              <div className="card-glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-xl font-heading font-bold mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
