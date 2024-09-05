import { Box, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const Loader = () => {
  const [visible] = useDisclosure(true);

  return (
    <Box h={"100vh"} pos={'relative'}>
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        loaderProps={{ color: "blue", type: "dots" }}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
    </Box>
  );
};

export default Loader;
