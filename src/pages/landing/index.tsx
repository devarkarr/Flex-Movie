import { Box, Button, TextInput, Title } from "@mantine/core";
import classes from "./styles/landing.module.css";
import Trending from "./components/Trending";
import LatestTrailer from "./components/LatestTrailer";
import Popular from "./components/Popular";
import Leaderboard from "./components/Leaderboard";

const Landing = () => {
  return (
    <Box>
      <Box className={classes.container}>
        <Box pos={"relative"}>
          <Title order={1} fw={700}>
            Welcome.
          </Title>
          <Title order={2} fw={500}>
            Millions of movies, TV shows and people to discover. Explore now.
          </Title>
        </Box>
        <Box pos={"relative"}>
          <TextInput
            size="md"
            radius={50}
            placeholder="Search for a movie,tv show, person....."
          />
          <Button pos={"absolute"} size="md" top={0} right={0} bg={"var(--root-color)"} radius={50}>
            Search
          </Button>
        </Box>
      </Box>
      <Trending/>
      <LatestTrailer/>
      <Popular/>
      <Leaderboard/>
    </Box>
  );
};

export default Landing;
