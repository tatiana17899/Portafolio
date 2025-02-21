import React, { useState } from "react";
import { Globe, Menu } from "lucide-react";

const Navbar = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between w-full px-4 py-2">
      {/* Logo y menú principal */}
      <div className="flex items-center">
        <div
          className="text-black font-bold px-4 py-4 rounded-l-lg border border-black min-w-[180px]"
          style={{ backgroundColor: "#EFFF76", fontSize: "20px" }}
        >
          <span className="font-bold text-black">MI PORTAFOLIO</span>
        </div>
        {/* Menú de navegación (oculto en móviles) */}
        <div
          className="hidden md:flex bg-white text-black px-8 py-2 border border-black border-l-0 flex-grow "
          style={{
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            fontSize: "20px",
          }}
        >
          <div className="flex space-x-8 px-4 py-2 ">
            <a
              href="#"
              className="text-black hover:text-gray-600"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Inicio
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Sobre mí
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Servicios
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-600"
              style={{
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              Portafolio
            </a>
          </div>
        </div>
      </div>

      {/* Botón de menú móvil */}
      <div className="md:hidden">
        <button
          className="p-2 text-black focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Menú móvil (se muestra al hacer clic en el botón) */}
      {isMobileMenuOpen && (
        <div className="w-full md:hidden">
          <div className="flex flex-col bg-white border border-black mt-2 rounded-md">
            <a href="#" className="px-4 py-2 text-black hover:bg-gray-200">
              Inicio
            </a>
            <a href="#" className="px-4 py-2 text-black hover:bg-gray-200">
              Sobre mí
            </a>
            <a href="#" className="px-4 py-2 text-black hover:bg-gray-200">
              Servicios
            </a>
            <a href="#" className="px-4 py-2 text-black hover:bg-gray-200">
              Portafolio
            </a>
          </div>
        </div>
      )}

      {/* Selector de idioma */}
      <div className="relative ml-2 h-16">
        <div
          className="flex items-center border border-black h-full px-4 py-3 cursor-pointer w-[150px]"
          style={{
            borderBottomRightRadius: "10px",
            borderTopRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
          onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
        >
          <span className="text-black mr-2">ES</span>
          <Globe className="text-black" size={20} />
        </div>
        {isLanguageMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-black rounded-md shadow-lg">
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              🇪🇸 Español
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              🇪n Inglés
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-black hover:bg-gray-200"
            >
              zh Chino
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
