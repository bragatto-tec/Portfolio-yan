import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const projectsData: Record<string, {
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  category: string;
  location: string;
  year: string;
  area: string;
  services: string[];
}> = {
  "1": {
    title: "Edifício Residencial Aurora",
    description: "Projeto estrutural completo para edifício de 12 pavimentos com estrutura em concreto armado.",
    fullDescription: "O Edifício Aurora é um empreendimento residencial de alto padrão localizado em uma das áreas mais valorizadas da cidade. O projeto estrutural foi desenvolvido com foco em segurança, durabilidade e otimização de custos. Utilizamos tecnologia BIM para garantir a precisão do projeto e evitar conflitos com as demais disciplinas. A estrutura em concreto armado foi dimensionada seguindo as normas ABNT vigentes, com especial atenção às fundações profundas devido às características do solo local.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    ],
    category: "Residencial",
    location: "São Paulo, SP",
    year: "2023",
    area: "8.500 m²",
    services: ["Projeto Estrutural", "Cálculo de Fundações", "Acompanhamento de Obra", "ART"],
  },
  "2": {
    title: "Galpão Industrial MetalTech",
    description: "Projeto de estrutura metálica para galpão industrial com 2.000m² de área construída.",
    fullDescription: "O galpão MetalTech foi projetado para atender às necessidades de uma indústria metalúrgica em expansão. A escolha pela estrutura metálica permitiu vãos livres de até 30 metros, proporcionando flexibilidade para o layout interno da fábrica. O projeto considerou todas as cargas dinâmicas dos equipamentos industriais, além de um sistema de ponte rolante com capacidade de 10 toneladas.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    ],
    category: "Industrial",
    location: "Campinas, SP",
    year: "2022",
    area: "2.000 m²",
    services: ["Projeto Estrutura Metálica", "Cálculo de Ponte Rolante", "Projeto de Fundações"],
  },
  "3": {
    title: "Centro Comercial Plaza",
    description: "Acompanhamento de obra e fiscalização de centro comercial com 50 lojas.",
    fullDescription: "O Centro Comercial Plaza é um shopping de bairro que concentra lojas de varejo, serviços e alimentação. Atuei como responsável técnico pelo acompanhamento da obra, garantindo que a execução seguisse fielmente o projeto estrutural e as boas práticas de construção. Realizei visitas técnicas semanais, elaborando relatórios fotográficos e de conformidade.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    ],
    category: "Comercial",
    location: "Santo André, SP",
    year: "2023",
    area: "5.200 m²",
    services: ["Acompanhamento de Obra", "Fiscalização", "Relatórios Técnicos"],
  },
  "4": {
    title: "Residência Família Santos",
    description: "Projeto estrutural e acompanhamento de obra para residência de alto padrão.",
    fullDescription: "Esta residência unifamiliar de alto padrão foi projetada com uma arquitetura contemporânea que demandou soluções estruturais criativas. O projeto incluiu grandes balanços, lajes nervuradas aparentes e uma piscina em balanço no segundo pavimento. Trabalhei em estreita colaboração com o arquiteto para viabilizar todas as demandas estéticas sem comprometer a segurança estrutural.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    ],
    category: "Residencial",
    location: "Alphaville, SP",
    year: "2024",
    area: "650 m²",
    services: ["Projeto Estrutural", "Acompanhamento de Obra", "Consultoria Técnica"],
  },
  "5": {
    title: "Ponte sobre Rio Verde",
    description: "Projeto estrutural de ponte em concreto protendido com 80 metros de extensão.",
    fullDescription: "A ponte sobre o Rio Verde foi projetada para substituir uma antiga estrutura de madeira que não atendia mais às demandas de tráfego da região. O projeto utilizou concreto protendido para permitir vãos maiores e reduzir o número de pilares no leito do rio. A obra foi executada com acompanhamento técnico rigoroso devido às condições desafiadoras do local.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
    ],
    category: "Infraestrutura",
    location: "Interior de SP",
    year: "2021",
    area: "640 m²",
    services: ["Projeto em Concreto Protendido", "Cálculo de Fundações Especiais", "ART"],
  },
  "6": {
    title: "Hospital Regional",
    description: "Laudo técnico e projeto de reforma estrutural para ampliação hospitalar.",
    fullDescription: "O Hospital Regional necessitava de uma ampliação para atender à demanda crescente da população local. Antes de iniciar o projeto de ampliação, realizei um laudo técnico completo da estrutura existente, avaliando sua capacidade de receber novos pavimentos. O projeto de reforma estrutural incluiu reforços em pilares e vigas para suportar as novas cargas.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&h=800&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
    ],
    category: "Institucional",
    location: "Sorocaba, SP",
    year: "2022",
    area: "3.800 m²",
    services: ["Laudo Técnico", "Projeto de Reforma Estrutural", "Reforço Estrutural"],
  },
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectsData[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/">
            <Button>Voltar para a Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] mt-16">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 text-sm uppercase tracking-wide rounded mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-background mb-2">
              {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <Link to="/#projetos">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar para Projetos
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Sobre o Projeto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {project.fullDescription}
            </p>

            {/* Gallery */}
            {project.gallery.length > 1 && (
              <>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Galeria de Imagens
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${project.title} - Imagem ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h3 className="font-bold text-foreground mb-4">
                Informações do Projeto
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">Localização</span>
                    <p className="font-medium">{project.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">Ano</span>
                    <p className="font-medium">{project.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-sm text-muted-foreground">Área</span>
                    <p className="font-medium">{project.area}</p>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-border" />

              <h4 className="font-bold text-foreground mb-3">Serviços Realizados</h4>
              <ul className="space-y-2">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {service}
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-border" />

              <Link to="/#contato">
                <Button className="w-full">
                  Solicitar Orçamento
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
