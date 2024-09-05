import { z } from "zod";
import { ApiResponseObject } from "../common/ApiResponseObject";

const TrailerData = z.object({
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  release_date: z.string(),
  title: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const TrailerDataSchema = ApiResponseObject(z.array(TrailerData));
