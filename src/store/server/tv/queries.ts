import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import axios from "../../../api/axios";
import { TvSerieDataSchema } from "./schema";
import { TvSeriesType } from "./interface";

const fetchTvSeries = async () => {
  const response = await axios.get("tv/popular", {
    headers: authJsonHeader(),
  });

  return TvSerieDataSchema.parse(response.data);
};

export const useFetchTvSeries = () =>
  useQuery({
    queryKey: ["tv-series"],
    queryFn: fetchTvSeries,
    select: ({ results }: { results: TvSeriesType[] }) =>
      results.map((res) => ({ ...res, title: res.name })),
  });
