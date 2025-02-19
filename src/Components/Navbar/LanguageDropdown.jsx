import { useState } from "react";

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("ES");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Botón */}
      <div
        className="flex items-center border border-black rounded-lg px-3 py-1 cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        <span className="mr-2">{language}</span> 🌐
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-black rounded-lg shadow-md">
          <ul className="py-1">
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => changeLanguage("ES")}
            >
              🇪🇸 Español
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => changeLanguage("EN")}
            >
              🇬🇧 English
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => changeLanguage("FR")}
            >
              🇫🇷 Français
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
