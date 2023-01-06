import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           Sylani
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Donations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Education"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Education
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Service"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Services
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <button className="w-[100px] h-[49px] border-2 border-[#ffdd40] text-[#ffdd40] hover:decoration-[#ffdd40] hover:border-black hover:text-black">Login</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;