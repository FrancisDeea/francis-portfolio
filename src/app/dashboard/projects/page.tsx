import { fetchAllProjects } from "@/lib/dbdata"
import NavButton from "@/ui/components/NavButton"
import DashProjectCard from "@/ui/components/dashboard/DashProjectCard"

export default async function Projects() {
    const projects = await fetchAllProjects()

    return (
        <section className="bg-slate-300 w-full p-4 rounded-2xl">
            <div className="flex flex-row items-end justify-between w-full mb-4">
                <h1 className="text-3xl font-bold">Francis&apos;s Projects</h1>
                <NavButton path="/dashboard/projects/create" value="Create project" icon={null} customStyle="w-max" />
            </div>

            <div>
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