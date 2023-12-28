'use client'

import { deleteProject } from "@/lib/actions";

export const uploadFile = async (formData: FormData) => {
  const response = await fetch("/upload-project-image", {
    method: "POST",
    body: formData,
  });
  return await response.json();
};

export const removeProject = async (id: string) => {
  if (confirm("Are you sure you want to delete this project?")) {
    try {
      await deleteProject(id);
    } catch (err) {
      console.error(err as Error);
    }
  }
  return;
};
