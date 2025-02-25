import React from "react";
import { Globe, Menu } from "lucide-react";

const Footer = () => {
  return (
    <footer class="text-center py-4 bg-yellow-100 flex flex-col p-5 ">
      <p class="text-gray-400 mb-7 mt-7">
        ¡Visítame a mis proyectos personales !
      </p>
      <div class="flex justify-center space-x-4 mb-4">
        <a href="#" class="text-gray-400">
          e-book
        </a>
        <a href="#" class="text-gray-400">
          Profile Hub
        </a>
      </div>
      <p class="text-gray-700 mb-2">
        Mi portafolio | tatianasuarezrosas332@gmail.com
      </p>
      <p class="text-gray-700">©Diseñado por Tatiana Suarez 2025</p>
    </footer>
  );
};

export default Footer;
