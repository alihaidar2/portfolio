"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

/**
 * Navbar with a desktop menu and a mobile hamburger toggle.
 * - Same styling: dark gray background, emerald hover.
 * - "Ali Haidar | Full Stack & Data Engineer" clickable home link.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1f1f1f] text-white py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Brand Name / Home Link */}
        <Link
          href="/"
          className="text-xl font-bold text-white hover:text-emerald-400 transition"
        >
          {"{AH}"} | Full Stack & Data Engineer
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/projects" className="hover:text-emerald-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-emerald-400 transition">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 py-4 rounded-lg shadow-lg absolute w-full left-0 top-16">
          <div className="flex flex-col items-center space-y-4">
            <Link
              href="/projects"
              className="hover:text-emerald-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-emerald-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
