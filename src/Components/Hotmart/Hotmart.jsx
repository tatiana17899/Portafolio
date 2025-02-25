import React from "react";
import { Globe, Menu } from "lucide-react";

const Hotmart = () => {
  return (
    <div
      className="flex flex-col md:flex-row p-6 rounded-lg shadow-lg"
      style={{ backgroundColor: "#FFC862" }}
    >
      {/* Sección izquierda */}
      <div className="flex-1 p-4" style={{ margin: "100px" }}>
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
          Programación desde Cero: Domina la Lógica y Crea Código sin Miedo
        </h1>
        <p className="mt-4 text-lg font-semibold">
          ¿Quieres empezar en el mundo de la programación pero no sabes por
          dónde?
        </p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-center">
            <span className="text-green-600 text-xl">✅</span> Explicaciones
            claras y fáciles de entender.
          </li>
          <li className="flex items-center">
            <span className="text-green-600 text-xl">✅</span> Ejercicios
            prácticos y ejemplos reales.
          </li>
        </ul>
        <div class="relative inline-block m-6">
          <div class="absolute top-2 right-3 bg-pink-400 rounded-full w-full h-full border  border-black"></div>
          <div class="absolute top-1 right-2 bg-cyan-400 rounded-full w-full h-full border border-black"></div>
          <button class="relative bg-white text-black font-bold py-2 px-4 rounded-full border border-black p-8">
            ¡Comprar ahora!
          </button>
        </div>
      </div>
      {/* Sección derecha */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="flex">
          <div class="flex items-center justify-center bg-pink-300 rounded-l-full h-24 w-48 border  border-black">
            <div class="flex items-center justify-center bg-gray-400 rounded-full h-16 w-16 border  border-black">
              <i class="fab fa-tiktok text-white text-3xl"></i>
            </div>
          </div>
          <img
            src="/mnt/data/image.png"
            alt="Libro MUNA"
            className="max-w-sm rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hotmart;
