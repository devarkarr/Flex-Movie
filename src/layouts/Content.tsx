import { Box } from "@mantine/core"
import { FC, ReactNode } from "react"

const Content :FC<{children:ReactNode}> = ({children}) => {
  return (
    <Box >
        {children}
    </Box>
  )
}

export default Content