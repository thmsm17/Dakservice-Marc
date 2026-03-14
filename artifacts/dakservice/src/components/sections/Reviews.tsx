import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Hans Hermus",
    rating: 5,
    date: "13 jaar geleden",
    text: "Marc weet wat hij doet. Super service. Zou hem aan iedereen aanraden.",
    source: "Google",
  },
  {
    name: "Anoniem",
    rating: 5,
    date: "13 jaar geleden",
    text: "Marc heeft mijn plat dak gerepareerd. Goede, eerlijke vent.",
    source: "Google",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
        />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Klantbeoordelingen</h2>
          <h3 className="text-3xl md:text-4xl font-black text-foreground mb-4">Wat klanten zeggen</h3>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating rating={5} />
            <span className="text-sm font-semibold text-foreground">5,0</span>
            <span className="text-sm text-muted-foreground">op Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-md border border-border/50 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground leading-tight">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="text-xs font-medium text-muted-foreground">Google</span>
                </div>
              </div>

              <StarRating rating={review.rating} />

              <p className="text-muted-foreground leading-relaxed italic">"{review.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
