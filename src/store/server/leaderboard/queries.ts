import { useQuery } from "@tanstack/react-query";
import { authJsonHeader } from "../../../api/auth";
import axios from "../../../api/axios";

const fetchLeaderboards = async () => {
  const response = await axios.get("/leaderboard", {
    headers: authJsonHeader(),
  });

  return response.data;
};

export const useFetchLeaderboards = () =>
  useQuery({
    queryKey: ["leaderboard"],
    queryFn: fetchLeaderboards,
  });
