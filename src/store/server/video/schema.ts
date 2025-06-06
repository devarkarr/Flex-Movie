import { z } from "zod";

const resultVideoData = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string().datetime(), // You can add custom validation for date-time if needed
  id: z.string(),
});

export const VideoDataSchema = z.object({
  id: z.number(),
  results: z.array(resultVideoData),
});
