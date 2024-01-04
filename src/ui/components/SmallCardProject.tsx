/* eslint-disable @next/next/no-img-element */
import { DashProject } from "@/lib/definitions";
import { findIcon } from "../icons";

export default function SmallCardProject({ project }: { project: DashProject }) {
    const { id, title, description, image_url, technologies } = project

    return (
        <article className="min-h-max rounded-md overflow-hidden shadow-[0_-25px_40px_-12px_rgba(0,0,0,0.25)] shadow-white/10">
            <img
                src={`/project-images/${image_url}`}
                alt=""
                className="w-full h-[250px] aspect-video object-cover"
            />
            <div className="h-[calc(100%-250px)] p-4 flex flex-col gap-4 justify-evenly bg-dark">
                <div className="">
                    <h3 className="font-semibold text-tex2">{title}</h3>
                    <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
                        {technologies.map(technologie => findIcon(technologie))}
                    </div>
                </div>
            </div>
        </article>
    )
}