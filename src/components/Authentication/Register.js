import React, { useState } from "react";
import { auth } from "../../firebase-config";
import { Box } from "@mui/system";
import { Button, TextField } from "@material-ui/core";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register({ handleClose }) {
  // Know what the user wrote
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberme, setRememberMe] = useState(false);

  

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("The passwords do not match");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      alert(`Sign Up Successful. Welcome ${result.user.email}`);
      handleClose();
    } catch (error) {
      alert("Error");
      return;
    }
  };

 

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
      />
      <Button
        variant="contained"
        size="large"
        style={{ backgroundColor: "gold" }}
        onClick={handleSubmit}
      >
        Register
      </Button>
    
    </Box>
  );
}

export default Register;
