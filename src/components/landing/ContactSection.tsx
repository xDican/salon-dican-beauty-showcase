import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const whatsappUrl =
  "https://wa.me/50493133496?text=Hola%20Salon%20Dican%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita";

const ContactSection = () => {
  return (
    <section id="contacto" className="container mx-auto py-12 md:py-20">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Contáctanos</h2>
        <p className="text-muted-foreground mt-3">
          Tegucigalpa, Honduras · Lunes a sábado, de 9:00 a.m. a 7:00 p.m.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-2 font-medium"><MapPin className="text-primary" /> Ubicación</div>
          <p className="text-sm text-muted-foreground mt-2">Tegucigalpa, Honduras</p>
          <a
            className="text-sm text-primary underline-offset-4 hover:underline mt-2 inline-block"
            href="https://www.google.com/maps/search/?api=1&query=Salon+Dican+Tegucigalpa"
            target="_blank" rel="noreferrer"
          >
            Ver en Google Maps
          </a>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-2 font-medium"><Phone className="text-primary" /> WhatsApp</div>
          <p className="text-sm text-muted-foreground mt-2">+504 9313-3496</p>
          <Button asChild variant="hero" size="lg" className="mt-3 w-full">
            <a href={whatsappUrl} aria-label="Abrir WhatsApp para agendar cita">Agenda tu cita ahora</a>
          </Button>
        </div>
        <div className="p-6 rounded-lg border bg-card">
          <div className="flex items-center gap-2 font-medium"><Mail className="text-primary" /> Correo</div>
          <a className="text-sm text-primary underline-offset-4 hover:underline mt-2 inline-block" href="mailto:dican@salondican.lat">
            dican@salondican.lat
          </a>
          <p className="text-sm text-muted-foreground mt-2">Te responderemos a la brevedad.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
