import { Box, Modal } from "@mantine/core";
import ReactPlayer from "react-player";
import classes from "./styles/watchmodal.module.css";
import { useVideosQuery } from "../store/server/video/queries";
import Loader from "./Loader";

interface WatchModalType {
  videoId: number;
  opened: boolean;
  onClose: () => void;
}
const WatchModal = ({ videoId, opened, onClose }: WatchModalType) => {
  const { data, isFetching, isError } = useVideosQuery(videoId);
  const video = data?.results[0];
  return (
    <Modal
      classNames={{
        header: classes.header,
      }}
      opened={opened}
      title={video?.name}
      bg={"black"}
      size={"70%"}
      onClose={onClose}
      centered
    >
      <Box w={"100%"} h={"100%"} bg={"black"}>
        {isFetching || isError ? (
          <Loader />
        ) : (
          <ReactPlayer
            width={"100%"}
            height={"500px"}
            controls
            url={`https://www.youtube.com/watch?v=${video?.key}`}
          />
        )}
      </Box>
    </Modal>
  );
};

export default WatchModal;
