"use client";

import { createProject } from "@/lib/actions";
import Editor from "./Editor";
import { useFormStatus, useFormState } from "react-dom";
import useNotification from "@/hooks/useNotification";
import { useEffect, useState } from "react";
import { Categories } from "./Categories";
import { Category } from "@prisma/client";

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

export default function CreatePostForm({ categories }: {categories: Category[]}) {
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
    <form id="postForm" className="flex-1" action={formAction}>
      <input
        type="text"
        name="title"
        maxLength={120}
        placeholder="Enter title post"
        required
      />
      <input
        type="text"
        name="description"
        maxLength={200}
        placeholder="Enter short description post"
        required
      />
      <input
        type="text"
        name="hashtags"
        maxLength={255}
        placeholder="Enter hashtags (comma separated)"
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
          className="hidden"
        />
      </div>

      <Categories categories={categories} />

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
