/* eslint-disable @next/next/no-img-element */
import CardProject from "@/ui/components/CardProject";

import { fetchAllProjects } from "@/lib/dbdata";

import getDictionary from "@/dictionaries/dictionaries";
import { Lang } from "@/lib/definitions";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: Lang };
}) {
  const projects = await fetchAllProjects();
  const { projects: projectsDict } = await getDictionary(lang);

  return (
    <main className="max-lg:p-4 py-4">
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
