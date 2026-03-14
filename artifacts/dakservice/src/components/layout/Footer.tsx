import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center md:items-start border-b border-slate-800 pb-12 mb-8">
          
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-primary text-white p-2 rounded-lg font-display font-black text-xl leading-none">
                MvT
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight text-white">
                  Dakservice
                </span>
              </div>
            </div>
            <p className="text-slate-400 max-w-sm mx-auto md:mx-0">
              Vakkundig, betrouwbaar en snel. Voor al uw nieuwbouw, renovatie en dakonderhoud.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Snelle Links</h4>
            <ul className="space-y-3">
              <li><a href="#diensten" className="hover:text-primary transition-colors">Onze Diensten</a></li>
              <li><a href="#over-ons" className="hover:text-primary transition-colors">Over Ons</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact & Offerte</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3">
              <li>Bel ons: <a href="tel:0625272324" className="text-white hover:text-primary font-bold ml-1 transition-colors">06 25272324</a></li>
              <li>KvK: <span className="text-white ml-1">12069018</span></li>
              <li><a href="https://www.dakservicemvt.nl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.dakservicemvt.nl</a></li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Dakservice Marc van Tankeren. Alle rechten voorbehouden.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all"
            aria-label="Terug naar boven"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
