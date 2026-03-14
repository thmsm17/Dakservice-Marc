import { motion } from "framer-motion";
import { Home, Hammer, PenTool } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Nieuwbouw",
    description: "Complete en vakkundige dakinstallaties voor uw nieuwbouwproject. Wij werken uitsluitend met hoogwaardige materialen voor een dak dat generaties lang meegaat.",
    icon: Home,
    image: "service-nieuwbouw.png",
    delay: 0.1,
  },
  {
    title: "Renovatie",
    description: "Vervanging en herstel van verouderde of beschadigde daken. Geef uw woning een vernieuwde uitstraling en optimale bescherming tegen weersinvloeden.",
    icon: Hammer,
    image: "service-renovatie.png",
    delay: 0.2,
  },
  {
    title: "Onderhoud",
    description: "Voorkom dure reparaties en lekkages met ons periodiek dakonderhoud. Wij inspecteren grondig, reinigen en voeren preventieve reparaties uit.",
    icon: PenTool,
    image: "service-onderhoud.png",
    delay: 0.3,
  },
];

export function Services() {
  return (
    <section id="diensten" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Onze Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6">Professionele Dakdiensten</h3>
          <p className="text-lg text-muted-foreground">
            Of het nu gaat om een compleet nieuw dak, een grondige renovatie of essentieel onderhoud, 
            wij bieden vakmanschap waar u op kunt bouwen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: service.delay }}
            >
              <Card className="h-full border-border/50 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-300 group overflow-hidden bg-background">
                {/* Service photo */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Icon badge over image */}
                  <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white text-primary flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>

                <CardHeader className="pb-2 pt-5">
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                {/* Decorative bottom border line that expands on hover */}
                <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
