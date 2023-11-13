import * as React from "react";
import { TransitionProps } from "@mui/material/transitions";
import todoStore from "../store/store";
import { nanoid } from "nanoid";
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const { modal, removeModal, addTodo, editTodo } = todoStore;
  const [value, setValue] = React.useState<string>("");

  const handleClose = () => {
    setOpen(false);
    removeModal();
    setValue("");
  };

  const handleSubmit = () => {
    handleClose();
    removeModal();
    if ("isOpen" in modal && modal.value) {
      editTodo(modal.value.id, value);
    } else {
      const todoValue = {
        id: nanoid(),
        title: value,
        done: false,
        date: Date.now(),
      };
      addTodo(todoValue);
    }
    setValue("");
  };

  React.useEffect(() => {
    if ("isOpen" in modal && modal.isOpen) {
      if (modal.value) {
        setValue(modal.value.title);
      }
      setOpen(true);
    }
  }, [modal]);

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
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={value.length <= 0}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
