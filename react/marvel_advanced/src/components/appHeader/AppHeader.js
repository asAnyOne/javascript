import { Link, NavLink } from "react-router-dom";

import "./appHeader.scss";

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      textShadow: "0  0 30px blue",
                      color: "red",
                      textDecoration: "underline",
                    }
                  : null
              }
              end
              to="/"
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      textShadow: "0 0 30px blue",
                      color: "red",
                      textDecoration: "underline",
                    }
                  : null
              }
              to="/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
