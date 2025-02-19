import React from "react";
import LanguageDropdown from "./LanguageDropdown";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white border border-black rounded-lg p-2 w-full max-w-4xl mx-auto">
      {/* Logo */}
      <div className="bg-yellow-300 px-4 py-2 font-bold text-black border-r border-black rounded-l-lg">
        MI PORTAFOLIO
      </div>

      {/* Menú */}
      <ul className="flex space-x-6 px-4">
        <li className="text-black cursor-pointer hover:underline">Inicio</li>
        <li className="text-black cursor-pointer hover:underline">Sobre mí</li>
        <li className="text-black cursor-pointer hover:underline">Servicios</li>
        <li className="text-black cursor-pointer hover:underline">
          Portafolio
        </li>
      </ul>

      {/* Selector de idioma */}
      <div className="flex items-center border border-black rounded-lg px-3 py-1 cursor-pointer">
        <LanguageDropdown />
      </div>
    </nav>
  );
};
export default Navbar;
