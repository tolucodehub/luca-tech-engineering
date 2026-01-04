import aedcLogo from "@/assets/discos/aedc.png";
import bedcLogo from "@/assets/discos/bedc.png";
import ekedcLogo from "@/assets/discos/ekedc.png";
import eedcLogo from "@/assets/discos/eedc.png";
import ibedcLogo from "@/assets/discos/ibedc.png";
import kedcoLogo from "@/assets/discos/kedco.png";
import ScrollReveal from "@/components/ScrollReveal";

const discos = [
  { name: "Abuja Electricity Distribution Company", shortName: "AEDC", logo: aedcLogo },
  { name: "Benin Electricity Distribution Company", shortName: "BEDC", logo: bedcLogo },
  { name: "Eko Electricity Distribution Company", shortName: "EKEDC", logo: ekedcLogo },
  { name: "Enugu Electricity Distribution Company", shortName: "EEDC", logo: eedcLogo },
  { name: "Ibadan Electricity Distribution Company", shortName: "IBEDC", logo: ibedcLogo },
  { name: "Kano Electricity Distribution Company", shortName: "KEDCO", logo: kedcoLogo },
];

const Discos = () => {
  return (
    <section id="discos" className="py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Distribution Partners
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Nigerian <span className="text-gradient">DISCOs</span> We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              We partner with Nigeria's major electricity distribution companies to provide smart metering solutions nationwide.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Animation Container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        {/* Scrolling container */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {discos.map((disco, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-6 bg-white rounded-xl p-6 flex flex-col items-center justify-center min-w-[200px] border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={disco.logo}
                alt={disco.name}
                className="h-16 max-w-[160px] object-contain mb-3"
              />
              <p className="text-sm text-muted-foreground text-center font-medium">
                {disco.shortName}
              </p>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {discos.map((disco, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-6 bg-white rounded-xl p-6 flex flex-col items-center justify-center min-w-[200px] border border-border shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={disco.logo}
                alt={disco.name}
                className="h-16 max-w-[160px] object-contain mb-3"
              />
              <p className="text-sm text-muted-foreground text-center font-medium">
                {disco.shortName}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discos;
