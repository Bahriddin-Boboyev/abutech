import * as React from "react";
import { TransitionProps } from "@mui/material/transitions";
import { TodoStore } from "../store/todoStore";
import {
  Slide,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  Button,
  TextField,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  change: string;
  setChange: (value: string) => void;
  id: number | undefined;
}

export const Modal = ({ open, setOpen, change, setChange, id }: Props) => {
  const { editTodo } = TodoStore((state) => state);
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleClose();
    if (id) {
      editTodo(id, change);
    }
  };

  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edit todo"}</DialogTitle>
        <DialogContent sx={{ width: "500px", minHeight: "80px" }}>
          <TextField
            label="Todo"
            variant="outlined"
            fullWidth
            color="secondary"
            value={change}
            onChange={(e) => setChange(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
