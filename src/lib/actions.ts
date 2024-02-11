"use server";

import { PrismaClient } from "@prisma/client";
import { sql } from "@vercel/postgres";
import { technologiesToPSQLArray, cleanString } from "./utils";

import {
  createPostSchema,
  createProjectSchema,
  imageServerSchema,
} from "./zodSchemas";
import { writeFile } from "node:fs/promises";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { signIn } from "./auth";
import { AuthError } from "next-auth";

const prisma = new PrismaClient();

export async function createProject(prevState: any, formData: FormData) {
  const imageRawData = formData.get("main-image");
  let urlImageRawData = null;

  if (typeof imageRawData !== "string") {
    const formData = new FormData();
    formData.append("image", imageRawData as File);
    const { image } = imageServerSchema.parse(formData);

    const buffer = await image.arrayBuffer();
    const checkedName = image.name.replaceAll(" ", "-");

    try {
      await writeFile(
        `public/project-images/${checkedName}`,
        Buffer.from(buffer)
      );
      urlImageRawData = `/${checkedName}`;
    } catch (err) {
      console.error(err);
    }
  } else {
    urlImageRawData = imageRawData.toString();
  }

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
    image: urlImageRawData,
    live: formData.get("live_url"),
    github: formData.get("github_url"),
    technologies: technologiesToArray,
    description: formData.get("description"),
  });

  console.log(validatedFormData);

  if (!validatedFormData.success) {
    return {
      message: JSON.stringify(
        Object.values(validatedFormData.error).join(", ")
      ),
      status: "error",
    };
  }

  const { title, image, live, github, technologies, description } =
    validatedFormData.data;

  const postgresqTechArray = await technologiesToPSQLArray(technologies);

  try {
    await sql`INSERT INTO projects(title, image_url, live_url, github_url, technologies, description)
      VALUES(${title}, ${image}, ${live}, ${github}, ${postgresqTechArray}, ${description})`;
  } catch (err) {
    console.error(err);
    return {
      message: JSON.stringify(`Failed to save project in DDBB: ${err.code}`),
      status: "error",
    };
  }

  revalidatePath("/es/dashboard/projects");
  revalidatePath("/es/projects");
  redirect("/es/dashboard/projects");
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
  revalidatePath("/es/dashboard/projects");
  revalidatePath("/es/projects");
}

export async function createPost(prevState: any, formData: FormData) {
  const categoryName = formData.get("category") as string;
  const hashtagsRawData = formData.get("hashtags") as string;
  const imageRawData = formData.get("main-image");
  let urlImageRawData = null;

  if (typeof imageRawData !== "string") {
    const formData = new FormData();
    formData.append("image", imageRawData as File);
    const { image } = imageServerSchema.parse(formData);

    const buffer = await image.arrayBuffer();
    const checkedName = image.name.replaceAll(" ", "-");

    try {
      await writeFile(`public/post-images/${checkedName}`, Buffer.from(buffer));
      urlImageRawData = `/${checkedName}`;
    } catch (err) {
      console.error(err);
    }
  } else {
    urlImageRawData = imageRawData.toString();
  }

  const validatedFormData = createPostSchema.safeParse({
    title: formData.get("title"),
    short_description: formData.get("short_description"),
    hashtags: cleanString(hashtagsRawData).split(","),
    image: urlImageRawData,
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

  const { title, short_description, hashtags, image, description } =
    validatedFormData.data;

  try {
    await prisma.post.create({
      data: {
        title_es: title,
        description_es: short_description,
        hashtags: hashtags,
        content_es: description,
        image: image,
        category_name: categoryName,
      },
    });
  } catch (err) {
    console.error(err);
    return {
      message: JSON.stringify(`Failed to save project in DDBB: ${err.code}`),
      status: "error",
    };
  }

  revalidatePath("/es/dashboard/posts");
  redirect("/es/dashboard/posts");
}

export async function deletePost(id: number) {
  try {
    await prisma.post.delete({
      where: {
        id: id,
      },
    });
  } catch (err) {
    console.error(err);
    throw new Error(
      JSON.stringify(`Failed to delete project in DDBB: ${err.code}`)
    );
  }
  revalidatePath("/dashboard/posts");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
