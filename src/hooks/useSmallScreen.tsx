import { useMediaQuery } from "@mantine/hooks";


const useSmallScreen = (w : string = '48em') => {
  const smallScreen = useMediaQuery(`(max-width:${w}`);
  return smallScreen;
};

export default useSmallScreen;
