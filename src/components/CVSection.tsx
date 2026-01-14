import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const CVSection = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual CV file
    alert("Em uma aplicação real, aqui seria feito o download do CV em PDF.");
  };

  return (
    <section id="curriculo" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary-foreground/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText className="w-10 h-10 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Baixe meu Currículo
          </h2>
          <div className="w-24 h-1 bg-primary-foreground/30 mx-auto mb-6"></div>

          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Faça o download do meu currículo completo em PDF para conhecer mais
            sobre minha formação, experiência profissional e projetos
            realizados.
          </p>

          <Button
            onClick={handleDownload}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-6 text-lg"
          >
            <Download className="mr-3 w-5 h-5" />
            Download do CV (PDF)
          </Button>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/70">
            <div>
              <span className="block text-3xl font-bold text-primary-foreground">
                2+
              </span>
              <span className="text-sm">Anos de Experiência</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-primary-foreground">
                30+
              </span>
              <span className="text-sm">Projetos Realizados</span>
            </div>
            <div>
              <span className="block text-3xl font-bold text-primary-foreground">
                100%
              </span>
              <span className="text-sm">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;
