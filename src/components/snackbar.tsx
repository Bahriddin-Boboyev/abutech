import { Snackbar, Alert } from "@mui/material";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
  message: string;
}

export const MuiSnackbar = ({ open, setOpen, message }: Props) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={6000}
      onClose={() => setOpen(false)}
    >
      <Alert
        onClose={() => setOpen(false)}
        severity="success"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
