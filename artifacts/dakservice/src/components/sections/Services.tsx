import { motion } from "framer-motion";
import { Home, Hammer, PenTool } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Nieuwbouw",
    description: "Complete en vakkundige dakinstallaties voor uw nieuwbouwproject. Wij werken uitsluitend met hoogwaardige materialen voor een dak dat generaties lang meegaat.",
    icon: Home,
    delay: 0.1,
  },
  {
    title: "Renovatie",
    description: "Vervanging en herstel van verouderde of beschadigde daken. Geef uw woning een vernieuwde uitstraling en optimale bescherming tegen weersinvloeden.",
    icon: Hammer,
    delay: 0.2,
  },
  {
    title: "Onderhoud",
    description: "Voorkom dure reparaties en lekkages met ons periodiek dakonderhoud. Wij inspecteren grondig, reinigen en voeren preventieve reparaties uit.",
    icon: PenTool,
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
                <CardHeader className="relative pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-red-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <service.icon className="w-8 h-8" />
                  </div>
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
