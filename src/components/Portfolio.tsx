import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript",
    image: "/project1.jpg",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "Mobile-first e-commerce platform with modern UI/UX",
    image: "/project2.jpg",
    tags: ["Next.js", "Redux", "Node.js"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "Real-time dashboard with data visualization",
    image: "/project3.jpg",
    tags: ["React", "D3.js", "Firebase"],
    link: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Here are some of my recent works and projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <Card className="h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;