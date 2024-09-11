import { Box, Flex, ScrollArea } from "@mantine/core";
import Tabs from "../../../components/Tabs";
import useLatestTrailerTab from "../../../hooks/useLatestTrailerTab";
import { useFetchLatestTrailers } from "../../../store/server/latest-trailer/queries";
import TrailerCard from "../../../components/TrailerCard";
import classes from "./styles/latest-trailer.module.css";
import TrailerSkeletion from "../../../components/TrailerSkeletion";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import WatchModal from "../../../components/WatchModal";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

const LatestTrailer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [bgTrailer, setBgTrailer] = useState<string | null>("");
  const [currentTab, setCurrentTab] = useLatestTrailerTab("popular");
  const { data, isPending, isError } = useFetchLatestTrailers({
    tab: currentTab,
  });
  const [videoId, setVideoId] = useState<number | null>(null);

  const watchMovie = (id: number) => {
    setVideoId(id);
    open();
  };

  return (
    <Box
      py={20}
      pb={28}
      className={classes.latestContainer}
      style={{
        backgroundImage: `url(${imageUrl + bgTrailer})`,
      }}
    >
      <Tabs
        titleColor="white"
        title={"Latest Trailers"}
        currentTab={currentTab === "popular" ? "Popular" : "In Theaters"}
        setCurrentTab={setCurrentTab}
        tabs={["Popular", "In Theaters"]}
      />
      <ScrollArea scrollbars={"x"} w={"100%"} mt={25} classNames={classes}>
        <Flex w={"100%"}>
          {isPending || isError
            ? Array(5)
                .fill(0)
                .map((_, i) => <TrailerSkeletion key={i} />)
            : data?.map((trailer) => (
                <TrailerCard
                  watchMovie={watchMovie}
                  setBgTrailer={setBgTrailer}
                  key={trailer.id}
                  trailer={trailer}
                />
              ))}
        </Flex>
      </ScrollArea>

{
  videoId && (
    <WatchModal videoId={videoId} opened={opened} onClose={close} />
  )
}
    </Box>
  );
};

export default LatestTrailer;
