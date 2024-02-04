/* eslint-disable @next/next/no-img-element */
import CardProject from "@/ui/components/CardProject";

import { fetchAllProjects } from "@/lib/dbdata";

import getDictionary from "@/dictionaries/dictionaries";
import { Lang } from "@/lib/definitions";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params: { lang } }: { params: { lang: Lang } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  return {
    title:
      lang === "es"
        ? "Proyectos | Portfolio de Aplicaciones Web"
        : "Projects | Web Applications Portfolio",
    description:
      lang === "es"
        ? "Echa un vistazo a mis últimos proyectos y aplicaciones web."
        : "Take a look at my latest project and web applications.",
    keywords: ["Programador", "web", "JavaScript", "React", "Málaga"],
    referrer: "strict-origin-when-cross-origin",
    openGraph: {
      images: "",
    },
  };
}

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const projects = await fetchAllProjects();
  const { projects: projectsDict } = await getDictionary(lang);

  return (
    <main className="w-[calc(100%-1.5rem)] pt-4">
      <section className="ct-flex-col">
        <h1>{projectsDict.title}</h1>
        <div className="custom-grid gap-x-8 gap-y-12 max-md:gap-y-10">
          {projects.map((project) => {
            return <CardProject key={project.id} project={project} />;
          })}
        </div>
      </section>
    </main>
  );
}
