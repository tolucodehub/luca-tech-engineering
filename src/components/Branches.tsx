import { MapPin, Phone, Mail, Clock } from "lucide-react";

const branches = [
  {
    city: "Port Harcourt",
    address: "No 7 Azumini by Orlukuru off Iwofe Rumuolumini",
    state: "Rivers State",
    isHQ: true,
  },
  {
    city: "Abuja",
    address: "132 British Village, Wuse 2 FCT",
    state: "Federal Capital Territory",
    isHQ: false,
  },
  {
    city: "Akure",
    address: "237 Oyemekun Road",
    state: "Ondo State",
    isHQ: false,
  },
];

const Branches = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Locations
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Find Us <span className="text-gradient">Nationwide</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            With strategically located branches across Nigeria, we're always
            close to serve you better.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              className={`card-glass rounded-2xl p-8 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 ${
                branch.isHQ ? "md:col-span-1" : ""
              }`}
            >
              {branch.isHQ && (
                <span className="absolute top-4 right-4 px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                  Head Office
                </span>
              )}

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-heading font-bold mb-2">
                {branch.city}
              </h3>
              <p className="text-muted-foreground mb-4">{branch.address}</p>
              <p className="text-sm text-primary">{branch.state}, Nigeria</p>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-2">Call Us</h4>
                <p className="text-muted-foreground">+234 000 000 0000</p>
                <p className="text-muted-foreground">+234 000 000 0001</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-2">Email Us</h4>
                <p className="text-muted-foreground">
                  info@lucatechengineering.com
                </p>
                <p className="text-muted-foreground">
                  sales@lucatechengineering.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-heading font-semibold mb-2">
                  Business Hours
                </h4>
                <p className="text-muted-foreground">Mon - Fri: 8AM - 6PM</p>
                <p className="text-muted-foreground">Sat: 9AM - 2PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* International Presence */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-heading font-bold mb-6">
            International Presence
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { country: "Nigeria", flag: "🇳🇬" },
              { country: "China", flag: "🇨🇳" },
              { country: "USA", flag: "🇺🇸" },
            ].map((location, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full"
              >
                <span className="text-2xl">{location.flag}</span>
                <span className="font-medium text-foreground">
                  {location.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
