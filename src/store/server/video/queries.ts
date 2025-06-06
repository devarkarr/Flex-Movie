import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import axios from "../../../api/axios";
import { VideoDataSchema } from "./schema";

const getVideos = async (id: number) => {
  if (id) {
    const response = await axios.get(`movie/${id}/videos`, {
      headers: authJsonHeader(),
    });
    return VideoDataSchema.parse(response.data);
  }
};

export const useVideosQuery = (id: number) =>
  useQuery({
    queryKey: ["video", id],
    queryFn: () => getVideos(id),
  });
