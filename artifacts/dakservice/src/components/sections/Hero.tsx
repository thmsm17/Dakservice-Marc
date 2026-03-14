import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 -z-10 bg-slate-50" />
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-primary mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-semibold">Erkend & Betrouwbaar Dakdekkersbedrijf</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
              Vakkundig <span className="text-primary">Dakwerk</span> voor een Veilige Woning
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Dakservice Marc van Tankeren staat garant voor kwaliteit, snelle service en duurzame oplossingen. Van complete nieuwbouw tot vakkundige renovatie en onderhoud.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-base h-14 px-8 rounded-xl shadow-xl shadow-primary/20 hover:-translate-y-1 transition-all"
                onClick={() => window.location.href = "#contact"}
              >
                Vraag een Offerte Aan
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base h-14 px-8 rounded-xl border-2 hover:bg-slate-100 transition-all"
                onClick={() => window.location.href = "tel:0625272324"}
              >
                <PhoneCall className="mr-2 w-5 h-5 text-primary" />
                Bel: 06 25272324
              </Button>
            </div>
            
            <div className="mt-10 flex items-center gap-6 text-sm font-medium text-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Nieuwbouw
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Renovatie
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Onderhoud
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative background behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/60 rounded-[2.5rem] transform rotate-3 scale-105 opacity-10 -z-10" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-white/50 bg-white">
              <img 
                src={`${import.meta.env.BASE_URL}busje.png`} 
                alt="Dakservice Marc van Tankeren bedrijfsbus" 
                className="w-full h-auto object-cover object-center aspect-[4/3] sm:aspect-auto"
                onError={(e) => {
                  // Fallback just in case busje.png doesn't load
                  e.currentTarget.src = "https://images.unsplash.com/photo-1621845118774-722a45d0ea1a?auto=format&fit=crop&q=80&w=1000";
                }}
              />
              {/* Optional overlay gradient to make it pop */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-in fade-in zoom-in duration-1000 delay-500">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">KvK Geregistreerd</p>
                <p className="text-sm text-muted-foreground">12069018</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
