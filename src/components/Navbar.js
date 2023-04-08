import React from "react";

import netflixLogo from "../assets/netflixlogo.png";

const Navbar = () => {
  return (
    <nav className="bg-black flex flex-row items-center justify-between p-4">
      <img src={netflixLogo} alt="netflix-logo" className="h-10" />
      <button className="bg-red-600 rounded-sm py-1 px-2 text-white font-semibold hover:bg-red-700 trasition: duration-200">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;
