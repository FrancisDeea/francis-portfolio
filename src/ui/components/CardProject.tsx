/* eslint-disable @next/next/no-img-element */
import { Project } from "@/lib/definitions";
import { MDXRemote } from "next-mdx-remote/rsc";
import { findIcon } from "../icons";

export default function CardProject({ project }: { project: Project }) {
  const { title, description, image_url, technologies, live_url, github_url } =
    project;

  return (
    <article className="section rounded-md bg-dark p-0 min-h-max overflow-hidden">
      <img
        src={`/project-images/${image_url}`}
        alt=""
        className="w-full h-[250px] aspect-video object-cover"
      />
      <div className="h-[calc(100%-250px)] p-4 ct-flex-col">
        <div>
          <h3 className="">{title}</h3>
          <div className="h-min mt-1 flex gap-4 justify-start items-center font-light">
            {technologies.map((technologie) => (
              <span key={technologie}>{findIcon(technologie)}</span>
            ))}
          </div>
        </div>
        <MDXRemote source={description} />
        <div className="ct-flex-row justify-center">
          <a href={github_url} target="_blank" className="btn-link">
            Source Code
          </a>
          <a href={live_url} target="_blank" className="btn-link">
            Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}
