import { Box, Skeleton } from "@mantine/core"


const TrailerSkeletion = () => {
  return (
    <Box w={270} mr={25}>
      <Skeleton w={'100%'} height={165} mb="md" radius='md' />
      <Skeleton height={17} radius="lg" />
      <Skeleton height={17} mt={3} radius="lg" />
    </Box>
  )
}

export default TrailerSkeletion