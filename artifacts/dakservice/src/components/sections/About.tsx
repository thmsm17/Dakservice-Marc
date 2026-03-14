import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const benefits = [
    "Jarenlange ervaring in de regio",
    "Persoonlijk advies en transparante communicatie",
    "Snelle service bij spoedgevallen en lekkages",
    "Gebruik van duurzame en A-merk materialen",
    "Gegarandeerde kwaliteit op al ons werk",
  ];

  return (
    <section id="over-ons" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* background shape */}
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-3" />
            
            {/* professional roofing stock photo */}
            {/* professional roofer working on a residential roof in daylight */}
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
              alt="Vakman aan het werk op het dak" 
              className="relative rounded-2xl shadow-xl object-cover h-[500px] w-full"
            />
            
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-12 sm:-right-8 bg-primary text-white p-6 rounded-2xl shadow-xl text-center border-4 border-white">
              <span className="block text-4xl font-black mb-1">100%</span>
              <span className="block text-sm font-semibold uppercase tracking-wider">Vakmanschap</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Over Ons Bedrijf</h2>
            <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6">
              Uw Lokale Specialist Voor Ieder Dak
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Dakservice Marc van Tankeren is een begrip als het gaat om betrouwbaar en professioneel dakwerk. Wij begrijpen dat uw dak de belangrijkste bescherming van uw huis is.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Met grote toewijding aan ons vakmanschap leveren we altijd maatwerk. Of u nu een lekkage heeft die met spoed verholpen moet worden, of plannen heeft voor een complete dakrenovatie: wij staan voor u klaar met helder advies en strakke uitvoering.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
