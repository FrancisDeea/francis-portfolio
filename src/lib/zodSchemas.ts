import { z } from "zod";
import { zfd } from "zod-form-data";

export const createProjectSchema = z.object({
  title: z.string({
    invalid_type_error: "Invalid project title",
  }),
  image: z.string().regex(/^\/(\w+-?\w+)+\.(webp|png|jpeg)/g, {
    message: "You have to specify a valid url",
  }),
  live: z.string().url({
    message: "You have to specify a valid live url",
  }),
  github: z.string().url({
    message: "You have to specify a valid github url",
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

export const imageServerSchema = zfd.formData({
  image: zfd.file(),
});

export const createPostSchema = z.object({
  title: z.string({
    invalid_type_error: "Invalid project title",
  }),
  short_description: z.string({
    invalid_type_error: "Invalid short description",
  }),
  hashtags: z.string().regex(/^\#\w+/).array().nonempty({
    message: "You have tu speficy one hashtag at least"
  }),
  image: z.string().regex(/^\/(\w+-?\w+)+\.(webp|png|jpeg)/g, {
    message: "You have to specify a valid url",
  }),
  description: z.string({
    invalid_type_error: "Invalid description",
  }),
});