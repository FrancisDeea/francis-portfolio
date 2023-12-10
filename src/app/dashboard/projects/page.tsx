import { fetchAllProjects } from "@/lib/dbdata"
import DashProjectCard from "@/ui/components/dashboard/DashProjectCard"

export default async function Projects() {
    const projects = await fetchAllProjects()

    return (
        <section className="bg-slate-900 w-full p-4">
            <h1 className="text-black">Hello Projects</h1>
            {
                projects.map(project => {
                    return (
                        <DashProjectCard
                            key={project.id}
                            project={project}
                        />
                    )
                })
            }
        </section>
    )
}