import TodoStore from "../store/store";
import { format } from "date-fns";
import { ITodo } from "../../types";
import { ListItem, Checkbox, Box, Typography, Button } from "@mui/material";

type Props = {
  item: ITodo;
};

export const TodoList = ({ item }: Props) => {
  const { removeTodo, isCheckedTodo, addModal } = TodoStore;
  return (
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
          sx={{
            textDecoration: item.done ? "line-through" : "unset",
          }}
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
          onClick={() => addModal({ isOpen: true, name: "edit", value: item })}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </Button>
      </Box>
    </ListItem>
  );
};
