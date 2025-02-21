import React, { useState } from "react";
import { Globe, Menu } from "lucide-react";

const Banner = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className="flex flex-col items-center justify-center w-full p-0"
      style={{ marginLeft: "20px", marginRight: "20px", maxWidth: "97vw" }}
    >
      {" "}
      <div className="rounded-lg border border-black overflow-hidden w-full max-w-full">
        {" "}
        <div className="flex flex-col md:flex-row">
          {/* Social Media Sidebar */}
          <div
            className="p-4 flex flex-row items-start justify-start"
            style={{ backgroundColor: "#CDD3FF" }}
          >
            {/* Texto "Redes Sociales" en vertical */}
            <div
              className="text-center mr-4"
              style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
            >
              <span>Redes Sociales</span>
            </div>

            {/* Íconos de redes sociales en columna */}
            <div className="flex flex-col items-center space-y-4">
              <a
                href="#"
                className="d-block w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-md"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a
                href="#"
                className="d-block w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center shadow-md"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a
                href="#"
                className="d-block w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center shadow-md"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a
                href="#"
                className="d-block w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center shadow-md"
              >
                <i className="fab fa-instagram text-white"></i>
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
              <h1
                className="custom-font text-black mt-4 font-bold"
                style={{
                  fontFamily: "Inter, serif",
                  fontWeight: "700",
                  fontSize: "90px",
                  lineHeight: "80px",
                }}
              >
                TATIANA
              </h1>
              <h2
                className="custom-font text-black font-bold"
                style={{
                  fontFamily: "Inter, serif",
                  fontWeight: "700",
                  fontSize: "90px",
                  lineHeight: "80px",
                }}
              >
                SUAREZ R.
              </h2>
            </div>

            {/* Ingeniería Sistemas centrado */}
            <div
              className="mt-8 flex items-center justify-center bg-orange-200 rounded-full border border-black"
              style={{ width: "23vw", marginBottom: "100px" }}
            >
              <div className="bg-white rounded-full px-4 py-2 border border-black">
                Carrera: Ingeniería de Cómputo y Sistemas
              </div>
            </div>
            <div
              class="flex items-center space-x-2 pr-4 justify-end"
              style={{
                marginBottom: "40px",
              }}
            >
              <span
                class="text-black font-semibold"
                style={{
                  marginTop: "10px",
                  fontSize: "20px",
                }}
              >
                Contáctame
              </span>
              <i
                class="fa-solid fa-arrow-right"
                style={{
                  color: "#000000",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></i>
            </div>
          </div>
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              alt="Profile picture of Tatiana Suarez R. standing on a sidewalk with trees and grass in the background"
              className="h-full w-full object-cover"
              src="https://placehold.co/300x400"
              style={{ width: "600px", height: "600px" }}
            />
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white text-center text-black text-lg font-bold flex flex-wrap justify-around">
          <span className="w-full md:w-auto" style={{ fontSize: "50px" }}>
            FRONT END
          </span>
          <span className="w-full md:w-auto" style={{ fontSize: "50px" }}>
            FULL STACK
          </span>
          <span className="w-full md:w-auto" style={{ fontSize: "50px" }}>
            INGENIERO SOFTWARE
          </span>
          <span className="w-full md:w-auto" style={{ fontSize: "50px" }}>
            DISEÑO UX/UI
          </span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
