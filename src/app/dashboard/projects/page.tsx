import { fetchAllProjects } from "@/lib/dbdata"
import NavButton from "@/ui/components/NavButton"
import DashProjectCard from "@/ui/components/dashboard/DashProjectCard"

export default async function Projects() {
    const projects = await fetchAllProjects()

    return (
        <section className="section w-full">
            <div className="ct-flex-row justify-between items-end mb-4">
                <h1 className="">Francis&apos;s Projects</h1>
                <NavButton path="/dashboard/projects/create" value="Create project" icon={null} customStyle="w-max" />
            </div>

            <div className="ct-flex-col">
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
            </div>
        </section>
    )
}