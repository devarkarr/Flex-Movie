import { Card, Image, Text } from "@mantine/core";
import classes from "./styles/trailercard.module.css";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { TrailterMovieType } from "../store/server/latest-trailer/interface";

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

interface TrailerCardType {
  watchMovie: () => void;
  setBgTrailer: React.Dispatch<React.SetStateAction<string | null>>;
  trailer: TrailterMovieType;
}

const TrailerCard = ({
  watchMovie,
  setBgTrailer,
  trailer,
}: TrailerCardType) => {
  return (
    <Card w={300} bg={"transparent"}>
      <Card.Section
        onClick={watchMovie}
        onMouseEnter={() => setBgTrailer(trailer.poster_path)}
        pos={"relative"}
        className={classes.imageHover}
        style={{
          marginInline: "0px",
        }}
      >
        <Image
          src={imageUrl + trailer.poster_path}
          h={165}
          w={"100%"}
          radius={7}
          alt="flex-movie-trailer"
        />
        <IconPlayerPlayFilled size={47} className={classes.play} />
      </Card.Section>
      <Text fw={400} c={"white"} size={"16px"} mt={18}>
        {trailer.title}
      </Text>
      <Text c="dimmed" size={"12px"} mt={8}>
        {/* {trailer.release_date} */}
      </Text>
    </Card>
  );
};

export default TrailerCard;
