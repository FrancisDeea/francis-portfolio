import { fetchLastProject } from "@/lib/dbdata";
import SmallCardProject from "./SmallCardProject";
import Link from "next/link";
import { Lang } from "@/lib/definitions";

export default async function LastProjects({lang}: { lang: Lang}) {
    const projects = await fetchLastProject(3);

    return (
        <section className="section bg-background2 col-span-full">
            <div className="ct-flex-col">
                <h2 className="">Take a look at my latest project</h2>
                <div className="custom-grid gap-6">
                    {
                        projects.map(project => {
                            return <SmallCardProject project={project} key={project.id} />
                        })
                    }
                </div>
                <Link href={`/${lang}/projects`} className="btn-link">Ver todos</Link>
            </div>
        </section>
    )
}