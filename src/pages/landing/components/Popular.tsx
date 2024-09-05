import { Box, Flex, ScrollArea } from "@mantine/core";
import Tabs from "../../../components/Tabs";
import MovieCard from "../../../components/MovieCard";
import classes from "./styles/trending.module.css";
import { useFetchTvSeries } from "../../../store/server/tv/queries";
import MovieSkeleton from "../../../components/MovieSkeleton";
import useTvSeriesTab from "../../../hooks/useTvSeriesTab";

const Popular = () => {
  const [currentTab, setCurrentTab] = useTvSeriesTab("popular");
  const { data, isPending, isError } = useFetchTvSeries();
  return (
    <Box px={30} py={20}>
      <Tabs
        title={"What's Popular"}
        currentTab={currentTab === "popular" ? "Popular" : ''}
        setCurrentTab={setCurrentTab}
        tabs={["Popular"]}
      />
      <ScrollArea scrollbars={"x"} w={"100%"} pb={20} mt={25} classNames={classes}>
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

export default Popular;
