import { Box, Group, Title } from "@mantine/core";
// import { useFetchLeaderboards } from "../../../store/server/leaderboard/queries";

const Leaderboard = () => {

    // const {data } = useFetchLeaderboards()
    // console.log(data)
  return (
    <Box p={"0em 3em"}>
      <Group>
        <Title pos={"relative"} order={3} fw={600}>
          Leaderboard
        </Title>
      </Group>
    </Box>
  );
};

export default Leaderboard;
