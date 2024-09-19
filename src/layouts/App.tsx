import { AppShell, rem } from "@mantine/core";
import Header from "./Header";
import Content from "./Content";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Footer from "./Footer";
import { useDisclosure } from "@mantine/hooks";
import AppSearch from "./components/AppSearch";

function App() {
  const [opened, { toggle }] = useDisclosure();
  const [searchOpened, { toggle: searchOpenedHandler }] = useDisclosure();

  return (
    <AppShell
      padding="md"
      header={{
        height: rem(40),
      }}
    >
      <AppShell.Header h={60} style={{ border: 0 }}>
        <Header
          opened={opened}
          toggle={toggle}
          searchOpenedHandler={searchOpenedHandler}
        />
        <AppSearch
          searchOpened={searchOpened}
          searchOpenedHandler={searchOpenedHandler}
        />
      </AppShell.Header>
      <AppShell.Main px={0}>
        <Content>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Content>
      </AppShell.Main>
      <AppShell.Footer
        pos={"relative"}
        p={"1em 2em"}
        c={"white"}
        bg={"var(--root-color)"}
      >
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
