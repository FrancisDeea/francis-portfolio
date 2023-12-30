'use client'

import type { DashProject } from "@/lib/definitions"
import { removeProject } from "@/services/projectServices"

import { DeleteIcon, ViewIcon, EditIcon, findIcon } from "@/ui/icons"
import TagList from "../TagList"

export default function DashProjectCard({ project }: { project: DashProject }) {
    const { id, title, description, image_url, technologies } = project
    const icons = technologies.map(item => findIcon(item))

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




        // <table className="bg-slate-200 text-black rounded-md w-full table-fixed">
        //     <thead className="h-5 text-left">
        //         <tr>
        //             <th className="px-2 pt-2 font-light ">Title</th>
        //             <th className="px-2 pt-2 font-light ">Technologies</th>
        //             <th className="px-2 pt-2 font-light bg-pink-300">Actions</th>
        //         </tr>
        //     </thead>
        //     <tbody className="font-semibold">
        //         <tr>
        //             <td className="px-2 pb-2">{title}</td>
        //             <td className="px-2 pb-2">{icons}</td>
        //             <td className="px-2 pb-2 flex item-center gap-3">
        //                 <button>
        //                     <ViewIcon />
        //                 </button>
        //                 <button>
        //                     <EditIcon />
        //                 </button>
        //                 <button onClick={() => removeProject(id)}>
        //                     <DeleteIcon />
        //                 </button>
        //             </td>
        //         </tr>
        //     </tbody>
        // </table>
    )
}