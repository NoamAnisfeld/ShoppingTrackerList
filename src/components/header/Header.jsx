import "./header.css";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import UserSidebar from '../authentication/UserSideBar';
import AuthModal from "../authentication/AuthModal";
import { useState,useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

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
          {user ? <UserSidebar/> : <AuthModal /> }
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;