/* eslint-disable @next/next/no-img-element */
import { fetchAllProjects } from '@/lib/dbdata'
import CardProject from '@/ui/components/CardProject'

export default async function Projects() {
    const projects = await fetchAllProjects()

    return (
        <main>
            <section className='ct-flex-col'>
                <h1>Take a look at my latest project</h1>
                <div className='custom-grid gap-8'>
                    {
                        projects.map(project => {
                            return (
                                <CardProject
                                    key={project.id}
                                    project={project}
                                />
                            )
                        })
                    }
                </div>
            </section>
        </main>

    )
}