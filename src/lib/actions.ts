"use server";

import { sql } from "@vercel/postgres";
import { technologiesToPSQLArray } from "./utils";
import { createProjectSchema } from "./zodSchemas";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(prevState: any, formData: FormData) {
  const technologiesRawData = (
    formData.get("technologies") as string
  ).toString();
  const technologiesToArray: string[] = technologiesRawData
    ?.replace(/\s*,\s*/g, ",")
    .replace(/^,*|,*$/g, "")
    .replace(/,+/g, ",")
    .split(",");

  const validatedFormData = createProjectSchema.safeParse({
    title: formData.get("title"),
    image: formData.get("image"),
    technologies: technologiesToArray,
    description: formData.get("description"),
  });

  if (!validatedFormData.success) {
    return {
      message: JSON.stringify(
        Object.values(validatedFormData.error.flatten().fieldErrors).join(", ")
      ),
      status: "error",
    };
  }

  const { title, image, technologies, description } = validatedFormData.data;

  const postgresqTechArray = await technologiesToPSQLArray(technologies);

  try {
    await sql`INSERT INTO projects(title, image_url, technologies, description)
      VALUES(${title}, ${image}, ${postgresqTechArray}, ${description})`;
  } catch (err) {
    console.error(err);
    return {
      message: JSON.stringify(`Failed to save project in DDBB: ${err.code}`),
      status: "error",
    };
  }

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");

  return {
    message: "Project created successfully!",
    status: "success",
  };
}

export async function deleteProject(id: string) {
  try {
    await sql`DELETE FROM projects WHERE id = ${id}`;
  } catch (err) {
    console.error(err);
    throw new Error(
      JSON.stringify(`Failed to save project in DDBB: ${err.code}`)
    );
  }
  revalidatePath("/dashboard/projects");
}
