import { Alert, Snackbar } from "@mui/material";

const Snack = ({ isOpen, handleClose }) => {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={3000}>
      <Alert severity="success">Item Added To Cart!</Alert>
    </Snackbar>
  );
};

export default Snack;
