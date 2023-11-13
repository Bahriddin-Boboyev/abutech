import { observer } from "mobx-react";
import TodoStore from "./store/store";
import { toJS } from "mobx";
import { useState } from "react";
import { SelectType } from "../types";
import {
  Container,
  Typography,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  List,
} from "@mui/material";
import { Modal } from "./components/modal";
import { TodoList } from "./components/list";

const App = observer(() => {
  const [selected, setSelected] = useState<SelectType>("all");
  const { viewTodo, addModal, modal, todoView } = TodoStore;

  console.log(toJS(modal));

  return (
    <Container>
      <Typography
        variant="h5"
        component="h1"
        color="brown"
        textAlign="center"
        fontWeight="700"
        mt="10px"
      >
        TODO LIST
      </Typography>
      <Box
        sx={{
          my: "20px",
          mx: "auto",
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          onClick={() => addModal({ isOpen: true, name: "add" })}
        >
          Add Todo
        </Button>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Select</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Status"
            onChange={(e) => (
              setSelected(e.target.value as SelectType),
              todoView(e.target.value as SelectType)
            )}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        bgcolor="#1b263b"
        position="relative"
        sx={{
          width: "70%",
          height: "350px",
          mx: "auto",
          borderRadius: "10px",
          padding: "15px",
          overflowY: "scroll",
        }}
      >
        {!viewTodo.length ? (
          <Typography
            component={"h3"}
            variant="h5"
            color="#2196f3"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Todos empty
          </Typography>
        ) : (
          <List sx={{ display: "grid", gap: "15px" }}>
            {viewTodo.map((item) => (
              <TodoList key={item.id} item={item} />
            ))}
          </List>
        )}
      </Box>
      <Modal />
    </Container>
  );
});

export default App;
