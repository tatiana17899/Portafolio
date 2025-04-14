import React, { useState } from "react";
import { Globe, Menu } from "lucide-react";

const Banner = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full p-0 banner">
      <div className="rounded-lg border border-black overflow-hidden w-full max-w-full">
        <div className="flex flex-col md:flex-row">
          {/* Social Media Sidebar */}
          <div
            className="p-4 flex flex-row md:flex-col items-start justify-start md:items-center md:justify-center"
            style={{ backgroundColor: "#CDD3FF" }}
          >
            {/* Texto "Redes Sociales" en vertical */}
            <div
              className="text-center mr-4 hidden md:block"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              <span>Redes Sociales</span>
            </div>

            {/* Íconos de redes sociales en columna */}
            <div className="flex flex-row md:flex-col items-center space-x-4 md:space-x-0 md:space-y-4">
              <a
                href="https://www.linkedin.com/in/tatianasuarez17/"
                className="d-block w-12 h-12 rounded-full  justify-center shadow-md"
              >
                <img
                  alt="linkelnd"
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/DHsdz7w5/linkedin-3.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
              <a
                href="https://www.instagram.com/tatiana_suarez_xd/"
                className="d-block w-12 h-12 rounded-full  flex items-center justify-center shadow-md"
              >
                <img
                  alt="linkelnd"
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/B55Dxp1B/instagram-4.png"
                  style={{ width: "50px", height: "50px" }}
                />
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div
            className="flex-1 text-center flex flex-col items-center justify-center"
            style={{ backgroundColor: "#D6FFBA" }}
          >
            <div
              className="text-left"
              style={{
                marginTop: "90px",
                marginBottom: "20px",
              }}
            >
              <p className="text-black text-xl">
                <span
                  className="text-black text-2xl"
                  style={{
                    fontFamily: "Roboto Slab, serif",
                    fontWeight: "400",
                  }}
                >
                  &lt;HOLA SOY /&gt;
                </span>
              </p>
              <h1 className="custom-font text-black mt-4 font-bold" id="titulo">
                TATIANA
              </h1>
              <h2 className="custom-font text-black font-bold" id="subtitulo">
                SUAREZ R.
              </h2>
            </div>

            {/* Ingeniería Sistemas centrado */}
            <div
              className="mt-8 flex items-center justify-center bg-orange-200 rounded-full border border-black"
              style={{ width: "23vw", marginBottom: "100px" }}
            >
              <div className="bg-white rounded-full px-4 py-2 border border-black text-center">
                Carrera: Ingeniería de Cómputo y Sistemas
              </div>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              alt="Profile picture of Tatiana Suarez R. standing on a sidewalk with trees and grass in the background"
              className="h-full w-full object-cover"
              src="https://i.ibb.co/v6Dzc6RP/Imagen-de-Whats-App-2025-02-18-a-las-20-31-02-56aa94aa.jpg"
              id="img-profile"
            />
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white text-center text-black text-lg font-bold flex flex-wrap justify-around overflow-hidden">
          <div className="animate-scroll whitespace-nowrap">
            <span
              className="inline-block"
              style={{ fontSize: "50px", marginRight: "10px" }}
            >
              FRONT END
            </span>
            <span
              class="material-symbols-outlined"
              className="inline-block"
              style={{
                fontSize: "50px",
                marginRight: "10px",
                color: "#D9D9D9",
              }}
            >
              <i class="fa-solid fa-star"></i>
            </span>
            <span
              className="inline-block"
              style={{ fontSize: "50px", marginRight: "10px" }}
            >
              FULL STACK
            </span>
            <span
              class="material-symbols-outlined"
              className="inline-block"
              style={{
                fontSize: "50px",
                marginRight: "10px",
                color: "#D9D9D9",
              }}
            >
              <i class="fa-solid fa-star"></i>
            </span>
            <span
              className="inline-block"
              style={{ fontSize: "50px", marginRight: "10px" }}
            >
              INGENIERO SOFTWARE
            </span>
            <span
              class="material-symbols-outlined"
              className="inline-block"
              style={{
                fontSize: "50px",
                marginRight: "10px",
                color: "#D9D9D9",
              }}
            >
              <i class="fa-solid fa-star"></i>
            </span>
            <span
              className="inline-block"
              style={{ fontSize: "50px", marginRight: "10px" }}
            >
              DISEÑO UX/UI
            </span>
            <span
              class="material-symbols-outlined"
              className="inline-block"
              style={{
                fontSize: "50px",
                marginRight: "10px",
                color: "#D9D9D9",
              }}
            >
              <i class="fa-solid fa-star"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>
        {`
          #titulo, #subtitulo {
            font-family: "Inter", serif;
            font-weight: 700;
            font-size: 90px;
            line-height: 80px;
          }

          #img-profile {
            width: 600px;
            height: 600px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll {
            display: inline-block;
            animation: scroll 20s linear infinite;
          }

          @media (min-width: 1655px) {
            .banner {
              margin-left: 20px;
              margin-right: 20px;
              max-width: 97vw;
            }
          }
          @media (max-width: 1700px) {
            .banner {
              max-width: 97vw;
              margin-left: 10px;
              margin-right: 10px;
            }
          }

          @media (max-width: 1400px) {
            #titulo, #subtitulo {
              font-size: 80px !important;
              line-height: 80px !important;
            }
          }

          @media (max-width: 1200px) {
            #img-profile {
              max-width: 400px !important;
              max-height: 800px !important;
            }
            #titulo, #subtitulo {
              font-size: 70px !important;
              line-height: 70px !important;
            }
          }

          @media (max-width: 1000px) {
            .banner {
              max-width: 95vw;
              margin-left: 10px;
              margin-right: 10px;
            }
            #titulo, #subtitulo {
              font-size: 70px !important;
              line-height: 70px !important;
            }
              #img-profile {
              max-width: 300px !important;
              max-height: 800px !important;
            }
          }
          @media (max-width: 800px) {
            .banner {
              max-width: 80vw;
              margin-left: 50px;
              margin-right: 50px;
            }
            #titulo, #subtitulo {
              font-size: 70px !important;
              line-height: 70px !important;
            }
              #img-profile {
              max-width: 900px !important;
              max-height: 500px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Banner;
