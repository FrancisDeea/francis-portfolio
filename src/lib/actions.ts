"use server";

import { sql } from "@vercel/postgres";
import { technologiesToPSQLArray } from "./utils";
import { z } from "zod";

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

export async function createProject(formData: FormData) {
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
    console.log(validatedFormData.error.flatten().fieldErrors);
    return {
      error: validatedFormData.error.flatten().fieldErrors,
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
  }
}
