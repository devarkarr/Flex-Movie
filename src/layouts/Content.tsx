import { Box, Paper } from "@mantine/core"
import { FC, ReactNode } from "react"

const Content :FC<{children:ReactNode}> = ({children}) => {
  return (
    <Box>
      <Paper>
        {children}
      </Paper>
    </Box>
  )
}

export default Content