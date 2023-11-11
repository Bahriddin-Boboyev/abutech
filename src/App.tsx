import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Todo, Products } from "./pages";
import { Typography } from "@mui/material";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="*"
          element={
            <Typography
              component={"h6"}
              variant="h6"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              Page not found!
            </Typography>
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
