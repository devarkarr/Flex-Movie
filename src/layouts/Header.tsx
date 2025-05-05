import {
  ActionIcon,
  Burger,
  Flex,
  Group,
  Image,
  Popover,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { navLinks } from "../assets/navLinks";
import { Link, NavLink } from "react-router-dom";
import { IconSearch } from "@tabler/icons-react";
import useSmallScreen from "../hooks/useSmallScreen";
import classes from "./styles/header.module.css";
import Logo from "/flex-movie.png";
const appName = import.meta.env.VITE_APP_NAME;

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
  searchOpenedHandler: () => void;
}

const menus = navLinks.map((nav) => (
  <Popover key={nav.title} position='bottom-start'>
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
          <NavLink
            key={link.slug}
            to={link.slug}
            style={{
              textDecoration: "none",
              color:'black',
              fontSize:'13px'
            }}
          >
            {link.name}
          </NavLink>
        ))}
      </Flex>
    </Popover.Dropdown>
  </Popover>
));

const Header = ({ opened, toggle, searchOpenedHandler }: HeaderProps) => {
  const { colors } = useMantineTheme();
  const smallScreen = useSmallScreen("1082px");

  return (
    <SimpleGrid
      cols={2}
      h={"100%"}
      bg={colors.flex[10]}
      className={classes.container}
    >
      <Flex h={"100%"} gap={60} align={"center"}>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Flex align={"center"} gap={5}>
            <Image src={Logo} w={50} alt="flex-movie-logo" />
            <Text fz={22} fw={700} c={colors.flex[0]}>
              {appName}
            </Text>
          </Flex>
        </Link>
        {!smallScreen && (
          <Flex gap={30} wrap={"wrap"}>
            {menus}
          </Flex>
        )}
      </Flex>
      <Group justify="end" align="center">
        <ActionIcon
          variant="transparent"
          onClick={searchOpenedHandler}
          aria-label="Search"
        >
          <IconSearch color="white" />
        </ActionIcon>
        <Burger
          role="button"
          aria-label="burger"
          opened={opened}
          onClick={toggle}
          c={"white"}
          hiddenFrom="sm"
        />
      </Group>
    </SimpleGrid>
  );
};

export default Header;
