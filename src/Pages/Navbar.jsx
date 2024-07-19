import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
      <Link to="/" className="text-3xl font-semibold text-white ">
        Crud
      </Link>
      <Link
        to={"/add-user"}
        className="w-48 bg-white text-blue-400 font-semibold text-xl h-12 rounded-lg flex justify-center items-center"
      >
        Add Users
      </Link>
    </div>
  );
};

export default Navbar;
