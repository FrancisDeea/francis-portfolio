"use server";

import { sql } from "@vercel/postgres";
import type { Project } from "./definitions";

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
