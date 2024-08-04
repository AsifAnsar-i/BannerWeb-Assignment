import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 flex justify-between items-center shadow-lg">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold">BannerWeb</h1>
      </div>
      <nav className="space-x-6">
        <Link
          href="/"
          className="text-lg font-medium hover:text-gray-200 transition-colors"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-lg font-medium hover:text-gray-200 transition-colors"
        >
          About
        </Link>
        <Link
          href="#services"
          className="text-lg font-medium hover:text-gray-200 transition-colors"
        >
          Services
        </Link>
        <Link
          href="#contact"
          className="text-lg font-medium hover:text-gray-200 transition-colors"
        >
          Contact
        </Link>
      </nav>
      <div>
        <button className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-gray-100 transition-colors">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default Header;
