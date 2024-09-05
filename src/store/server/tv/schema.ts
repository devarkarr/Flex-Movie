import { z } from "zod";
import { ApiResponseObject } from "../common/ApiResponseObject";

const TvSerieData = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  first_air_date: z.string().nullable(), // You can validate date format further if needed
  genre_ids: z.array(z.number()),
  id: z.number(),
  name: z.string(),
  origin_country: z.array(z.string()),
  original_language: z.string(),
  original_name: z.string(),
  overview: z.string().nullable(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const TvSerieDataSchema = ApiResponseObject(z.array(TvSerieData));
