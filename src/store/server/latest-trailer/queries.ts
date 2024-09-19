import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import { TrailerDataSchema } from "./schema";
import axios from "../../../api/axios";
import { TrailterMovieType } from "./interface";

const fetchLatestTrailers = async (payload: ApiParams) => {
  const { tab } = payload;
  const response = await axios.get(
    `movie/${tab?.toLowerCase() === "popular" ? "popular" : "top_rated"}`,
    {
      headers: authJsonHeader(),
    }
  );

  return TrailerDataSchema.parse(response.data);
};

export const useFetchLatestTrailers = (payload: ApiParams) =>
  useQuery({
    queryKey: ["latest-trailer", payload],
    queryFn: () => fetchLatestTrailers(payload),
    select: ({ results }: { results: TrailterMovieType[] }) => results,
  });
