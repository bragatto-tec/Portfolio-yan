import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contato");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#sobre");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/30 shadow-2xl">
              <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                <span className="text-sm text-center px-4">Sua foto aqui</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full flex items-center justify-center border-4 border-primary">
              <span className="text-accent-foreground text-xs font-bold text-center">CREA<br/>12345</span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center lg:text-left">
            <p className="text-primary-foreground/70 text-lg mb-2 uppercase tracking-widest">
              Engenheiro Civil
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
              João Silva
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-md mb-8">
              Especialista em projetos estruturais e acompanhamento de obras com mais de 10 anos de experiência no mercado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                Entre em Contato
              </Button>
              <Button
                onClick={scrollToAbout}
                variant="outline"
                size="lg"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 px-8"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
