import {
  Box,
  Flex,
  Group,
  Image,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useParams } from "react-router-dom";
import { useFetchMovieQuery } from "../../store/server/movie/queries";
import classes from "./styles/movie.module.css";
import VoteAverageCircle from "../../components/VoteAverageCircle";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
const Movie = () => {
  const { movieId } = useParams();

  const { data } = useFetchMovieQuery(movieId);
  return (
    <Box
      className={classes.movieContainer}
      p={"3em"}
      style={{
        backgroundImage: `url(${imageUrl + data?.backdrop_path})`,
      }}
    >
      <Flex c={"white"} gap={30} pos={"relative"} style={{ zIndex: 3 }}>
        <Box>
          <Image
            radius={10}
            width={300}
            height={450}
            src={imageUrl + data?.poster_path}
          />
        </Box>
        <Box>
          <Stack>
            <Title order={2}>{data?.title}</Title>
            <List>
              <Group>
                <Text>
                  {data?.release_date} ({data?.origin_country[0]})
                </Text>

                <List.Item>
                    <Flex>
                  {data?.genres.map((genre) => (
                      <Text key={genre.id}>{genre.name},</Text>
                    ))}
                    </Flex>
                </List.Item>
                <List.Item>
                    1h 44m
                </List.Item>
              </Group>
            </List>
            <Box>
                <VoteAverageCircle rate={2}/>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Movie;
