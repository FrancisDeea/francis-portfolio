"use server";

import { sql } from "@vercel/postgres";
import { technologiesToPSQLArray } from "./utils";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const createProjectSchema = z.object({
  title: z.string({
    invalid_type_error: "Invalid project title",
  }),
  image: z.string().url({
    message: "You have to specify a valid url",
  }),
  technologies: z.string().array().nonempty({
    message: "You have to specify at least one technology",
  }),
  // technologies: z.string({
  //   invalid_type_error: "Invalid project title",
  // }),
  description: z.string({
    invalid_type_error: "Invalid description",
  }),
});

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

  console.log(title, image, technologies, description);

  const postgresqTechArray = await technologiesToPSQLArray(technologies);

  try {
    await sql`INSERT INTO projects(title, image_url, technologies, description)
      VALUES(${title}, ${image}, ${postgresqTechArray}, ${description})`;
  } catch (err) {
    console.error(err);
    return {
      message: JSON.stringify(`Failed to save project in DDBB: ${err}`),
      status: "error",
    };
  }

  revalidatePath("/dashboard/projects");

  return {
    message: "Project created successfully!",
    status: "success",
  };
}
