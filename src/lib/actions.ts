"use server";

import { sql } from "@vercel/postgres";
import { z } from "zod";

const createProjectSchema = z.object({
  title: z.string({
    invalid_type_error: "Invalid project title",
  }),
  image: z.string().url({
    message: "You have to specify a valid url",
  }),
  // technologies: z.string().array().nonempty({
  //   message: "You have to specify at least one technology",
  // }),
  technologies: z.string({
    invalid_type_error: "Invalid project title",
  }),
  description: z.string({
    invalid_type_error: "Invalid description",
  }),
});

export async function createProject(formData: FormData) {
  const validatedFormData = createProjectSchema.safeParse({
    title: formData.get("title"),
    image: formData.get("image"),
    technologies: formData.get("technologies"),
    description: formData.get("description"),
  });

  if (!validatedFormData.success) {
    console.log(validatedFormData.error.flatten().fieldErrors);
    return {
      error: validatedFormData.error.flatten().fieldErrors,
    };
  }

  const {title, image, technologies, description} = validatedFormData.data

    // try {
    //   await sql`INSERT INTO projects(title, image_url, technologies, description)
    //   VALUES(${title}, ${image} ${technologies}, ${description})`
    // }
}
