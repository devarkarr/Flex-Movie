import {  Flex, Skeleton } from "@mantine/core";

const SearchMovieSkeletion = () => {
  return (
    <Flex gap={15} h={140}>
      <Skeleton w={95} height="100%" radius="sm" />
      <Skeleton height="100%" radius="sm" />
    </Flex>
  );
};

export default SearchMovieSkeletion;
