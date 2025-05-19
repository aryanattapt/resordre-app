"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            MyBrand
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-black">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-black">
              Services
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none text-2xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 pt-2 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/about" className="block text-gray-700 hover:text-black">
            About
          </Link>
          <Link
            href="/services"
            className="block text-gray-700 hover:text-black"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="block text-gray-700 hover:text-black"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
