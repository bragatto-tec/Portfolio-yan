import { Building2, Award, ClipboardList, HardHat } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Projetos Estruturais",
      description:
        "Elaboração de projetos estruturais para edificações residenciais e comerciais.",
    },
    {
      icon: ClipboardList,
      title: "Laudos Técnicos",
      description: "Laudos de vistoria, avaliação e inspeção predial.",
    },
    {
      icon: HardHat,
      title: "Acompanhamento de Obras",
      description: "Gerenciamento e fiscalização de obras de construção civil.",
    },
    {
      icon: Award,
      title: "Consultoria",
      description:
        "Consultoria técnica especializada para construtoras e incorporadoras.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Formação e Experiência
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Cursando Engenharia Civil pela Universidade de Brasília, com
                especialização em Estruturas de Concreto. Possuo mais de 2 anos
                de experiência no mercado, atuando em projetos de pequeno a
                grande porte.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Ao longo da minha carreira, desenvolvi expertise em projetos
                estruturais, acompanhamento de obras, elaboração de laudos
                técnicos e consultoria para empresas do setor da construção
                civil.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="bg-accent/10 px-4 py-2 rounded">
                  <span className="text-accent font-bold">+30 Projetos</span>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-lg p-8">
              <h4 className="font-bold text-foreground mb-4">
                Áreas de Atuação:
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Projetos Estruturais em Concreto Armado
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Projetos em Estrutura Metálica
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Reformas e Ampliações
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Regularização de Obras
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  Perícias e Vistorias Técnicas
                </li>
              </ul>
            </div>
          </div>

          {/* Service Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
