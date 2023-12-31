/* eslint-disable @next/next/no-img-element */
import { fetchAllProjects } from '@/lib/dbdata'
import CardProject from '@/ui/components/CardProject'

export default async function Projects() {
    const projects = await fetchAllProjects()

    return (
        <main className='max-lg:p-4 py-4'>
            <section className='ct-flex-col'>
                <h1>Take a look at my latest project</h1>
                <div className='custom-grid gap-x-8 gap-y-12 max-md:gap-y-10'>
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