"use client";

import { createProject } from "@/lib/actions";
import Editor from "./Editor";
import { useFormStatus, useFormState } from "react-dom";
import useNotification from "@/hooks/useNotification";
import { useEffect, useState } from "react";

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      aria-disabled={pending}
      disabled={pending}
      className="btn-link"
    >
      {pending ? "Submitting..." : "Create"}
    </button>
  );
};

export default function CreateProjectForm() {
  const [file, setFile] = useState<string | null>(null);
  const [formState, formAction] = useFormState(createProject, null);
  useNotification(formState);

  const handlePreview = () => {
    const preview = document.getElementById(
      "preview-modal"
    ) as HTMLDialogElement;
    preview.showModal();
  };

  useEffect(() => {
    const input = document.getElementById("image-file") as HTMLInputElement;
    function handleChange() {
      const fileList = input.files;
      if (fileList && fileList[0]) {
        setFile(fileList[0].name);
      }
    }

    input.addEventListener("change", handleChange);
    return () => input.removeEventListener("change", handleChange);
  });

  return (
    <form id="projectForm" className="flex-1" action={formAction}>
      <input
        id="title_project"
        type="text"
        name="title"
        maxLength={255}
        placeholder="Enter project title"
        required
      />
      <input
        id="live_url_project"
        type="text"
        name="live_url"
        maxLength={255}
        placeholder="Enter project live url"
        required
      />
      <input
        id="github_url_project"
        type="text"
        name="github_url"
        maxLength={255}
        placeholder="Enter project github url"
        required
      />

      <div className="flex gap-4 w-full items-center">
        <label htmlFor="image-file" className={`btn-link py-1 text-center`}>
          Upload image
        </label>
        <span className="max-lg:text-sm">
          {!file ? "Ninguna imagen seleccionada" : file}
        </span>
        <input
          id="image-file"
          type="file"
          name="main-image"
          className=""
        />
      </div>

      <input
        id="technologies_project"
        type="text"
        name="technologies"
        maxLength={200}
        placeholder="Enter technologies"
        required
      />

      <Editor />

      <div className="flex gap-2 justify-center lg:justify-start">
        <Submit />
        <button type="button" onClick={handlePreview} className="btn-link">
          Show preview
        </button>
      </div>
    </form>
  );
}
