import "./header.css";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserSidebar from "../Authentication/UserSideBar";
import AuthModal from "../Authentication/AuthModal";
import { useState } from "react";

function Header(user) {

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Link to="/" className="logo">
            Tracker List
          </Link>
          <div>
            <nav className="nav__container">
              <ul className="ul__nav">
                <Link to="/about">Contact</Link>
                <Link to="/archive">Archive</Link>
              </ul>
            </nav>
          </div>
          {user ? <AuthModal/> : <AuthModal /> }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;