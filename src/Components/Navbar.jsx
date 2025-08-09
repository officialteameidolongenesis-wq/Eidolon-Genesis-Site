// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-80 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Titolo */}
        <a href="#hero" className="text-2xl font-bold text-white tracking-wider hover:text-indigo-400 transition">
          Eidolon Genesis
        </a>

        {/* Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#eidolon" className="hover:text-indigo-400 transition">Eidolon</a></li>
          <li><a href="#characters" className="hover:text-indigo-400 transition">Personaggi</a></li>
          <li><a href="#factions" className="hover:text-indigo-400 transition">Fazioni</a></li>
          <li><a href="#world" className="hover:text-indigo-400 transition">Mondo</a></li>
          <li><a href="#alberi" className="hover:text-indigo-400 transition">Alberi di Nirn</a></li>
          <li><a href="#faq" className="hover:text-indigo-400 transition">FAQ</a></li>
          <li><a href="#contact" className="hover:text-indigo-400 transition">Contatti</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
