import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-24 h-24 bg-red-100 text-primary rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl font-black">404</span>
        </div>
        <h1 className="text-3xl font-bold text-foreground">Pagina niet gevonden</h1>
        <p className="text-muted-foreground">
          De pagina die u zoekt bestaat niet of is verplaatst. Controleer de URL of ga terug naar de homepagina.
        </p>
        <div className="pt-4">
          <Link href="/">
            <Button size="lg" className="rounded-xl gap-2">
              <Home className="w-4 h-4" />
              Terug naar Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
