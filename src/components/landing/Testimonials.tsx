import { Card, CardContent } from "@/components/ui/card";
import ana from "@/assets/testimonial-ana.jpg";
import carlos from "@/assets/testimonial-carlos.jpg";
import lucia from "@/assets/testimonial-lucia.jpg";

const testimonials = [
  {
    name: "Ana M.",
    text: "¡Excelente servicio! Salí encantada con mi nuevo look. La atención es de primera.",
    photo: ana,
  },
  {
    name: "Carlos R.",
    text: "El corte quedó justo como lo quería. Profesionales y muy atentos. 100% recomendado.",
    photo: carlos,
  },
  {
    name: "Lucía P.",
    text: "La manicura me duró semanas perfecta. Detalle y calidad en cada paso.",
    photo: lucia,
  },
];

const Star = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="w-4 h-4 fill-accent">
    <path d="M10 15l-5.878 3.09L5.7 11.545.8 7.41l6.061-.882L10 1l3.139 5.528 6.061.882-4.9 4.134 1.578 6.545z" />
  </svg>
);

const Testimonials = () => {
  return (
    <section id="testimonios" className="container mx-auto py-12 md:py-20">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Testimonios</h2>
        <p className="text-muted-foreground mt-3">
          La satisfacción de nuestros clientes nos inspira a dar lo mejor.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card key={t.name} className="h-full">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center gap-3">
                <img
                  src={t.photo}
                  alt={`Cliente satisfecho: ${t.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium leading-none">{t.name}</p>
                  <div className="flex gap-1 mt-1" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">“{t.text}”</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
