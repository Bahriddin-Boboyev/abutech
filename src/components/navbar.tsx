import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "rgb(30 41 59)" }}>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            startIcon={<HomeIcon />}
            sx={{ color: "inherit" }}
            size="large"
            href="/"
          >
            Home
          </Button>
          <Button
            startIcon={<ShoppingBasketIcon />}
            sx={{ color: "inherit" }}
            size="large"
            href="/products"
          >
            Products
          </Button>
          {/* <Typography 
            variant="h6"
            color="inherit"
            component="a"
            href="/products"
            sx={{ textDecoration: "none" }}
          >
            
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
