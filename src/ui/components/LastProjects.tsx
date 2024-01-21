import Link from "next/link";
import SmallCardProject from "./SmallCardProject";

import { fetchLastProject } from "@/lib/dbdata";

import { Lang } from "@/lib/definitions";
import getDictionary from "@/dictionaries/dictionaries";

export default async function LastProjects({ lang }: { lang: Lang }) {
  const projects = await fetchLastProject(3);
  const {
    home: { projects: projectsDict },
  } = await getDictionary(lang);

  return (
    <section className="section bg-background2 col-span-full">
      <div className="ct-flex-col">
        <h2 className="">{projectsDict.title}</h2>
        <div className="custom-grid gap-6">
          {projects.map((project) => {
            return <SmallCardProject project={project} key={project.id} />;
          })}
        </div>
        <Link href={`/${lang}/projects`} className="btn-link">
          {projectsDict.button}
        </Link>
      </div>
    </section>
  );
}
