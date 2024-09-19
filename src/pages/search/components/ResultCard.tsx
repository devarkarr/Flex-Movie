import { Box, Flex, Image, Stack, Text } from "@mantine/core";
import { SearchMovieType } from "../../../store/server/trending/interface";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

type Props = {
  movie: SearchMovieType;
};

const ResultCard = ({ movie }: Props) => {
  return (
    <Flex gap={15} h={140}  style={{
        border:'1px solid rgba(128, 128, 128, 0.300)',
        borderRadius:7,
        overflow:'hidden',
        boxShadow:'0px 1px 3px rgba(128, 128, 128, 0.300)'
    }}>
      <Image
        w={95}
        h="100%"
        src={imageUrl + movie.poster_path}
        height={160}
        alt="Norway"
      />
      <Stack py={5}>
        <Box>
          <Text fz={17} fw={500} component='a' href={`/movie/${movie.id}`}>
            {movie.title}
          </Text>
          <Text fz={15} fw={300} c={"gray"}>
            {movie.release_date}
          </Text>
        </Box>
        <Box>
          <Text c="var(--mantine-color-gray-7)" fz={13}>{movie.overview}</Text>
        </Box>
      </Stack>
    </Flex>
  );
};

export default ResultCard;
