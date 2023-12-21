import { z } from "zod";

export const createProjectSchema = z.object({
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
