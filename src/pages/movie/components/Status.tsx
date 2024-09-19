import { Box, Button, Group, Stack, Text } from "@mantine/core";
import { IconPlayerPlayFilled } from "@tabler/icons-react";
import classes from './styles/status.module.css'

const Status = () => {
  return (
    <Stack w="23%">
      <Group>
        <Button
          bg="#57AFD5"
          size={"xs"}
          radius={5}
          leftSection={<IconPlayerPlayFilled className={classes.playIcon} size={18} />}
        >
          Play Now
        </Button>
        <Box>
          <Text fz={15}>Lady in the Lake</Text>
          <Text fz={12.5}>on Apple TV+</Text>
        </Box>
      </Group>
      <Group></Group>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Stack>
  );
};

export default Status;
