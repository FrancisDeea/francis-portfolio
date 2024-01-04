import { CloseIcon } from "@/ui/icons"
import { marked } from "marked"
import { FormEvent, FormEventHandler } from "react";

export default function Preview({ markdown }: { markdown: string }) {

    const handleDialog = () => {
        const dialog = document.getElementById('preview-modal') as HTMLDialogElement
        dialog.close()
    }

    return (
        <dialog id="preview-modal" className="rounded-3xl bg-background2 text-text h-[90vh] w-[90vw] max-w-2xl fixed inset-0 p-4 shadow-lg backdrop:bg-black/80">
            <h3>Preview</h3>
            <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
                className="mt-5">
            </div>
            <button type="button" onClick={handleDialog} className="absolute top-3 right-4"><CloseIcon customClass={null} /></button>
        </dialog>
    )
}