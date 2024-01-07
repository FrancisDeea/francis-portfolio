import { fetchLastProject } from "@/lib/dbdata";
import SmallCardProject from "./SmallCardProject";
import Link from "next/link";

export default async function LastProjects() {
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
                <Link href="/projects" className="btn-link">Ver todos</Link>
            </div>
        </section>
    )
}