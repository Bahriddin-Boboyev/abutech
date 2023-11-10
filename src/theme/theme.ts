import { createTheme } from "@mui/material";
import { blue, grey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[800],
    },
    action: {
      disabledBackground: grey[700],
      disabled: "white",
    },
  },
});
