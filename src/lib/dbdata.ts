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
  const categories = await prisma.category.findMany()
  return categories
}
