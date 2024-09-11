import { Box, Skeleton } from "@mantine/core"

const PersonCardSkeleton = () => {
  return (
    <Box w={140}>
    <Skeleton height={205} mb="xl" radius='md' />
    <Skeleton height={10} radius="md" />
    <Skeleton height={10} mt={6} radius="md" />
  </Box>  )
}

export default PersonCardSkeleton