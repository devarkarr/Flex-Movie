import { Flex, Input, Stack, UnstyledButton } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  searchOpened: boolean;
  searchOpenedHandler: () => void;
};

const AppSearch = ({ searchOpened, searchOpenedHandler }: SearchProps) => {
    const searchHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
        searchOpenedHandler();
        navigate(
          `/search/movie?query=${search.replace(" ", "-").toLowerCase()}`,
          {
            replace: true,
          }
        );
      }
    };
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  return (
    <Stack
      w="100%"
      gap={0}
      bg={"white"}
      style={{
        transform: searchOpened ? "translate(0px)" : "translateY(-180px)",
        transition: "transform 0.4s ease-in-out",
        position: "relative",
        zIndex: "-1",
      }}
    >
      <Flex w="100%" p={5} gap={5} align={"center"}>
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchHandler}
          w="100%"
          variant="unstyled"
          placeholder="Search for a movie..."
          leftSection={<IconSearch size={16} />}
        />
        <UnstyledButton onClick={searchOpenedHandler}>
          <IconX />
        </UnstyledButton>
      </Flex>
    </Stack>
  );
};

export default AppSearch;
