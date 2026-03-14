import { motion } from "framer-motion";
import { MapPin, Phone, Mail, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().min(2, "Naam is verplicht"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(8, "Telefoonnummer is verplicht"),
  message: z.string().min(10, "Bericht is te kort"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    // In a real app, this would be a mutation hook to a backend endpoint
    console.log("Form submitted:", data);
    
    toast({
      title: "Bericht verzonden!",
      description: "Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.",
      variant: "default",
    });
    
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Neem Contact Op</h2>
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6">Vraag Een Offerte Aan</h3>
          <p className="text-lg text-muted-foreground">
            Heeft u een vraag of wilt u een vrijblijvende offerte ontvangen? 
            Bel ons direct of vul het onderstaande formulier in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-8 rounded-2xl border border-border"
            >
              <h4 className="text-xl font-bold text-foreground mb-6">Contactgegevens</h4>
              
              <div className="space-y-6">
                <a href="tel:0625272324" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Telefoon</p>
                    <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">06 25272324</p>
                  </div>
                </a>
                
                <a href="mailto:info@dakservicemvt.nl" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">E-mail</p>
                    <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">Via contactformulier</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">KvK Nummer</p>
                    <p className="text-base font-bold text-foreground">12069018</p>
                  </div>
                </div>
                
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Helbeek+195,5914+SB+Venlo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Adres</p>
                    <p className="text-base font-bold text-foreground group-hover:text-primary transition-colors">Helbeek 195</p>
                    <p className="text-sm text-muted-foreground">5914 SB Venlo</p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl overflow-hidden border border-border shadow-md"
            >
              <iframe
                title="Locatie Dakservice Marc van Tankeren"
                src="https://maps.google.com/maps?q=Helbeek+195,+5914+SB+Venlo,+Netherlands&z=15&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Helbeek+195,5914+SB+Venlo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-white text-sm font-semibold text-primary hover:bg-slate-50 transition-colors border-t border-border"
              >
                <MapPin className="w-4 h-4" />
                Openen in Google Maps
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-white p-8 sm:p-10 rounded-2xl border border-border shadow-xl shadow-black/5"
          >
            <h4 className="text-2xl font-bold text-foreground mb-8">Stuur een bericht</h4>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Naam</FormLabel>
                        <FormControl>
                          <Input placeholder="Uw volledige naam" className="h-12 bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefoonnummer</FormLabel>
                        <FormControl>
                          <Input placeholder="06 12345678" className="h-12 bg-slate-50" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-mailadres</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="uw@email.nl" className="h-12 bg-slate-50" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bericht of vraag</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Beschrijf hier uw vraag, probleem of wensen voor een offerte..." 
                          className="min-h-[150px] bg-slate-50 resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-xl text-base gap-2">
                  <Send className="w-4 h-4" />
                  Verstuur Bericht
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
