import React from "react";
import Link from "next/link";

const Navbar = ({ isOpen, toggle }) => {
  return (
    <nav className="bg-transparent md:mb-20">
      <div className="container px-2 py-4 flex flex-nowrap justify-between items-center mx-auto max-w-7xl">
        <button
          onClick={toggle}
          type="button"
          className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-600 focus:ring-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
