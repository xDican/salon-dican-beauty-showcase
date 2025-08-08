import { Card, CardContent } from "@/components/ui/card";
import { Scissors, Sparkles, Palette, Hand, Brush } from "lucide-react";

const services = [
  {
    title: "Cortes & Peinados",
    icon: Scissors,
    desc: "Estilos que realzan tu personalidad para cualquier ocasión.",
  },
  {
    title: "Coloración",
    icon: Palette,
    desc: "Tonos vibrantes y técnicas modernas para un look único.",
  },
  {
    title: "Tratamientos Capilares",
    icon: Brush,
    desc: "Cuidado profundo para un cabello saludable y brillante.",
  },
  {
    title: "Manicura & Pedicura",
    icon: Hand,
    desc: "Acabados perfectos con atención al detalle.",
  },
  {
    title: "Brillo & Acabados",
    icon: Sparkles,
    desc: "Toques finales que marcan la diferencia.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="container mx-auto py-12 md:py-20">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Servicios</h2>
        <p className="text-muted-foreground mt-3">
          Calidad profesional con una atención cercana y personalizada.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} className="transition-transform hover:-translate-y-0.5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <s.icon className="text-primary" />
                <h3 className="font-medium">{s.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Services;
