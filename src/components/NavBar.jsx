import React from "react";
import { Link } from "react-router-dom";
import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <nav>
        <img
          className="img"
          src="https://e7.pngegg.com/pngimages/142/119/png-clipart-cat-paw-dog-paw-prints-animals-pet-thumbnail.png"
          alt=""
        />
        <span>CATS WORLD</span>
        <Link to="/" >Home</Link>
        <Link to="/details">Details</Link>
      </nav>
    </div>
  );
};

export default NavBar;
