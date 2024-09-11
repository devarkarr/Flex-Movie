import { AppShell, rem } from "@mantine/core";
import Header from "./Header";
import Content from "./Content";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "../components/Loader";
import Footer from "./Footer";
import { useDisclosure } from "@mantine/hooks";

function App() {
  const [opened, { toggle }] = useDisclosure();


  return (
    <AppShell
      padding="md"
      header={{
        height: rem(40)
      }}
    >
      <AppShell.Header h={60} style={{ border: 0 }}>
        <Header opened={opened} toggle={toggle}/>
      </AppShell.Header>
      <AppShell.Main px={0}>
        <Content>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Content>
      </AppShell.Main>
      <AppShell.Footer pos={'relative'} p={'1em 2em'} c={'white'} bg={"var(--root-color)"}>
        <Footer/>
      </AppShell.Footer>
    </AppShell>
  );
}

export default App;
