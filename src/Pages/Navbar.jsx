import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__section">
      <Link to="/" className="text-3xl font-semibold text-white ">
        Crud
      </Link>
      <Link to={"/add-user"} className="navbar__link">
        Add Users
      </Link>
    </div>
  );
};

export default Navbar;
