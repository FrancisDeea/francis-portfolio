/* eslint-disable @next/next/no-img-element */
import { DashProject } from "@/lib/definitions";
import { findIcon } from "../icons";

export default function SmallCardProject({ project }: { project: DashProject }) {
    const { id, title, description, image_url, technologies } = project

    return (
        <article className="min-h-max border-2 border-medium rounded-md overflow-hidden">
            <img
                src={`/project-images/${image_url}`}
                alt=""
                className="w-full h-[250px] aspect-video object-cover"
            />
            <div className="h-[calc(100%-250px)] p-4 flex flex-col gap-4 justify-evenly bg-dark">
                <div className="">
                    <h3 className="font-semibold text-slate-100">{title}</h3>
                    <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
                        {technologies.map(technologie => findIcon(technologie))}
                    </div>
                </div>
            </div>
        </article>
    )
}