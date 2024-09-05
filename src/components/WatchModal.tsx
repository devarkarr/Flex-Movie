import { Box, Modal } from "@mantine/core"
import ReactPlayer from "react-player/lazy"

interface WatchModalType {
    opened:boolean,
    onClose:()=> void,
    
}
const WatchModal = ({opened,onClose}:WatchModalType) => {

  return (
    <Modal opened={opened} bg={'black'} size={'70%'} onClose={onClose} centered>
      <Box >
        <ReactPlayer width={'100%'} playing url={'https://youtu.be/flgTXzSRHHY?si=TjtBgj0v3EPD_yDR'}/>
      </Box>
    </Modal>
  )
}

export default WatchModal