import React from "react";
import { Link } from "react-router-dom";
import SearchBtn from "./SearchBtn";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>Anime List</h1>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to='/favorites'>
        <div>Favorites</div>
      </Link>
      <Link to='/anime-info'>
        <div>Anime Info</div>
      </Link>
      <SearchBtn/>
      <Link to='/login'>
        <div>Sign In</div>
      </Link>
    </div>
  );
};

export default NavBar;
