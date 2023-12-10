import type { DashProject } from "@/lib/definitions"
import { DeleteIcon, ViewIcon, EditIcon } from "@/ui/icons"
import TagList from "../TagList"

export default function DashProjectCard({ project }: { project: DashProject }) {
    const { id, title, description, image_url, technologies } = project
    return (
        <table className="bg-slate-200 text-black rounded-md w-full">
            <thead className="h-5 text-left">
                <tr>
                    <th className="px-2 pt-2 font-light">Id</th>
                    <th className="px-2 pt-2 font-light">Title</th>
                    <th className="px-2 pt-2 font-light">Technologies</th>
                    <th className="px-2 pt-2 font-light">Actions</th>
                </tr>
            </thead>
            <tbody className="font-semibold">
                <tr>
                    <td className="px-2 pb-2">{id}</td>
                    <td className="px-2 pb-2">{title}</td>
                    <td className="px-2 pb-2">{<TagList technologies={technologies} />}</td>
                    <td className="px-2 pb-2 flex item-center gap-3">
                        <button>
                            <ViewIcon />
                        </button>
                        <button>
                            <EditIcon />
                        </button>
                        <button>
                            <DeleteIcon />
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>
    )
}