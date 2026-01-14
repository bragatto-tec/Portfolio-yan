import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Eng. João Silva</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              engenheiro Civil especializado em projetos estruturais e
              acompanhamento de obras. Comprometido com a qualidade e excelência
              em cada projeto.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#projetos"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#curriculo"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Currículo
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/engjoaosilva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contato@engjoaosilva.com.br"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Eng. João Silva. Todos os direitos reservados.
          </p>
          <p className="text-background/40 text-xs mt-2">
            CREA-XX 12345 | Engenheiro Civil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
