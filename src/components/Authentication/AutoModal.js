import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { AppBar } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Login from "../../components/Authentication/Login";
import Register from "../../components/Authentication/Register";
import './autoModal.css';

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

function AutoModal() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              <Tab  label="Delivery" />
              <Tab  label="Archive Items" />
            </Tabs>
          </AppBar>
          {value === 0 && <Login handleClose={handleClose}/>}
          {value === 1 && <Register handleClose={handleClose}/>}
        </Box>
        </div>
      </Modal>
    </div>
  );
}
export default AutoModal;
