import {
  Avatar,
  Box,
  Button,
  Flex,
  Group,
  List,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import VoteAverageCircle from "../../../components/VoteAverageCircle";
import { Movie } from "../../../store/server/movie/interface";
import classes from "./styles/detail.module.css";
import WatchModal from "../../../components/WatchModal";
import { useDisclosure } from "@mantine/hooks";
import ActionGroup from "./ActionGroup";

const Detail = ({ movie }: { movie: Movie | undefined }) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Box w='100%'>
      <Stack gap={23} w='100%'>
        <Box>
          <Title order={1} fw={700}>
            {movie?.title}
          </Title>
          <List>
            <Group gap={0}>
              <Text>
                {movie?.release_date} ({movie?.origin_country[0]})
              </Text>

              <List.Item>
                <Flex>
                  {movie?.genres.map((genre) => (
                    <Text key={genre.id}>{genre.name},</Text>
                  ))}
                </Flex>
              </List.Item>
              <List.Item>1h 44m</List.Item>
            </Group>
          </List>
        </Box>
        <Group gap={25}>
          <Flex gap={15} align={"center"}>
            <VoteAverageCircle
              rate={Number(movie?.vote_average.toFixed(1)) * 10}
              className={classes.score}
            />
            <Text fw={600} fz={15}>
              User <br />
              Score
            </Text>
          </Flex>
          <Avatar.Group>
            <Avatar
              size={"md"}
              src={
                "https://i.pinimg.com/564x/43/6b/47/436b47519f01232a329d90f75dbeb3f4.jpg"
              }
            />
            <Avatar
              size={"md"}
              src={
                "https://i.pinimg.com/564x/43/6b/47/436b47519f01232a329d90f75dbeb3f4.jpg"
              }
            />
            <Avatar
              size={"md"}
              src={
                "https://i.pinimg.com/564x/43/6b/47/436b47519f01232a329d90f75dbeb3f4.jpg"
              }
            />
          </Avatar.Group>
          <Button radius={20} bg={"var(--root-color)"}>
            What's your Vibe?
          </Button>
        </Group>
        <ActionGroup open={open}/>
        <Stack gap={8}>
          <Text fw={"lighter"} fs={"italic"} c={"gray"}>
            {movie?.tagline}
          </Text>
          <Stack gap={6}>
            <Text fz={20} fw={600}>
              Overview
            </Text>
            <Text fz={16} c={"var(--secondary-color)"} fw={"unset"}>
              {movie?.overview}
            </Text>
          </Stack>
          <Box>
            <Text></Text>
          </Box>
        </Stack>
      </Stack>

      {movie && (
        <WatchModal videoId={movie?.id} opened={opened} onClose={close} />
      )}
    </Box>
  );
};

export default Detail;
