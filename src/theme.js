import { createTheme } from "@mui/material";

const palette = {
  darkGrey: {
    0: "#FFFFFF",
    5: "#FAFAFB",
    10: "#F1F1F4",
    15: "#D4D4D6",
    20: "#C6C6C8",
    30: "#AFAFB1",
    40: "#99999B",
    50: "#7F7F81",
    60: "#626264",
    70: "#4E4E50",
    80: "#3E3E40",
    85: "#2D2D2F",
    90: "#1F1F21",
    95: "#111113",
    100: "#000000",
  },
};

const theme = createTheme({
  palette: {
    ...palette,
  },
  components: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "0.4em",
        },
        "*::-webkit-scrollbar-track": {
          "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
        },
        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(0,0,0,.1)",
          outline: "1px solid slategrey",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          "&.active": {
            color: palette.darkGrey[40],
          },
        },
      },
    },
  },
});

export { theme as default, palette };
