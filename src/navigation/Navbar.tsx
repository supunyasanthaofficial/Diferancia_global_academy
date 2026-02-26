import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0a1128] text-white shadow-lg">
      <div className="flex items-center">
        <div className="bg-white px-4 py-2 rounded-full flex items-center shadow-md">
          <img
            src={Logo}
            alt="DIFERANCIA Global Academy"
            className="h-10 w-auto object-contain"
          />
        </div>
      </div>

      <div className="hidden md:flex items-center space-x-10">
        <Link
          to="/"
          className="text-lg font-semibold hover:text-orange-400 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-lg font-semibold hover:text-orange-400 transition-colors"
        >
          About
        </Link>
        <Link
          to="/course"
          className="text-lg font-semibold hover:text-orange-400 transition-colors"
        >
          Course
        </Link>
        <Link
          to="/apply"
          className="text-lg font-semibold hover:text-orange-400 transition-colors"
        >
          Apply Now
        </Link>
        <Link
          to="/gallery"
          className="text-lg font-semibold hover:text-orange-400 transition-colors"
        >
          Gallery
        </Link>
      </div>

      <div>
        <Link
          to="/contact"
          className="bg-[#e68a00] hover:bg-[#ff9900] text-white px-8 py-2.5 rounded-full text-lg font-bold transition-all duration-300 shadow-lg"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
