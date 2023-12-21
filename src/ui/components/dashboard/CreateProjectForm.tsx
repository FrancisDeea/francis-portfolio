'use client'

import { createProject } from "@/lib/actions";
import Editor from "./Editor";
import { useFormStatus, useFormState } from "react-dom";
import useNotification from "@/hooks/useNotification";

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending} disabled={pending} className="preview">{pending ? "Submitting..." : "Create"}</button>
    )

}

export default function CreateProjectForm() {
    const [formState, formAction] = useFormState(createProject, null)
    useNotification(formState)

    const handlePreview = () => {
        const preview = document.getElementById('preview-modal') as HTMLDialogElement
        preview.showModal()
    }

    return (
        <form id="projectForm" className="" action={formAction}>

            <input id="title_project" type="text" name="title" maxLength={255} placeholder="Enter project title" required />

            <input id="image_project" type="text" name="image" maxLength={255} placeholder="Enter imagen&apos;project url" required />

            <input id="technologies_project" type="text" name="technologies" maxLength={200} placeholder="Enter technologies" required />

            <Editor />

            <div className="flex gap-2 justify-center lg:justify-start">
                <Submit />
                <button type="button" onClick={handlePreview} className="preview">Show preview</button>
            </div>
        </form>
    )
}