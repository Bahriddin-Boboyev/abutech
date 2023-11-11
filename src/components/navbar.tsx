import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "transparent" }}>
      <AppBar position="static" sx={{ bgcolor: "transparent" }}>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            variant="h6"
            color="inherit"
            component="a"
            href="/"
            sx={{ textDecoration: "none" }}
          >
            Home
          </Typography>
          <Typography
            variant="h6"
            color="inherit"
            component="a"
            href="/products"
            sx={{ textDecoration: "none" }}
          >
            Products
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
