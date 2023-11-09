import { Container, Button, Box, Typography, Stack } from "@mui/material";
import { TodoStore } from "./store";
import { useState, FormEvent } from "react";
import { TodoInput } from "./components/input";
import { Main } from "./components/main";
import { TodoType } from "../types";

const App = () => {
  const { addTodo, todos } = TodoStore((state) => state);
  const [todoValue, setTodoValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todo: TodoType = {
      id: todos.length > 0 ? todos.slice(-1)[0].id + 1 : 1,
      title: todoValue,
      completed: false,
    };
    addTodo(todo);
    setTodoValue("");
  };

  return (
    <Container>
      <Stack width={"500px"} mx={"auto"}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" color={"white"} textAlign={"center"} my={2}>
            Todos
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              columnGap: "10px",
            }}
          >
            <TodoInput setTodoValue={setTodoValue} todoValue={todoValue} />
            <Button
              variant="contained"
              color="primary"
              sx={{ width: "150px" }}
              type="submit"
            >
              Add
            </Button>
          </Box>
          <Main />
        </form>
      </Stack>
    </Container>
  );
};

export default App;
