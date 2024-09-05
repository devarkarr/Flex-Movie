import {  Box, Image, Text } from "@mantine/core";
import VoteAverageCircle from "./VoteAverageCircle";
import { MovieType } from "../store/server/trending/interface";
import { TvSeriesType } from "../store/server/tv/interface";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
interface MovieCardType {
  movie: MovieType | TvSeriesType;
}
const MovieCard = ({ movie }: MovieCardType) => {
  return (
    <Box w={150} >
      <Box pos={'relative'}>
        <Image src={imageUrl + movie.poster_path} h={'100%'} radius={10} alt="flex-movie" />
        <VoteAverageCircle rate={Number(movie.vote_average.toFixed(1))}/>
      </Box>
      <Text style={{textAlign:'center'}} fw={500} size={'16px'} mt={32}>
        {movie.title}
      </Text>
      <Text style={{textAlign:'center'}}  c="dimmed" size={'14px'} mt={8}>
        {movie.release_date}
      </Text>
    </Box>
  );
};

export default MovieCard;
