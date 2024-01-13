"use server";

import { PrismaClient } from "@prisma/client";
import { sql } from "@vercel/postgres";
import type { Project } from "./definitions";

const prisma = new PrismaClient();

export const fetchAllProjects = async () => {
  const projects =
    await sql<Project>`SELECT * FROM projects ORDER BY date DESC;`;
  return projects.rows;
};

export const fetchLastProject = async (number: number) => {
  const projects =
    await sql<Project>`SELECT * FROM projects ORDER by date DESC LIMIT ${number};`;
  return projects.rows;
};

export const fetchAllCategories = async () => {
  const categories = await prisma.category.findMany();
  return categories;
};

export const fetchCategoryById = async (id: number) => {
  const category = await prisma.category.findUnique({
    where: {
      id: id,
    },
  });
  return category?.name;
};

export const fetchAllPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

export const fetchPostsByCategory = async (name: string) => {
  const posts = await prisma.post.findMany({
    where: {
      category_name: name,
    },
  });
  return posts;
};

// export const fetchPostsByCategory = async (id: string) => {
//   const posts = await prisma.post.findMany({
//     where: {
//       categoryId: Number(id),
//     },
//   });
//   return posts;
// };
