import React ,{useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AppBar } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Login from "./Login";
import Register from "./Register";
import './autoModal.css';
import GoogleButton from "react-google-button";
import { auth } from "../../firebase-config";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

function AuthModal() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        alert(`Sign Up Successful. Welcome ${res.user.email}`)
        handleClose();
      })
      .catch((error) => {
        alert(error.message)
        return;
      });
  };

  const githubProvider = new GithubAuthProvider();

  const signInWithGitHub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        alert(`Sign Up Successful. Welcome ${res.user.email}`)
        handleClose();
      })
      .catch((error) => {
        alert(error.message)
        return;
      });
  };

  return (
    <div className="header">
      <Button className="login" onClick={handleOpen}>
        Login
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        center
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
      <div className="paper">
        <Box sx={style} className="box">
          <AppBar
            position="static"
            style={{ backgroundColor: "transparent", color: "white" }}
          >
            <Tabs className="tabs"
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab  label="Login" />
              <Tab  label="Register" />
            </Tabs>
          </AppBar>
          {value === 0 && <Login handleClose={handleClose}/>}
          {value === 1 && <Register handleClose={handleClose}/>}
          <Box className="google">
            <span style={{color:'black'}}>OR</span>
              <GoogleButton
                style={{width:'100%',outlined:'none'}}
                onClick={signInWithGoogle}
              />
          </Box>
        </Box>  
        </div>
      </Modal>
    </div>
  );
}
export default AuthModal;
