import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "@styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
