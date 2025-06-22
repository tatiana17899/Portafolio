import React from "react";
import { Globe, Menu } from "lucide-react";

const Footer = () => {
  return (
    <footer class="text-center py-4 bg-yellow-100 flex flex-col p-5 ">
      <p class="text-gray-400 mb-7 mt-7">¡Visítame a mi tienda virtual !</p>
      <div class="flex justify-center space-x-4 mb-4">
        <a href="https://tatcode.gumroad.com/" class="text-gray-400">
          Gumroad
        </a>
        <a href="https://ko-fi.com/tatcode" class="text-gray-400">
          Ko-fi
        </a>
      </div>
      <p class="text-gray-700 mb-2">
        Tambien encuentrame en{" "}
        <a href="https://dribbble.com/tatiana-mercedes">dribbble</a>
      </p>
      <p class="text-gray-700">©Diseñado por Tatiana Suarez 2025</p>
    </footer>
  );
};

export default Footer;
