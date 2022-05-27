import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: "sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { text-decoration: none; } body { padding: 0px; margin: 0px; }`,
    },
    MuiButton: {
      styleOverrides: {
        colorPrimary: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
