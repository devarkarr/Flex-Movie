import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import { searchMovieDataSchema, TrendingDataSchema } from "./schema";
import axios from "../../../api/axios";
import { MovieType } from "./interface";
import getParams from "../../../utils/getParams";

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

const searchMovie = async (payload: ApiParams) => {
  const params = getParams(payload);
  const response = await axios.get(`search/movie?${params}`, {
    headers: authJsonHeader(),
  });

  return searchMovieDataSchema.parse(response.data);
};

export const useSearchMovie = (payload: ApiParams) =>
  useQuery({
    queryKey: ["search-movie", payload],
    queryFn: () => searchMovie(payload),
  });
