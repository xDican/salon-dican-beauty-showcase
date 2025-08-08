import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-salon-dican.jpg";

const whatsappUrl =
  "https://wa.me/50493133496?text=Hola%20Salon%20Dican%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <nav className="container mx-auto flex items-center justify-between py-6">
        <a href="#inicio" className="text-xl font-semibold font-display tracking-tight">
          Salon Dican
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#testimonios" className="hover:text-primary transition-colors">Testimonios</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          <Button asChild variant="hero" size="lg">
            <a href={whatsappUrl} aria-label="Agenda tu cita por WhatsApp">
              Agenda tu cita ahora
            </a>
          </Button>
        </div>
      </nav>

      <section id="inicio" className="container mx-auto grid lg:grid-cols-2 gap-10 items-center py-8 md:py-16">
        <div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Salon Dican — Salón de belleza en Tegucigalpa
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-prose">
            Salon Dican es un espacio dedicado a resaltar tu belleza con un servicio personalizado y profesional. Ofrecemos cortes, peinados, coloraciones, manicura, pedicura y tratamientos capilares de la más alta calidad.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <Button asChild variant="hero" size="lg">
              <a href={whatsappUrl} aria-label="Agenda tu cita en WhatsApp">
                Agenda tu cita ahora
              </a>
            </Button>
            <a href="#servicios" className="text-primary underline-offset-4 hover:underline">
              Ver servicios
            </a>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg bg-hero-gradient">
          <img
            src={heroImage}
            alt="Interior elegante de Salon Dican con tonos rosados y dorados"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
