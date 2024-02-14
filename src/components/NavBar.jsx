import React from "react";
import { Link } from "react-router-dom";
import SearchBtn from "./SearchBtn";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <h1>Anime Server</h1>
        Learn more about your most favorites anime
      </div>

      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/favorites">
        <div>Favorites</div>
      </Link>
      <Link to="/anime-info">
        <div>Anime Info</div>
      </Link>

      <SearchBtn />

      <Link to="/login">
        <div>Sign In</div>
      </Link>
    </div>
  );
};

export default NavBar;
