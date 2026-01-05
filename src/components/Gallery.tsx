import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import solar1 from "@/assets/gallery/solar-1.jpg";
import solar2 from "@/assets/gallery/solar-2.jpg";
import solar3 from "@/assets/gallery/solar-3.jpg";
import solar4 from "@/assets/gallery/solar-4.jpg";
import solar5 from "@/assets/gallery/solar-5.jpg";

const galleryImages = [
  {
    src: solar1,
    alt: "Solar panel installation project",
    title: "Solar Street Lights Installation",
  },
  {
    src: solar2,
    alt: "Inverter and battery system installation",
    title: "Inverter & Battery Setup",
  },
  {
    src: solar3,
    alt: "Technician installing inverter system",
    title: "Inverter Installation",
  },
  {
    src: solar4,
    alt: "Rooftop solar panel array",
    title: "Rooftop Solar Array",
  },
  {
    src: solar5,
    alt: "Large scale solar installation",
    title: "Commercial Solar Project",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successful solar installations and energy solutions
              across Nigeria
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-primary-foreground">
                    <h3 className="font-semibold text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors text-4xl font-light"
              onClick={() => setSelectedImage(null)}
              aria-label="Close gallery"
            >
              ×
            </button>
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors text-4xl font-light p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage === 0
                    ? galleryImages.length - 1
                    : selectedImage - 1
                );
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground hover:text-primary transition-colors text-4xl font-light p-2"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage === galleryImages.length - 1
                    ? 0
                    : selectedImage + 1
                );
              }}
              aria-label="Next image"
            >
              ›
            </button>
            <div className="max-w-5xl max-h-[85vh] overflow-hidden rounded-lg">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
