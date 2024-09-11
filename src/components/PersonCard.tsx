import { Box, Card, Image, Text } from "@mantine/core";
import classes from "./styles/personcard.module.css";

interface PersonCardType {
  image: string;
  name: string;
  character: string;
}

const imageUrl = import.meta.env.VITE_TMDB_IMAGE_URL;

const PersonCard = ({ image, name, character }: PersonCardType) => {
  return (
    <Card className={classes.container} withBorder shadow="sm" radius={"md"}>
      <Box w="100%">
        <Image src={imageUrl+image} height="100%" width="100%" alt="Norway" />
      </Box>
      <Box p={10}>
        <Text fw={600} fz={15}>
          {name}
        </Text>
        <Text fz={13}>{character}</Text>
      </Box>
    </Card>
  );
};

export default PersonCard;
