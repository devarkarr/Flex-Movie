import { Box, Flex, Stack, Text } from "@mantine/core";
import useQueryParams from "../../hooks/useQueryParams";
import { useSearchMovie } from "../../store/server/trending/queries";
import ResultCard from "./components/ResultCard";
import { SearchMovieType } from "../../store/server/trending/interface";
import classes from "./styles/search.module.css";
import SearchMovieSkeletion from "./components/SearchMovieSkeletion";
import useSmallScreen from "../../hooks/useSmallScreen";

const Search = () => {
  const [queryParams] = useQueryParams();
  const { data, isPending, isError } = useSearchMovie({
    query: queryParams["query"],
  });
  const smallScreen = useSmallScreen()
  return (
    <Box w="100%" className={classes.searchContainer}>
      <Flex justify="space-between" gap={20}>
        <Stack
          w={smallScreen ? 0 :250}
          style={{
            borderRadius: 7,
            overflow: "hidden",
          }}
        >
          <Box bg="var(--mantine-primary-color-1)" py={10} px={20}>
            <Text fz={18} fw={20} c="white">
              Search Results
            </Text>
          </Box>
        </Stack>
        <Stack w={smallScreen ? '100%' : 985}>
          {isPending || isError ? (
            Array(5).fill(0).map((_,i)=>(
                <SearchMovieSkeletion key={i}/>
            ))
          ) : (
            <Result results={data?.results as SearchMovieType[]} />
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

const Result = ({ results }: { results: SearchMovieType[] }) => {
  return results?.map((movie: SearchMovieType) => (
    <ResultCard key={movie.id} movie={movie} />
  ));
};

export default Search;
