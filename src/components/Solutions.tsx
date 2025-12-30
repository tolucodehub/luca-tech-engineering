import {
  Settings,
  CreditCard,
  Users,
  FileText,
  RefreshCw,
  Search,
  Activity,
  Power,
} from "lucide-react";
import smartMeter from "@/assets/smart-meter.jpg";

const emsFeatures = [
  {
    icon: Settings,
    title: "Meter Management",
    description: "Complete oversight and control of your entire meter fleet",
  },
  {
    icon: CreditCard,
    title: "Tariff Management",
    description: "Flexible tariff configuration and billing automation",
  },
  {
    icon: Users,
    title: "Customer Relationship Management",
    description: "Comprehensive CRM for customer data and interactions",
  },
  {
    icon: FileText,
    title: "Collections",
    description: "Streamlined payment collection and tracking systems",
  },
  {
    icon: FileText,
    title: "Report Generation",
    description: "Detailed analytics and customizable reporting tools",
  },
];

const remoteFeatures = [
  {
    icon: RefreshCw,
    title: "Remote Recharging",
    description: "Top-up meters from anywhere in the world 24/7",
  },
  {
    icon: Search,
    title: "Query Meter Details",
    description: "Access real-time meter information remotely",
  },
  {
    icon: Activity,
    title: "Monitor Consumption",
    description: "Track usage patterns and load surveys",
  },
  {
    icon: Power,
    title: "Disconnect/Reconnect",
    description: "Control meter status remotely for efficient management",
  },
];

const Solutions = () => {
  return (
    <section id="solutions" className="section-padding bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Energy Management <span className="text-gradient">System</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our top-notch Energy Management Solution currently hosts about
            120,000 meters, empowering Electricity Distribution Companies with
            intelligent decision-making capabilities.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* EMS Features */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-bold">
              Complete <span className="text-gradient">Utility Management</span>
            </h3>
            <p className="text-muted-foreground">
              Our system has helped utilities make intelligent decisions in
              power supply and demand management. We provide multiple payment
              channels for customer convenience, available 24/7 from any part
              of the world.
            </p>

            <div className="grid gap-4">
              {emsFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Smart Meter Image */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img
                src={smartMeter}
                alt="Smart Prepaid Meter"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full mb-2">
                  Smart Technology
                </span>
                <h4 className="text-xl font-heading font-bold text-foreground">
                  Prepaid Smart Meters
                </h4>
                <p className="text-muted-foreground text-sm">
                  Single & Three Phase PLC and Inbus meters
                </p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Remote Management */}
        <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
              Remote <span className="text-gradient">Meter Management</span>
            </h3>
            <p className="text-muted-foreground">
              Our solutions enable complete remote management of meters,
              increasing efficiency and reducing operational costs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {remoteFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-heading font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { value: "120,000+", label: "Meters Hosted" },
            { value: "24/7", label: "Payment Availability" },
            { value: "11", label: "DISCOs Covered" },
            { value: "100%", label: "Uptime Guarantee" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
