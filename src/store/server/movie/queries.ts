import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import axios from "../../../api/axios";
import { MovieDataSchema } from "./schema";

const fetchMovie = async (movieId: string | undefined) => {
  const response = await axios.get(`movie/${movieId}`, {
    headers: authJsonHeader(),
  });
  return MovieDataSchema.parse(response.data);
};

export const useFetchMovieQuery = (movieId: string | undefined) =>
  useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => fetchMovie(movieId),
  });
