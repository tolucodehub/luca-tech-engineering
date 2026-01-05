import aedcLogo from "@/assets/discos/aedc.png";
import bedcLogo from "@/assets/discos/bedc.png";
import ekedcLogo from "@/assets/discos/ekedc.png";
import eedcLogo from "@/assets/discos/eedc.png";
import ibedcLogo from "@/assets/discos/ibedc.png";
import ikedcLogo from "@/assets/discos/ikedc.png";
import jedcLogo from "@/assets/discos/jedc.jpg";
import kaedcoLogo from "@/assets/discos/kaedco.png";
import kedcoLogo from "@/assets/discos/kedco.png";
import phedcLogo from "@/assets/discos/phedc.png";
import yedcLogo from "@/assets/discos/yedc.png";
import ScrollReveal from "@/components/ScrollReveal";

const discos = [
  { name: "Abuja Electricity Distribution Company", shortName: "AEDC", logo: aedcLogo },
  { name: "Benin Electricity Distribution Company", shortName: "BEDC", logo: bedcLogo },
  { name: "Eko Electricity Distribution Company", shortName: "EKEDC", logo: ekedcLogo },
  { name: "Enugu Electricity Distribution Company", shortName: "EEDC", logo: eedcLogo },
  { name: "Ibadan Electricity Distribution Company", shortName: "IBEDC", logo: ibedcLogo },
  { name: "Ikeja Electric", shortName: "IKEDC", logo: ikedcLogo },
  { name: "Jos Electricity Distribution Plc", shortName: "JEDC", logo: jedcLogo },
  { name: "Kaduna Electric", shortName: "KAEDCO", logo: kaedcoLogo },
  { name: "Kano Electricity Distribution Company", shortName: "KEDCO", logo: kedcoLogo },
  { name: "Port Harcourt Electricity Distribution Company", shortName: "PHEDC", logo: phedcLogo },
  { name: "Yola Electricity Distribution Company", shortName: "YEDC", logo: yedcLogo },
];

const DiscoCard = ({ disco }: { disco: typeof discos[0] }) => (
  <div className="flex-shrink-0 mx-3 md:mx-6 bg-white rounded-xl p-4 md:p-6 flex flex-col items-center justify-center min-w-[140px] md:min-w-[200px] border border-border shadow-sm hover:shadow-lg transition-shadow duration-300">
    <img
      src={disco.logo}
      alt={disco.name}
      className="h-10 md:h-16 max-w-[100px] md:max-w-[160px] object-contain mb-2 md:mb-3"
    />
    <p className="text-xs md:text-sm text-muted-foreground text-center font-medium">
      {disco.shortName}
    </p>
  </div>
);

const Discos = () => {
  return (
    <section id="discos" className="py-12 md:py-16 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              Distribution Partners
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
              Nigerian <span className="text-gradient">DISCOs</span> We Serve
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              We partner with Nigeria's major electricity distribution companies to provide smart metering solutions nationwide.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Animation Container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-muted/30 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-muted/30 to-transparent z-10" />
        
        {/* Scrolling container - uses CSS animation for seamless infinite scroll */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {discos.map((disco, index) => (
            <DiscoCard key={`first-${index}`} disco={disco} />
          ))}
          {/* Duplicate set for seamless loop */}
          {discos.map((disco, index) => (
            <DiscoCard key={`second-${index}`} disco={disco} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discos;
