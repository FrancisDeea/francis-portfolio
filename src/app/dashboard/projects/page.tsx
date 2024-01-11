import { fetchAllProjects } from "@/lib/dbdata"
import NavButton from "@/ui/components/NavButton"
import DashProjectCard from "@/ui/components/dashboard/DashProjectCard"
import { CreateIcon } from "@/ui/icons"

export default async function Projects() {
    const projects = await fetchAllProjects()

    return (
        <section className="section w-full overflow-y-scroll scrollbar-hide">
            <div className="ct-flex-row justify-between items-end mb-4">
                <h1 className="">Francis&apos;s Projects</h1>
                <NavButton path="/dashboard/projects/create" value="Create project" icon={<CreateIcon />} customStyle="w-max" />
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