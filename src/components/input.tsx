import { TextField } from "@mui/material";
import { FC } from "react";

export const TodoInput: FC<{
  todoValue: string;
  setTodoValue: (value: string) => void;
}> = ({ setTodoValue, todoValue }) => {
  return (
    <>
      <TextField
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
        fullWidth
        id="outlined-basic"
        label="Type your task"
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
            },
            "&:hover fieldset": {
              borderColor: "blue",
            },
            "&.Mui-focused fieldset": {
              borderColor: "blue",
            },
          },
        }}
        InputProps={{
          style: {
            color: "#fff",
          },
        }}
        InputLabelProps={{
          style: { color: "#fff" },
        }}
      />
    </>
  );
};
