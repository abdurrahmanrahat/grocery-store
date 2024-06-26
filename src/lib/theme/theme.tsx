import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#0095CF",
      light: "#ECE8E7",
      dark: "#010937",
    },
    secondary: {
      main: "#757F95",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          padding: "8px 20px",
          textTransform: "capitalize",
        },
      },
    },
  },
  typography: {
    body1: {
      fontSize: "14px",
    },
    body2: {
      fontSize: "16px",
    },
  },
});

theme.shadows[1] = "0px 5px 22px lightgray";
