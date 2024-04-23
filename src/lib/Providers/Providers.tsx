"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "@emotion/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactNode, useEffect } from "react";
import { Provider } from "react-redux";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1700,
      once: false,
    });
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
