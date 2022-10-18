import "../navBar/navBar.css";
import "./header.css";
import { AppBar, Container, Toolbar } from "@material-ui/core";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import AutoModal from "../Authentication/AutoModal";

function Header(user) {
  return (
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Link to="/" className="logo">
              Shopping Tracker List
            </Link>
            <div>
              <nav className="nav__container">
                <ul className="ul__nav">
                  <CustomLink to="/about">About</CustomLink>
                </ul>
              </nav>
            </div>
            {user?<AutoModal /> : <AutoModal/>}
          </Toolbar>
        </Container>
      </AppBar>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Header;
