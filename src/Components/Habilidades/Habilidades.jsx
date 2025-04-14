import React from "react";
import { Globe, Menu } from "lucide-react";

const Habilidades = () => {
  return (
    <div
      style={{
        paddingLeft: "60px",
        paddingRight: "60px",
        paddingBottom: "100px",
      }}
      id=""
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-700">Habilidades</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Diseñador UX/UI */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-lg transform translate-x-3 translate-y-3 border border-black"
            style={{
              backgroundColor: "#CFF4BC",
            }}
          ></div>
          <div className="relative bg-white p-4 rounded-lg border border-black ">
            <div className="flex items-center mb-4">
              <div className="border border-black rounded-lg p-2 m-2">
                <img
                  alt="Icono de diseño UX/UI"
                  className="w-12 h-12 mr-4"
                  height="50"
                  src="https://i.ibb.co/vxkhbWcd/figma-2.png"
                  width="50"
                />
              </div>
              <h2
                className="font-bold text-gray-700"
                style={{ fontSize: "22px" }}
              >
                Diseñador UX/UI
              </h2>
            </div>
            <p className="text-gray-600 mb-4" style={{ marginLeft: "10px" }}>
              Herramientas que utilizo:
            </p>
            <p
              className="font-bold text-gray-500 mb-2"
              style={{ marginLeft: "10px", marginTop: "100px" }}
            >
              Herramientas:
            </p>
            <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                <img
                  alt="Logo de Figma"
                  className="w-8 h-8"
                  height="30"
                  src="https://i.ibb.co/CpCHB64G/figma-3.png"
                  width="30"
                />
                <p className="m-2">Figma</p>
                <p className="m-2">
                  <a
                    href="https://coursera.org/share/5a3be2237c5a3c288280472d02495493"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Logo de Figma"
                      className="w-8 h-8"
                      height="30"
                      src="https://i.ibb.co/9kj2nN9X/calidad-1.png"
                      width="30"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Desarrollador Web (Front-End) */}
        <div className="relative md:row-span-2">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg transform translate-x-1 translate-y-1 border border-black"
              style={{
                backgroundColor: "#F5B0FD",
              }}
            ></div>
            <div className="relative bg-white p-4 rounded-lg border border-black transform translate-x-4 translate-y-4">
              <div className="flex items-center mb-4">
                <div className="border border-black rounded-lg p-2 m-2">
                  <img
                    alt="Icono de diseño UX/UI"
                    className="w-12 h-12 mr-4"
                    height="50"
                    src="https://i.ibb.co/k6D22DTK/codigo-3.png"
                    width="50"
                  />
                </div>
                <h2
                  className="font-bold text-gray-700"
                  style={{ fontSize: "22px" }}
                >
                  Desarrolador Web (Front-End)
                </h2>
              </div>
              <p className="text-gray-600 mb-4" style={{ marginLeft: "10px" }}>
                Herramientas que utilizo:
              </p>
              <p
                className="font-bold text-gray-500 mb-2"
                style={{ marginLeft: "10px", marginTop: "100px" }}
              >
                Herramientas:
              </p>
              <div className="flex space-x-4">
                <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                  <img
                    alt="Logo de Figma"
                    className="w-8 h-8"
                    height="30"
                    src="https://i.ibb.co/TBv5PsG5/html-5-1.png"
                    width="30"
                    style={{ marginTop: "5px" }}
                  />
                  <p className="m-2">HTML</p>
                  <p className="m-2">
                    <a
                      href="https://freecodecamp.org/certification/tata1700/responsive-web-design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Logo de Figma"
                        className="w-8 h-8"
                        height="30"
                        src="https://i.ibb.co/9kj2nN9X/calidad-1.png"
                        width="30"
                      />
                    </a>
                  </p>
                </div>
                <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                  <img
                    alt="Logo de Figma"
                    className="w-8 h-8"
                    height="30"
                    src="https://i.ibb.co/YFxq4MD3/css-3.png"
                    width="30"
                    style={{ marginTop: "5px" }}
                  />
                  <p className="m-2">CSS</p>
                  <p className="m-2">
                    <a
                      href="https://freecodecamp.org/certification/tata1700/responsive-web-design"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        alt="Logo de Figma"
                        className="w-8 h-8"
                        height="30"
                        src="https://i.ibb.co/9kj2nN9X/calidad-1.png"
                        width="30"
                      />
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                  <img
                    alt="Logo de Figma"
                    className="w-8 h-8"
                    height="30"
                    src="https://i.ibb.co/C3bjf1Sh/js.png"
                    width="30"
                    style={{ marginTop: "5px" }}
                  />
                  <p className="m-2">Javascript</p>
                  <p className="m-2">
                    <img
                      alt="Logo de Figma"
                      className="w-8 h-8"
                      height="30"
                      src="https://i.ibb.co/9kj2nN9X/calidad-1.png"
                      width="50"
                    />
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                  <img
                    alt="Logo de Figma"
                    className="w-8 h-8"
                    height="30"
                    src="https://i.ibb.co/0jGykN7H/png-clipart-bootstrap-logo-thumbnail-tech-companies-thumbnail-removebg-preview.png"
                    width="30"
                    style={{ marginTop: "5px" }}
                  />
                  <p className="m-2">Boostrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desarrollador Software (Full-Stack) */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-lg transform translate-x-3 translate-y-3 border border-black"
            style={{
              backgroundColor: "#F5FFBC",
            }}
          ></div>
          <div className="relative bg-white p-4 rounded-lg border border-black ">
            <div className="flex items-center mb-4">
              <div className="border border-black rounded-lg p-2 m-2">
                <img
                  alt="Icono de diseño UX/UI"
                  className="w-12 h-12 mr-4"
                  height="50"
                  src="https://i.ibb.co/35gHzjwk/dato.png"
                  width="50"
                />
              </div>
              <h2
                className="font-bold text-gray-700"
                style={{ fontSize: "22px" }}
              >
                Desarrolador Software - MVC , Auth Individual
              </h2>
            </div>
            <p className="text-gray-600 mb-4" style={{ marginLeft: "10px" }}>
              Herramientas que utilizo:
            </p>
            <p
              className="font-bold text-gray-500 mb-2"
              style={{ marginLeft: "10px", marginTop: "20px" }}
            >
              Herramientas:
            </p>
            <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                <img
                  alt="Logo de Figma"
                  className="w-8 h-8"
                  height="30"
                  src="https://i.ibb.co/q3Q5p8pM/NET-Core-Logo-svg.png"
                  width="30"
                  style={{ marginTop: "5px" }}
                />
                <p className="m-2">.Net Core</p>
              </div>
              <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                <img
                  alt="Logo de Figma"
                  className="w-8 h-8"
                  height="30"
                  src="https://i.ibb.co/Lz4vBt5J/Microsoft-NET-logo-svg.png"
                  width="30"
                  style={{ marginTop: "5px" }}
                />
                <p className="m-2">.Net </p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                <svg
                  height="30"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 -1.428 255.582 290.108"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                    fill="#a179dc"
                  />
                  <path
                    d="m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z"
                    fill="#280068"
                  />
                  <path
                    d="m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                    fill="#390091"
                  />
                  <g fill="#fff">
                    <path d="m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z" />
                    <path d="m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z" />
                  </g>
                </svg>
                <p className="m-2">c#</p>
              </div>
              <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                <img
                  alt="Logo de Figma"
                  className="w-8 h-8"
                  height="30"
                  src="https://i.ibb.co/B2ttWSfB/Blazor.png"
                  width="30"
                  style={{ marginTop: "5px" }}
                />
                <p className="m-2">Blazor</p>
              </div>
            </div>
          </div>
        </div>
        {/* Gestión de Base de Datos */}
        <div className="relative md:row-span-2">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-lg transform translate-x-3 translate-y-3 border border-black"
              style={{
                backgroundColor: "#FFC4C4",
              }}
            ></div>
            <div className="relative bg-white p-4 rounded-lg border border-black ">
              <div className="flex items-center mb-4">
                <div className="border border-black rounded-lg p-2 m-2">
                  <img
                    alt="Icono de diseño UX/UI"
                    className="w-12 h-12 mr-4"
                    height="50"
                    src="https://i.ibb.co/21sxJhcQ/software.png"
                    width="50"
                  />
                </div>
                <h2
                  className="font-bold text-gray-700"
                  style={{ fontSize: "22px" }}
                >
                  Gestión de Base de Datos
                </h2>
              </div>
              <p className="text-gray-600 mb-4" style={{ marginLeft: "10px" }}>
                Herramientas que utilizo:
              </p>
              <p
                className="font-bold text-gray-500 mb-2"
                style={{ marginLeft: "10px" }}
              >
                Herramientas:
              </p>
              <div className="flex space-x-4">
                <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                  <img
                    alt="Logo de Figma"
                    className="w-8 h-8"
                    height="30"
                    src="https://i.ibb.co/C58tgFMW/servidor-sql.png"
                    width="30"
                    style={{ marginRight: "10px", marginLeft: "5px" }}
                  />
                  <p className="m-2">SQLite</p>
                  <p className="m-2">
                    <img
                      alt="Logo de Figma"
                      className="w-8 h-8"
                      height="30"
                      src="https://i.ibb.co/9kj2nN9X/calidad-1.png"
                      width="50"
                    />
                  </p>
                </div>
                <div className="border border-gray-300 rounded-full p-3 m-2 flex">
                  <img
                    alt="Logo de Figma"
                    className="w-8 h-8"
                    height="30"
                    src="https://i.ibb.co/VcCCsXp9/postgre.png"
                    width="30"
                    style={{ marginRight: "10px", marginLeft: "5px" }}
                  />
                  <p className="m-2">PostgreSql</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Estilos CSS */}
      <style>
        {`

          @media (max-width: 1600px) {
            
          }
        `}
      </style>
    </div>
  );
};

export default Habilidades;
