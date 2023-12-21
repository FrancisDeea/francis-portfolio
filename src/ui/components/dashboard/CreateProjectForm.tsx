'use client'

import { createProject } from "@/lib/actions";
import Editor from "./Editor";

export default function CreateProjectForm() {

    const handlePreview = () => {
        const preview = document.getElementById('preview-modal') as HTMLDialogElement
        preview.showModal()
    }

    return (
        <form id="projectForm" className="" action={createProject}>

            <input id="title_project" type="text" name="title" maxLength={255} placeholder="Enter project title" required />

            <input id="image_project" type="text" name="image" maxLength={255} placeholder="Enter imagen&apos;project url" required />

            <input id="technologies_project" type="text" name="technologies" maxLength={200} placeholder="Enter technologies" required />

            <Editor />

            <div className="flex gap-2 justify-center lg:justify-start">
                <input type="submit" value="Create" />
                <button type="button" onClick={handlePreview} className="preview">Show preview</button>
            </div>
        </form>
    )
}