import React from "react";
import { Globe, Menu } from "lucide-react";

const Servicios = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center p-4"
      style={{
        marginBottom: "200px",
      }}
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-center text-3xl font-semibold text-gray-700 mb-8">
          Servicios
        </h1>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-black flex items-center">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center m-3">
              <img
                alt="Icono de diseño UX/UI"
                className="w-16 h-16 rounded-full"
                height="50"
                src="https://i.ibb.co/jBbwnM3/el-pensamiento-de-diseno.png"
                width="50"
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <h2 className="text-xl font-semibold text-gray-700">
                Diseñador UX/UI
              </h2>
              <p className="text-gray-600 mt-2">
                Diseño de interfaces modernas para aplicaciones móviles y sitios
                web con Figma.
              </p>
              <p className="text-gray-600">
                Creación de prototipos interactivos y wireframes.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-black flex items-center">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center m-3">
              <img
                alt="Icono de diseño UX/UI"
                className="w-16 h-16 rounded-full"
                height="50"
                src="https://i.ibb.co/xKRMQ5Jz/desarrollo-de-frontend.png"
                width="50"
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <h2 className="text-xl font-semibold text-gray-700">
                Diseñador UX/UI
              </h2>
              <p className="text-gray-600 mt-2">
                Diseño de interfaces modernas para aplicaciones móviles y sitios
                web con Figma.
              </p>
              <p className="text-gray-600">
                Creación de prototipos interactivos y wireframes.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-black flex items-center">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center m-3">
              <img
                alt="Icono de diseño UX/UI"
                className="w-16 h-16 rounded-full"
                height="50"
                src="https://i.ibb.co/PBCRLnv/desarrollador-full-stack.png"
                width="50"
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <h2 className="text-xl font-semibold text-gray-700">
                Diseñador UX/UI
              </h2>
              <p className="text-gray-600 mt-2">
                Diseño de interfaces modernas para aplicaciones móviles y sitios
                web con Figma.
              </p>
              <p className="text-gray-600">
                Creación de prototipos interactivos y wireframes.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-black flex items-center">
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center m-3">
              <img
                alt="Icono de diseño UX/UI"
                className="w-16 h-16 rounded-full"
                height="50"
                src="https://i.ibb.co/gMkgSfSz/control-deslizante.png"
                width="50"
              />
            </div>
            <div style={{ marginLeft: "10px" }}>
              <h2 className="text-xl font-semibold text-gray-700">
                Diseñador UX/UI
              </h2>
              <p className="text-gray-600 mt-2">
                Diseño de interfaces modernas para aplicaciones móviles y sitios
                web con Figma.
              </p>
              <p className="text-gray-600">
                Creación de prototipos interactivos y wireframes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
