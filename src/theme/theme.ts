import { createTheme } from "@mui/material";
import { blue, blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    action: {
      disabledBackground: blueGrey[700],
      disabled: "white",
    },
  },
  typography: {
    fontFamily: `"Montserrat", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
});
