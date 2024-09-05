import { Box, Flex, ScrollArea } from "@mantine/core";
import { useFetchTrendingMovies } from "../../../store/server/trending/queries";
import Tabs from "../../../components/Tabs";
import MovieCard from "../../../components/MovieCard";
import classes from "./styles/trending.module.css";
import MovieSkeleton from "../../../components/MovieSkeleton";
import useTrendingTab from "../../../hooks/useTrendingTab";

const Trending = () => {
  const [currentTab,setCurrentTab] = useTrendingTab('day')
  const { data, isPending, isError } = useFetchTrendingMovies({tab:currentTab as string});

  return (
    <Box px={30} py={20} className={classes.trendingContainer}>
      <Tabs title={"Trending"} currentTab={currentTab === 'day' ? 'Today' : 'This Week' as string} setCurrentTab={setCurrentTab} tabs={["Today", "This Week"]} />
      <ScrollArea scrollbars={"x"} pb={25} w={"100%"} mt={25} classNames={classes}>
        <Flex gap={20} w={"100%"}>
          {isPending || isError
            ? Array(10)
                .fill(0)
                .map((_, i) => <MovieSkeleton key={i} />)
            : data?.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </Flex>
      </ScrollArea>
    </Box>
  );
};

export default Trending;
