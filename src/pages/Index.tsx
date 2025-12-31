import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Clients from "@/components/Clients";
import Branches from "@/components/Branches";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Luca Tech Engineering | Nigeria's Leading Smart Meter Supplier</title>
        <meta
          name="description"
          content="Luca Tech Engineering is Nigeria's largest supplier of smart prepaid meters with operations across Africa, China, and USA. We deliver innovative energy management solutions for power, oil & gas sectors."
        />
        <meta
          name="keywords"
          content="smart meters, prepaid meters, energy management, Nigeria, DISCO, power sector, oil and gas, Luca Tech Engineering"
        />
        <link rel="canonical" href="https://lucatechengineering.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Solutions />
          <Clients />
          <Branches />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
