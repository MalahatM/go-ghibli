import { z } from "zod";

export const filmSchema = z.object({
  id: z.string(),
  title: z.string(),
  original_title: z.string(),
  description: z.string(),
  director: z.string(),
  release_date: z.string(),
  image: z.string().url(),
});

export type Film = z.infer<typeof filmSchema>;
