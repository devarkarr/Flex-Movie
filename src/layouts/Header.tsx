import {
  ActionIcon,
  Flex,
  Group,
  Popover,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { navLinks } from "../assets/navLinks";
import { NavLink } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";

const appName = import.meta.env.VITE_APP_NAME;

const menus = navLinks.map((nav) => (
  <Popover key={nav.title}>
    <Popover.Target>
      <Text
        component="button"
        style={{
          cursor: "pointer",
        }}
        bd={0}
        bg={"transparent"}
        c={"white"}
        aria-label={nav.title}
        aria-haspopup="dialog"
        aria-expanded="false"
        aria-controls="mantine-tzh9imati-dropdown"
      >
        {nav.title}
      </Text>
    </Popover.Target>
    <Popover.Dropdown>
      <Flex direction={"column"} gap={10}>
        {nav.subNavs.map((link) => (
          <NavLink key={link.slug} to={link.slug}>
            {link.name}
          </NavLink>
        ))}
      </Flex>
    </Popover.Dropdown>
  </Popover>
));

const Header = ({ smallScreen }: { smallScreen: boolean | undefined }) => {
  const { colors } = useMantineTheme();
  return (
    <SimpleGrid
      cols={2}
      style={{ padding: "0 3em" }}
      h={"100%"}
      bg={colors.flex[10]}
    >
      <Flex h={"100%"} gap={60} align={"center"}>
        <Text fz={23} fw={700} c={colors.flex[0]}>
          {appName}
        </Text>
        {!smallScreen && (
          <Flex gap={30} wrap={"wrap"}>
            {menus}
          </Flex>
        )}
      </Flex>
      <Group justify="end" align="center">
        <ActionIcon variant="transparent" aria-label="Search">
          <IconSearch color="white" />
        </ActionIcon>
      </Group>
    </SimpleGrid>
  );
};

export default Header;
