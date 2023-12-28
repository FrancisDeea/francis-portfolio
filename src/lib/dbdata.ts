'use server'

import { sql } from "@vercel/postgres";
import type { DashProject } from "./definitions";

export const fetchAllProjects = async () => {
  const projects = await sql<DashProject>`SELECT * FROM projects;`;
  return projects.rows;
};

export const fetchLastProject = async (number: number) => {
  const projects = await sql<DashProject>`SELECT * FROM projects LIMIT ${number};`;
  return projects.rows;
}
