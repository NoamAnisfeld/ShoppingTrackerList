import { Snackbar } from "@mui/material";
import React from "react";
import { useState } from "react";
import MuiAlert from '@material-ui/lab/Alert';

const Alert = () => {
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success",
  });

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <Snackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
    >
      <MuiAlert
        onClose={handleCloseAlert}
        elevation={10}
        variant="filled"
        severity={alert.type}
      >
        {alert.message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Alert;