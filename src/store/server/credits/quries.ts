import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import axios from "../../../api/axios";
import { CastMemberDataSchema } from "./schema";

const getCredits = async (id: string) => {
  const response = await axios.get(`movie/${id}/credits`, {
    headers: authJsonHeader(),
  });
  return CastMemberDataSchema.parse(response.data);
};

export const useCreditsQuery = (id: string) =>
  useQuery({
    queryKey: ["movie-credits", id],
    queryFn: () => getCredits(id),
  });
