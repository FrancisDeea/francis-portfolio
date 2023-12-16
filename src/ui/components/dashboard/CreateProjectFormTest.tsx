'use client'

import { useState } from "react"
import MDEditor from '@uiw/react-md-editor';
import Editor from "./Editor";

export default function CreateProjectFormTest() {
    const [md, setMd] = useState("")


    return (
        <form id="projectForm" className="">
            <label htmlFor="title_project">
                Enter project title:
            </label>
            <input id="title_project" type="text" maxLength={255} required />

            <label htmlFor="image_project">
                Enter imagen&apos;project url:
            </label>
            <input id="image_project" type="text" maxLength={255} />

            <label htmlFor="technologies_project">
                Enter technologies:
            </label>
            <input id="technologies_project" type="text" maxLength={200} required />

            <label htmlFor="description_project">
                Enter description:
            </label>

            <Editor />

            <input type="submit" value="Create" />
        </form>
    )
}