import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import { TrendingDataSchema } from "./schema";
import axios from "../../../api/axios";
import { MovieType } from "./interface";

const fetchTrendingMovies = async (payload: ApiParams) => {
  const { tab } = payload;
  const response = await axios.get(
    `trending/movie/${tab === "Today" || tab === "day" ? "day" : "week"}`,
    {
      headers: authJsonHeader(),
    }
  );
  return TrendingDataSchema.parse(response.data);
};

export const useFetchTrendingMovies = (payload: ApiParams) =>
  useQuery({
    queryKey: ["trending-movies", payload],
    queryFn: () => fetchTrendingMovies(payload),
    select: ({ results }: { results: MovieType[] }) => results,
  });
