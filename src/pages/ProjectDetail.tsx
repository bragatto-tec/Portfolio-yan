import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { client } from "@/lib/contentful";

interface Project {
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
}

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      if (!id) return;

      try {
        const entry: any = await client.getEntry(id);

        // Mapeia os dados do Contentful para o formato usado no layout
        setProject({
          title: entry.fields.title,
          description: entry.fields.description,
          fullDescription: entry.fields.fullDescription,
          image: entry.fields.image?.fields?.file?.url
            ? `https:${entry.fields.image.fields.file.url}`
            : "",
          gallery: entry.fields.gallery
            ? entry.fields.gallery.map(
                (img: any) => `https:${img.fields.file.url}`
              )
            : [],
          category: entry.fields.category,
          location: entry.fields.location,
          year: entry.fields.year,
          area: entry.fields.area,
          services: entry.fields.services || [],
        });
      } catch (error) {
        console.error("Erro ao buscar projeto:", error);
        setProject(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Carregando detalhes do projeto...</div>
      </div>
    );
  }

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
            <p className="text-muted-foreground leading-relaxed mb-8 whitespace-pre-wrap">
              {project.fullDescription}
            </p>

            {/* Gallery */}
            {project.gallery.length > 0 && (
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
                    <span className="text-sm text-muted-foreground">
                      Localização
                    </span>
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

              <h4 className="font-bold text-foreground mb-3">
                Serviços Realizados
              </h4>
              <ul className="space-y-2">
                {project.services.map((service, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {service}
                  </li>
                ))}
              </ul>

              <hr className="my-6 border-border" />

              <Link to="/#contato">
                <Button className="w-full">Solicitar Orçamento</Button>
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
