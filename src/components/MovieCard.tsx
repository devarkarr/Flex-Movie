import { Box, Flex, Image, Text } from "@mantine/core";
import VoteAverageCircle from "./VoteAverageCircle";
import { MovieType } from "../store/server/trending/interface";
import { TvSeriesType } from "../store/server/tv/interface";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
interface MovieCardType {
  movie: MovieType | TvSeriesType;
}
const MovieCard = ({ movie }: MovieCardType) => {
  return (
    <Box w={150}>
      <Box pos={"relative"}>
        <Image
          src={imageUrl + movie.poster_path}
          h={"100%"}
          radius={10}
          alt="flex-movie"
          fallbackSrc="https://i.pinimg.com/564x/17/96/f9/1796f9ed980412e3b9b267d3204ff7ee.jpg"
        />
        <Flex
          pos={"absolute"}
          align={"center"}
          justify={"center"}
          bottom={"-1.2em"}
          left={"0.8em"}
        >
          <VoteAverageCircle rate={Number(movie.vote_average.toFixed(1)) * 10} />
        </Flex>
      </Box>
      <Text style={{ textAlign: "center" }} fw={500} size={"16px"} mt={32}>
        <Link
          to={`/movie/${movie.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          {movie.title}
        </Link>
      </Text>
      <Text style={{ textAlign: "center" }} c="dimmed" size={"14px"} mt={8}>
        {movie.release_date}
      </Text>
    </Box>
  );
};

export default MovieCard;
