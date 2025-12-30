const clients = [
  {
    name: "Chevron",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Chevron_Logo.svg/1200px-Chevron_Logo.svg.png",
  },
  {
    name: "NNPC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/NNPC_Group_logo.svg/1200px-NNPC_Group_logo.svg.png",
  },
  {
    name: "ExxonMobil",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/ExxonMobil.svg/2560px-ExxonMobil.svg.png",
  },
  {
    name: "Bell Oil and Gas",
    logo: "https://cdn.brandfetch.io/belloilandgas.com/fallback/lettermark/theme/dark/h/512/w/512/icon?t=1719562671720",
  },
  {
    name: "Seplat",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/Seplat_Petroleum_Development_Company_logo.png",
  },
  {
    name: "Nigeria LNG",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Nigeria_LNG_Limited_logo.png",
  },
  {
    name: "IBEDC",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/27/Ibadan_Electricity_Distribution_Company_logo.png",
  },
  {
    name: "ENI",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Eni_SpA.svg/1200px-Eni_SpA.svg.png",
  },
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {clients.map((client, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-8 flex items-center justify-center hover:border-primary/50 transition-all duration-300 group min-h-32"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-16 max-w-full object-contain filter brightness-0 invert opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Add more clients placeholder */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            And many more trusted partners across Nigeria and Africa
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Kano DISCO", "Eko DISCO", "Abuja DISCO", "Kaduna EDCO"].map(
              (disco, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground border border-border"
                >
                  {disco}
                </span>
              )
            )}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="text-6xl text-primary/20 mb-6">"</div>
            <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
              Luca Tech Engineering has been instrumental in revolutionizing our
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
