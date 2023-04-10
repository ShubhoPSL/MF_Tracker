import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="main">
        <div className="brand-div">
          <h2 className="brand-heading">
            <Link to="/">
              <img className="logo" src="/images/logo1.png" alt="brandLogo" />
              {/* <h1 className="brand">Paisa Control</h1> */}
            </Link>
          </h2>
        </div>
        <div className="menu">
          <ul className="list">
            <li className="nav-list">Home</li>
            <li className="nav-list">Login</li>
            {/* {navList.map((item) => (
              <button className="nav-list">{item.name}</button>
            ))} */}
          </ul>
          <button className="contact-button">Contact Us</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
