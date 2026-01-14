import { useEffect, useState } from "react"; // Adicionar imports
import ProjectCard from "./ProjectCard";
import { client } from "@/lib/contentful"; // Importar o cliente

// Defina a interface (ou use 'any' se preferir simplificar agora)
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Substitua 'projeto' pelo ID do seu Content Type no Contentful
        const response = await client.getEntries({ content_type: "projeto" });

        const formattedProjects = response.items.map((item: any) => ({
          id: item.sys.id,
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.image?.fields?.file?.url
            ? `https:${item.fields.image.fields.file.url}`
            : "",
          category: item.fields.category,
        }));

        setProjects(formattedProjects);
      } catch (error) {
        console.error("Erro ao buscar projetos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading)
    return <div className="text-center py-20">Carregando projetos...</div>;

  return (
    <section id="projetos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* ... (O cabeçalho com h2 e p mantém igual) ... */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi ao longo da minha
            carreira. Clique em cada card para ver mais detalhes.
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
