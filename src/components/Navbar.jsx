import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 absolute w-full z-10">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-500">🍴 Restoran</h1>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-white font-medium">
        <li className="text-orange-500">HOME</li>
        <li>ABOUT</li>
        <li>SERVICE</li>
        <li>MENU</li>
        <li>PAGES</li>
        <li>CONTACT</li>
      </ul>

      {/* Button */}
      <div className="hidden md:block">
        <Button>BOOK A TABLE</Button>
      </div>
    </div>
  );
};

export default Navbar;
