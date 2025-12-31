import chevronLogo from "@/assets/clients/chevron.jpg";
import nnpcLogo from "@/assets/clients/nnpc.jpg";
import exxonmobilLogo from "@/assets/clients/exxonmobil.png";
import belloilgasLogo from "@/assets/clients/belloilgas.jpg";
import seplatLogo from "@/assets/clients/seplat.png";
import lngLogo from "@/assets/clients/lng.png";
import ibedcLogo from "@/assets/clients/ibedc.png";
import eniLogo from "@/assets/clients/eni.png";
import desiconLogo from "@/assets/clients/desicon.jpg";
import makonLogo from "@/assets/clients/makon.jpg";
import firemiksLogo from "@/assets/clients/firemiks.jpg";
import marsenergoLogo from "@/assets/clients/marsenergo.png";

const clients = [
  { name: "Chevron", logo: chevronLogo },
  { name: "NNPC", logo: nnpcLogo },
  { name: "ExxonMobil", logo: exxonmobilLogo },
  { name: "Bell Oil and Gas", logo: belloilgasLogo },
  { name: "Seplat", logo: seplatLogo },
  { name: "Nigeria LNG", logo: lngLogo },
  { name: "IBEDC", logo: ibedcLogo },
  { name: "ENI Saipem", logo: eniLogo },
  { name: "Desicon", logo: desiconLogo },
  { name: "Makon Engineering", logo: makonLogo },
  { name: "Firemiks", logo: firemiksLogo },
  { name: "Marsenergo", logo: marsenergoLogo },
];

const Clients = () => {
  return (
    <section id="clients" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We are proud to partner with some of the biggest names in energy,
            oil & gas, and power distribution across Nigeria and beyond.
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 flex items-center justify-center hover:shadow-lg transition-all duration-300 group min-h-24 border border-border"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-12 max-w-full object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-6xl text-primary/20 mb-6">"</div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              Lucatech Power Solution Limited has been instrumental in revolutionizing our
              metering infrastructure. Their smart prepaid meters and energy
              management solutions have significantly improved our revenue
              collection and customer satisfaction.
            </p>
            <div>
              <p className="font-heading font-bold text-foreground">
                Distribution Partner
              </p>
              <p className="text-muted-foreground">Nigerian DISCO Network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
