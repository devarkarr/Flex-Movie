import { Box, Skeleton } from "@mantine/core";

const MovieSkeleton = () => {
  return (
    <Box w={150}>
      <Skeleton height={200} mb="xl" radius='md' />
      <Skeleton height={17} radius="lg" />
      <Skeleton height={17} mt={6} radius="lg" />
    </Box>
  );
};

export default MovieSkeleton;
