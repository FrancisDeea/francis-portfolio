import { CloseIcon } from "@/ui/icons"
import { marked } from "marked"
import { FormEvent, FormEventHandler } from "react";

export default function Preview({ markdown }: { markdown: string }) {

    const handleDialog = () => {
        const dialog = document.getElementById('preview-modal') as HTMLDialogElement
        dialog.close()
    }

    return (
        <dialog id="preview-modal" className="rounded-xl bg-slate-200 h-[90vh] w-[90vw] max-w-2xl fixed inset-0 p-4 shadow-lg backdrop:bg-black/80">
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
                className="">
            </div>
            <button type="button" onClick={handleDialog} className="absolute top-5 right-5"><CloseIcon /></button>
        </dialog>
    )
}