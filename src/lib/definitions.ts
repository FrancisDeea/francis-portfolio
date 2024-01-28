export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  technologies: string[];
  live_url: string;
  github_url: string;
}

export type Lang = "en" | "es";

export interface User {
  id: string;
  username: string;
  password: string;
}
