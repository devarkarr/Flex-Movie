import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import "@mantine/core/styles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Router from "./routes";
import { MantineProvider } from "@mantine/core";
import { theme } from "./styles/theme";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

// router
const routes = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Router />} />)
);

//query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        console.log(error.message);
        console.log(failureCount);
        return !(
          error instanceof AxiosError &&
          [401, 403].includes(error.response?.status ?? 0)
        );
      },
    },
    mutations: {
      onError: (error) => {
        const errMsg =
          error instanceof AxiosError
            ? error.response?.data.meta.messageEn
            : "Something went wrong!";
        console.log(errMsg);
        // showToastNoti(errMsg, "error")
      },
    },
  },
  queryCache: new QueryCache({
    // onError: (error) => {
    //   if (error instanceof AxiosError && error.response?.status === 401) {
    //     showToastNoti("Session expired!")
    //     // useStore.getState().resetAuth()
    //   }
    //   if (error instanceof AxiosError && error.response?.status === 403) {
    //     router.navigate("/forbidden", { replace: true })
    //   }
    // },
  }),
});

//render
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme}>
        <RouterProvider router={routes} />
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
