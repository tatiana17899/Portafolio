import React from "react";
import { Globe, Menu } from "lucide-react";

const AboutMe = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        marginLeft: "10vw",
        marginRight: "10vw",
        marginTop: "20vh",
        marginBottom: "20vh",
      }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0">
          <img
            alt="Foto de perfil de Tatiana Suárez"
            className=" w-48 h-60 object-cover border border-black"
            class="z-10"
            src="https://storage.googleapis.com/a1aa/image/HwQzn2ihSkjJxVHSt2CChuEK1bHFx7E3qA7cJjZ2dZA.jpg"
            style={{
              width: "400px",
              height: "400px",
              borderBottomRightRadius: "50px",
            }}
          />
        </div>
        <div className="md:ml-6 mt-4 md:mt-0 flex-1">
          <h1
            className="text-2xl font-bold"
            style={{
              color: "rgba(0, 0, 0, 0.54)",
              fontSize: "40px",
              marginLeft: "5vw",
            }}
          >
            SOBRE MÍ
          </h1>
          <div
            className="flex items-center space-x-2 mt-5"
            style={{ marginLeft: "5vw" }}
          >
            <button
              className=" border border-black rounded-full flex items-center justify-center"
              style={{
                width: "70px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#ffff",
              }}
            >
              <img
                alt="Bandera de Perú"
                className="w-5 h-5"
                height="20"
                src="https://storage.googleapis.com/a1aa/image/Z1xNeEVIue7BQYb4YBV1B52Au0x2KR8YgbScsdnVIDg.jpg"
                width="20"
              />
            </button>

            <button
              className=" border border-black flex items-center justify-center rounded-full"
              style={{
                width: "70px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#FEA3E7",
              }}
            >
              <i className="fas fa-female text-pink-500 text-xl"></i>
            </button>
          </div>
          <p
            className="mt-4 text-lg font-bold"
            style={{
              fontSize: "20px",
              fontFamily: "Inter, serif",
              marginLeft: "5vw",
            }}
          >
            Soy estudiante de Ingeniería de Cómputo y Sistemas en la universidad
            San Martín de Porres, Lima, Perú.
          </p>
          <p className="mt-2 text-gray-600" style={{ marginLeft: "5vw" }}>
            ¡Bienvenida a mi espacio digital! Soy Tatiana Suárez, una
            desarrolladora autodidacta comprometida con transformar ideas en
            soluciones tecnológicas que marcan la diferencia.
          </p>
          <div
            class="bg-[#f7fbe7]  pl-16 relative z-0 mt-6 border border-black"
            style={{
              transform: "translateX(-100px)",
              borderBottomLeftRadius: "300px",
              borderTopRightRadius: "20px",
              borderBottomRightRadius: "20px",
              height: "300px",
              zIndex: "-1",
            }}
          >
            <div
              class="grid grid-cols-2 gap-4"
              style={{
                marginLeft: "60px",
                marginRight: "60px",
                padding: "40px",
              }}
            >
              <div class="flex items-center mb-2">
                <i class="fas fa-birthday-cake mr-2"></i>
                <span>17 nov 2004</span>
              </div>
              <div class="flex items-center mb-2">
                <i class="fas fa-user mr-2"></i>
                <span>20 años</span>
              </div>
              <div class="flex items-center mb-2">
                <i class="fab fa-github mr-2"></i>
                <span>
                  GitHub:{" "}
                  <a
                    class="text-blue-500"
                    href="https://github.com/tatiana17899"
                  >
                    https://github.com/tatiana17899
                  </a>
                </span>
              </div>
              <div class="flex items-center mb-2">
                <i class="fas fa-graduation-cap mr-2"></i>
                <span>
                  Título: Ingeniería de Cómputo y Sistemas (2022-2027)
                </span>
              </div>
              <div class="flex items-center mb-2">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span>La Molina, Lima</span>
              </div>
              <div class="flex items-center">
                <i class="fas fa-language mr-2"></i>
                <span>Español (nativo), Inglés (B1), Chino (HSK3)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
