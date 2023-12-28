/* eslint-disable @next/next/no-img-element */
import { fetchAllProjects } from '@/lib/dbdata'
import CardProject from '@/ui/components/CardProject'
import { revalidatePath } from 'next/cache'

export default async function Projects() {
    const projects = await fetchAllProjects()
    console.log(projects)

    return (
        <section className=''>
            <h1>Hello projects</h1>
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
                <article className="min-h-max border-2 border-alert/60 rounded-3xl overflow-hidden">
                    <img
                        src={`/project-images/pomodoro-app.webp`}
                        alt=""
                        className="w-full aspect-video object-cover"
                    />
                    <div className="min-h-[250px] p-4 flex flex-col gap-4 justify-evenly bg-background2/60">
                        <div>
                            <h3 className="text-slate-50">Pomodoro</h3>
                            <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
                                <span>React</span>
                                <span>React</span>
                            </div>
                        </div>
                        <p>Esto es una descripcion del proyecto fals</p>
                        <div className="flex gap-4 justify-center items-center">
                            <a href="" target="_blank" className="btn-link">Source Code</a>
                            <a href="" target="_blank" className="btn-link">Live Demo</a>
                        </div>
                    </div>
                </article>
                <article className="min-h-max border-2 border-alert/60 rounded-3xl overflow-hidden">
                    <img
                        src={`/project-images/pomodoro-app.webp`}
                        alt=""
                        className="w-full aspect-video object-cover"
                    />
                    <div className="min-h-[250px] p-4 flex flex-col gap-4 justify-evenly bg-background2/60">
                        <div>
                            <h3 className="font-semibold text-slate-100">Pomodoro</h3>
                            <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
                                <span>React</span>
                                <span>React</span>
                            </div>
                        </div>
                        <p>Esto es una descripcion del proyecto fals</p>
                        <div className="flex gap-4 justify-center items-center">
                            <a href="" target="_blank" className="btn-link">Source Code</a>
                            <a href="" target="_blank" className="btn-link">Live Demo</a>
                        </div>
                    </div>
                </article>
                <article className="min-h-max border-2 border-alert/60 rounded-3xl overflow-hidden">
                    <img
                        src={`/project-images/pomodoro-app.webp`}
                        alt=""
                        className="w-full aspect-video object-cover"
                    />
                    <div className="min-h-[250px] p-4 flex flex-col gap-4 justify-evenly bg-background2/60">
                        <div>
                            <h3 className="font-semibold text-slate-100">Pomodoro</h3>
                            <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
                                <span>React</span>
                                <span>React</span>
                            </div>
                        </div>
                        <p>Esto es una descripcion del proyecto fals</p>
                        <div className="flex gap-4 justify-center items-center">
                            <a href="" target="_blank" className="btn-link">Source Code</a>
                            <a href="" target="_blank" className="btn-link">Live Demo</a>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}