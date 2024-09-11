import { Box, Flex, Image } from "@mantine/core";
import { useParams } from "react-router-dom";
import { useFetchMovieQuery } from "../../store/server/movie/queries";
import classes from "./styles/movie.module.css";
import Detail from "./components/Detail";
import Loader from "../../components/Loader";
import useSmallScreen from "../../hooks/useSmallScreen";
import TopBilledCast from "./components/TopBilledCast";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;
const Movie = () => {
  const { movieId } = useParams();
  const smallScreen = useSmallScreen();
  const { data, isPending, isError } = useFetchMovieQuery(movieId);

  if (isPending || isError) return <Loader />;
  return (
    <Box w="100%" h="100%">
      <Box
        className={classes.movieContainer}
        p={smallScreen ? "1.5em" : "3em"}
        style={{
          backgroundImage: `url(${imageUrl + data?.backdrop_path})`,
        }}
      >
        <Flex
          c={"white"}
          w="100%"
          gap={smallScreen ? 0 : 30}
          pos={"relative"}
          style={{ zIndex: 3 }}
        >
          <Box w={smallScreen ? "0%" : "40%"}>
            <Image
              radius={10}
              width={"100%"}
              height={450}
              src={imageUrl + data?.poster_path}
            />
          </Box>
          <Detail movie={data} />
        </Flex>
      </Box>
      <Flex p={smallScreen ? "1.5em" : "1.5em 3em"}>
        <TopBilledCast movieId={movieId as string}/>
      </Flex>
    </Box>
  );
};

export default Movie;
