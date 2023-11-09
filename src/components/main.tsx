import { TodoStore } from "../store";
import { Box, Typography, Grid, List, ListItem, Checkbox } from "@mui/material";

export function Main() {
  const { todos, completeTodo } = TodoStore((state) => state);

  return (
    <Box
      sx={{
        border: "1px solid white",
        minHeight: "400px",
        mt: "20px",
        borderRadius: "5px",
      }}
    >
      <Grid item xs={6} px={"10px"}>
        <List>
          {todos?.map((item) => (
            <ListItem
              key={item.id}
              sx={{
                mx: "auto",
                width: "400px",
                height: "50px",
                my: "5px",
                borderRadius: "5px",
                border: "1px solid #2196f3",
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
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );
}
