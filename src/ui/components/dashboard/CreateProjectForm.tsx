'use client'

import { createProject } from "@/lib/actions";
import Editor from "./Editor";
import { useFormStatus, useFormState } from "react-dom";
import { useState } from "react";
import useNotification from "@/hooks/useNotification";

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <button type="submit" aria-disabled={pending} disabled={pending} className="preview">{pending ? "Submitting..." : "Create"}</button>
    )
}

export default function CreateProjectForm() {
    const [toggle, setToggle] = useState(false)
    const [formState, formAction] = useFormState(createProject, null)
    useNotification(formState)

    const handlePreview = () => {
        const preview = document.getElementById('preview-modal') as HTMLDialogElement
        preview.showModal()
    }

    return (
        <form id="projectForm" className="" action={formAction}>

            <input id="title_project" type="text" name="title" maxLength={255} placeholder="Enter project title" required />

            <div className="flex gap-4 w-full items-center">
                <div className="flex flex-row items-center gap-2 w-max">
                    <label onClick={() => setToggle(true)} htmlFor="image-url" className={`w-max bg-black rounded-md text-center py-1 px-2 cursor-pointer ${toggle ? "bg-black" : "bg-black/20"}`}>Type url</label>
                    <span>or</span>
                    <label onClick={() => setToggle(false)} htmlFor="image-file" className={`w-max bg-black rounded-md text-center py-1 px-2 cursor-pointer ${!toggle ? "bg-black" : "bg-black/20"}`}>Upload file to server</label>
                </div>

                {toggle && <input id="image-url" type="text" name="main-image" maxLength={255} placeholder="Enter imagen&apos;project url" />}
                {!toggle && <input id="image-file" type="file" name="main-image" />}
            </div>

            <input id="technologies_project" type="text" name="technologies" maxLength={200} placeholder="Enter technologies" required />

            <Editor />

            <div className="flex gap-2 justify-center lg:justify-start">
                <Submit />
                <button type="button" onClick={handlePreview} className="preview">Show preview</button>
            </div>
        </form>
    )
}