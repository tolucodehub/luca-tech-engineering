import { Zap, Droplet, Building2, BarChart3, Wrench, Shield } from "lucide-react";
import installationWork from "@/assets/installation-work.jpg";
import oilGasFacility from "@/assets/oil-gas-facility.jpg";

const services = [
  {
    icon: Zap,
    title: "Power Sector",
    description:
      "Smart prepaid meter manufacturing, installation, and management across all 11 DISCOs in Nigeria.",
    features: ["Single & Three Phase Meters", "PLC & Inbus Technology", "Complete Installation"],
  },
  {
    icon: Droplet,
    title: "Oil & Gas",
    description:
      "Comprehensive services for oil and gas sector with international partnerships and expertise.",
    features: ["Equipment Supply", "Technical Support", "Project Management"],
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Strategic real estate investments and development projects across key locations.",
    features: ["Property Development", "Investment Services", "Asset Management"],
  },
  {
    icon: BarChart3,
    title: "Trading",
    description:
      "International trading operations spanning multiple sectors and continents.",
    features: ["Import/Export", "Supply Chain", "Market Access"],
  },
  {
    icon: Wrench,
    title: "Installation Services",
    description:
      "Professional corporate installers with expertise in Akure, Warri, Asaba, Benin, Sapele, and Auchi regions.",
    features: ["BEDC Network Expertise", "Certified Installers", "Quality Assurance"],
  },
  {
    icon: Shield,
    title: "Technical Partnership",
    description:
      "Partnership with Zhejiang Xinghao Technology Limited China for cutting-edge meter technology.",
    features: ["R&D Collaboration", "Technology Transfer", "Quality Products"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Comprehensive <span className="text-gradient">Energy Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From smart metering to oil & gas, we deliver end-to-end solutions
            that power businesses and communities across Africa.
          </p>
        </div>

        {/* Featured Images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={installationWork}
              alt="Meter Installation"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-heading font-bold text-foreground">
                Professional Installation
              </h3>
              <p className="text-muted-foreground">Expert meter installation services</p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src={oilGasFacility}
              alt="Oil & Gas Facility"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-heading font-bold text-foreground">
                Oil & Gas Operations
              </h3>
              <p className="text-muted-foreground">Industrial energy infrastructure</p>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
