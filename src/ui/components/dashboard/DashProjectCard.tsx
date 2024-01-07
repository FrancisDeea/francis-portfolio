"use client";

import type { Project } from "@/lib/definitions";
import { removeProject } from "@/services/projectServices";

import { DeleteIcon, ViewIcon, EditIcon, findIcon } from "@/ui/icons";

export default function DashProjectCard({ project }: { project: Project }) {
  const { id, title, description, image_url, technologies } = project;
  const icons = technologies.map((item) => findIcon(item));

  return (
    <div className="ct-flex-row items-stretch border border-medium rounded-md p-4 bg-background2 max-lg:gap-6 max-lg:overflow-scroll">
      <div className="ct-flex-col justify-between gap-1 flex-1 max-lg:min-w-max">
        <span className="">Título</span>
        <span className="font-semibold">{title}</span>
      </div>
      <div className="ct-flex-col justify-between gap-1 flex-1 max-lg:min-w-max">
        <span className="">Tecnologías</span>
        <div className="ct-flex-row">{icons}</div>
      </div>
      <div className="ct-flex-col justify-between gap-1 flex-1 max-lg:min-w-max">
        <span>Acciones</span>
        <div className="ct-flex-row">
          <button>
            <ViewIcon />
          </button>
          <button>
            <EditIcon />
          </button>
          <button onClick={() => removeProject(id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
