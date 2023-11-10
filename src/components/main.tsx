import { TodoStore } from "../store";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { makeStyles } from "@mui/styles";
import { Modal } from "./modal";
import { useState, useRef } from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  Checkbox,
  ButtonGroup,
  IconButton,
} from "@mui/material";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
});

export function Main() {
  const { todos, completeTodo, deleteTodo } = TodoStore((state) => state);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const saveTodoValue = useRef<string>("");
  const [change, setChange] = useState<string>("");

  const handleClick = (value: string) => {
    setOpen((prev) => !prev);
    saveTodoValue.current = value;
    setChange(saveTodoValue.current);
  };

  return (
    <Box
      sx={{
        border: "1px solid white",
        minHeight: "400px",
        mt: "20px",
        borderRadius: "5px",
      }}
    >
      <Grid item xs={6}>
        {!todos?.length && (
          <Typography component={"h3"} className={classes.root} color="#2196f3">
            Todos empty
          </Typography>
        )}
        <List>
          {todos?.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                mx: "auto",
                width: "450px",
                height: "50px",
                my: "5px",
                borderRadius: "5px",
                border: "1px solid #2196f3",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Checkbox
                  checked={item.completed}
                  onClick={() => completeTodo(item.id)}
                  sx={{
                    color: "#2196f3",
                    "&.Mui-checked": {
                      color: "#2196f3",
                    },
                  }}
                />
                <Typography
                  component="h3"
                  sx={
                    item.completed
                      ? {
                          textDecoration: "line-through",
                          color: "#f50057",
                        }
                      : {}
                  }
                >
                  {item.title}
                </Typography>
              </Box>
              <ButtonGroup>
                <IconButton
                  color="error"
                  size="small"
                  onClick={() => deleteTodo(item.id)}
                >
                  <DeleteIcon color="error" />
                </IconButton>
                <IconButton
                  color="primary"
                  size="small"
                  onClick={() => handleClick(item.title)}
                >
                  <EditIcon color="primary" />
                </IconButton>
              </ButtonGroup>
            </ListItem>
          ))}
          <Modal
            open={open}
            setOpen={setOpen}
            change={change}
            setChange={setChange}
          />
        </List>
      </Grid>
    </Box>
  );
}
