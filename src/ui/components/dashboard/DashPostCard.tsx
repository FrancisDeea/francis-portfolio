"use client";

import { removePost } from "@/services/projectServices";

import { DeleteIcon, ViewIcon, EditIcon, findIcon } from "@/ui/icons";
import { Post } from "@prisma/client";

export default function DashPostCard({ post }: { post: Post }) {
  const { id, title_es, hashtags } = post;

  return (
    <div className="ct-flex-row items-stretch border border-medium rounded-md p-4 bg-background2 max-lg:gap-6 max-lg:overflow-scroll">
      <div className="ct-flex-col justify-between gap-1 flex-1 max-lg:min-w-max">
        <span className="">Título</span>
        <span className="font-semibold">{title_es}</span>
      </div>
      <div className="ct-flex-col justify-between gap-1 flex-1 max-lg:min-w-max">
        <span className="">Hashtags</span>
        <div className="ct-flex-row">{hashtags}</div>
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
          <button onClick={() => removePost(id)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
