import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faAngleDoubleRight,
  faHome,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <nav className="nav-bar">
        <ul className="navbar-nav">
          <li className="logo">
            <Link to="/" className="nav-links">
              <span className="nav-text">Gamers Connekt</span>
              {/* <i class="fas fa-angle-double-right"></i> */}
              <FontAwesomeIcon
                className="icon"
                icon={faAngleDoubleRight}
              ></FontAwesomeIcon>
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/" className="nav-links">
              {/* <i class="fas fa-home"></i> */}
              <FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon>
              <span className="nav-text"> Home </span>
            </Link>
          </li>

          <li className="nav-items">
            <Link to="/store" className="nav-links">
              {/* <i class="fas fa-home"></i> */}
              <FontAwesomeIcon
                className="icon"
                icon={faStore}
              ></FontAwesomeIcon>
              <span className="nav-text"> Store </span>
            </Link>
          </li>

          <li className="nav-items"></li>

          <li className="nav-items"></li>

          <li className="nav-items">
            <Link to="/sign_in" className="nav-links">
              <FontAwesomeIcon
                className="icon"
                icon={faSignInAlt}
              ></FontAwesomeIcon>
              <span className="nav-text sign-in"> SignIn </span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
