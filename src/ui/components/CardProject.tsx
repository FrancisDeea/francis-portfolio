/* eslint-disable @next/next/no-img-element */
import { DashProject } from "@/lib/definitions";
import { MDXRemote } from 'next-mdx-remote/rsc'
import { findIcon } from "../icons";

export default function CardProject({ project }: { project: DashProject }) {
    const { id, title, description, image_url, technologies } = project

    return (
        <article className="min-h-max border-2 border-alert/60 rounded-3xl overflow-hidden">
            <img
                src={`/project-images/${image_url}`}
                alt=""
                className="w-full h-[300px] aspect-video object-cover"
            />
            <div className="min-h-[250px] p-4 flex flex-col gap-4 justify-evenly bg-background2/60">
                <div>
                    <h3 className="font-semibold text-slate-100">{title}</h3>
                    <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
                        {technologies.map(technologie => findIcon(technologie))}
                    </div>
                </div>
                <MDXRemote source={description} />
                <div className="flex gap-4 justify-center items-center">
                    <a href="" target="_blank" className="btn-link">Source Code</a>
                    <a href="" target="_blank" className="btn-link">Live Demo</a>
                </div>
            </div>
        </article>
    )
}