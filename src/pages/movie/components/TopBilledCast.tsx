import { Box, Flex, ScrollArea, Title } from "@mantine/core";
import { useCreditsQuery } from "../../../store/server/credits/quries";
import classes from "./styles/topbilledcast.module.css";
import PersonCard from "../../../components/PersonCard";
import PersonCardSkeleton from "../../../components/PersonCardSkeleton";

const TopBilledCast = ({ movieId }: { movieId: string }) => {
  const { data, isPending, isError } = useCreditsQuery(movieId);
  console.log(data?.cast);
  return (
    <Box w="77%">
      <Title pos={"relative"} order={3} fw={600}>
        Top Billed Cast
      </Title>
      <ScrollArea
        scrollbars={"x"}
        w={"100%"}
        pb={20}
        mt={25}
        classNames={classes}
      >
        <Flex gap={20} w={"100%"}>
          {isPending || isError
            ? Array(10)
                .fill(0)
                .map((_, i) => <PersonCardSkeleton key={i} />)
            : data?.cast.map((person) => (
                <PersonCard
                  key={person.id}
                  name={person.original_name}
                  character={person.character}
                  image={person.profile_path!}
                />
              ))}
        </Flex>
      </ScrollArea>
    </Box>
  );
};

export default TopBilledCast;
