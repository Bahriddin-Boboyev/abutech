import { observer } from "mobx-react";
import TodoStore from "./store/store";
import { toJS } from "mobx";
import { useState } from "react";
import { SelectType } from "../types";
import { format } from "date-fns";
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
  ListItem,
  Checkbox,
} from "@mui/material";
import { Modal } from "./components/modal";

const App = observer(() => {
  const [selected, setSelected] = useState<SelectType>("all");
  const { todo, addModal, removeTodo, isCheckedTodo, modal } = TodoStore;

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
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selected}
            label="Status"
            onChange={(e) => setSelected(e.target.value as SelectType)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="incomplete">Incomplete</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        bgcolor="#1b263b"
        sx={{
          width: "70%",
          height: "350px",
          mx: "auto",
          borderRadius: "10px",
          padding: "15px",
          overflowY: "scroll",
        }}
      >
        <List sx={{ display: "grid", gap: "15px" }}>
          {todo.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                bgcolor: "#003049",
                width: "90%",
                mx: "auto",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box width="500px" display="flex" alignItems="center">
                <Checkbox
                  checked={item.done}
                  sx={{ color: "white" }}
                  onClick={() => isCheckedTodo(item.id)}
                />
                <Typography
                  color={item.done ? "red" : "white"}
                  sx={{ textDecoration: item.done ? "line-through" : "unset" }}
                >
                  {item.title}
                </Typography>
              </Box>

              <Typography color="white" sx={{ fontSize: "12px" }}>
                {format(item.date, "dd-MM-yyyy")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50px",
                }}
              >
                <Button
                  color="error"
                  size="small"
                  sx={{
                    padding: "0",
                    minWidth: "30px",
                    minHeight: "30px",
                    fontSize: "15px",
                  }}
                  onClick={() => removeTodo(item.id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </Button>
                <Button
                  color="warning"
                  size="small"
                  sx={{
                    padding: "0",
                    minWidth: "30px",
                    minHeight: "30px",
                    fontSize: "15px",
                  }}
                  onClick={() =>
                    addModal({ isOpen: true, name: "edit", value: item })
                  }
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
      <Modal />
    </Container>
  );
});

export default App;
