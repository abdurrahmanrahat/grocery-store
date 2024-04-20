"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
