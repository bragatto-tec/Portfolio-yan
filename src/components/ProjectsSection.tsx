import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: "1",
    title: "Edifício Residencial Aurora",
    description: "Projeto estrutural completo para edifício de 12 pavimentos com estrutura em concreto armado.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
    category: "Residencial",
  },
  {
    id: "2",
    title: "Galpão Industrial MetalTech",
    description: "Projeto de estrutura metálica para galpão industrial com 2.000m² de área construída.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    category: "Industrial",
  },
  {
    id: "3",
    title: "Centro Comercial Plaza",
    description: "Acompanhamento de obra e fiscalização de centro comercial com 50 lojas.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    category: "Comercial",
  },
  {
    id: "4",
    title: "Residência Família Santos",
    description: "Projeto estrutural e acompanhamento de obra para residência de alto padrão.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    category: "Residencial",
  },
  {
    id: "5",
    title: "Ponte sobre Rio Verde",
    description: "Projeto estrutural de ponte em concreto protendido com 80 metros de extensão.",
    image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=400&fit=crop",
    category: "Infraestrutura",
  },
  {
    id: "6",
    title: "Hospital Regional",
    description: "Laudo técnico e projeto de reforma estrutural para ampliação hospitalar.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=600&h=400&fit=crop",
    category: "Institucional",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi ao longo da minha carreira. 
            Clique em cada card para ver mais detalhes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

export { projects };
