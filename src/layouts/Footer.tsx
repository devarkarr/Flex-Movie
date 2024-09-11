import { Box, Text } from "@mantine/core"

const Footer = () => {
  return (
    <Box>
        <Text>&copy;{new Date().getFullYear()} by Ar Kar Lin</Text>
    </Box>
  )
}

export default Footer