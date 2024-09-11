import { Box, Button, TextInput, Title } from "@mantine/core";
import classes from "./styles/landing.module.css";
import Trending from "./components/Trending";
import LatestTrailer from "./components/LatestTrailer";
import Popular from "./components/Popular";
import Leaderboard from "./components/Leaderboard";
import useSmallScreen from "../../hooks/useSmallScreen";
import SEO from '@americanexpress/react-seo';

const AppName = import.meta.env.VITE_APP_NAME;

const Landing = () => {
  const smallScreen = useSmallScreen()
  return (
    <Box>
      <SEO
      title={AppName}
      description="flex movie by arkarlin"
      keywords={['flex', 'movie']}
      siteUrl="https://flex-movie-ashen.vercel.app"
      image={{
        src: 'https://flex-movie-ashen.vercel.app/flex-movie.png'
      }}
      />
      <Box className={classes.container}>
        <Box pos={"relative"}>
          <Title order={smallScreen ? 1 : 2} fw={700}>
            Welcome.
          </Title>
          <Title order={smallScreen ? 2 : 3} fw={500}>
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
