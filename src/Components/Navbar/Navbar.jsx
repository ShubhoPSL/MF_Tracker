import React from "react";
import { navList } from "./Navlist";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="main">
        <div className="brand-div">
          <h2 className="brand-heading">
            <Link to="/">
              <h1 className="brand">PaisaControl</h1>
            </Link>
          </h2>
        </div>
        <div className="menu">
          <ul className="list">
            {navList.map((item) => (
              <button className="nav-list">{item.name}</button>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
