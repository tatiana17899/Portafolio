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
          {/*<img
            alt="Foto de perfil de Tatiana Suárez"
            className="w-48 h-60 object-cover border border-black z-10"
            src="https://i.ibb.co/SkCLrLw/Tatiana-Suarez-Peru.jpg"
            style={{
              width: "400px",
              height: "400px",
              borderBottomRightRadius: "50px",
            }}
          />*/}
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
              className="border border-black rounded-full flex items-center justify-center"
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
                height="30"
                src="https://i.ibb.co/zhYhMX4f/bandera.png"
                width="30"
              />
            </button>

            <button
              className="border border-black flex items-center justify-center rounded-full"
              style={{
                width: "70px",
                height: "50px",
                padding: "10px",
                backgroundColor: "#FEA3E7",
              }}
            >
              <img
                alt="Bandera de Perú"
                className="w-5 h-5"
                height="40"
                src="https://i.ibb.co/N2h4pVGf/mujer.png"
                width="40"
              />
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
            ¡Bienvenida a mi espacio digital! Me llamo Tatiana, soy una
            desarrolladora autodidacta comprometida con transformar ideas en
            soluciones tecnológicas que marcan la diferencia | Welcome to my
            digital space! My name is Tatiana, and I’m a self-taught developer
            committed to transforming ideas into technological solutions that
            make a difference.
          </p>
          <div
            className="bg-[#f7fbe7] pl-16 relative z-0 mt-6 border border-black"
            style={{
              transform: "translateX(-100px)",
              //borderBottomLeftRadius: "300px",
              //borderTopRightRadius: "20px",
              //borderBottomRightRadius: "20px",
              borderRadius: "20px",
              height: "300px",
              zIndex: "-1",
            }}
            id="info"
          >
            <div
              className="grid grid-cols-2 gap-4"
              style={{
                marginLeft: "60px",
                marginRight: "60px",
                padding: "40px",
              }}
              id="info-dd"
            >
              <div className="flex items-center mb-2" id="info-item">
                <img
                  alt="linkelnd"
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/1fp6cR6V/github-4.png"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginBottom: "20px",
                    marginRight: "10px",
                  }}
                />
                <span>
                  GitHub:{" "}
                  <a
                    className="text-blue-500"
                    href="https://github.com/tatiana17899"
                  >
                    https://github.com/tatiana17899
                  </a>
                </span>
              </div>
              <div className="flex items-center mb-2" id="info-item">
                <img
                  alt="linkelnd"
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/MDH6PtGw/graduacion.png"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginBottom: "20px",
                    marginRight: "10px",
                  }}
                />
                <span>
                  Título: Ingeniería de Cómputo y Sistemas (2022-2027)
                </span>
              </div>
              <div className="flex items-center mb-2" id="info-item">
                <img
                  alt="linkelnd"
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/99mMKR5d/empresa.png"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginBottom: "20px",
                    marginRight: "10px",
                  }}
                />
                <span>La Molina, Lima</span>
              </div>
              <div className="flex items-center" id="info-item">
                <img
                  alt="linkelnd"
                  className="h-full w-full object-cover"
                  src="https://i.ibb.co/TM9HKYQ4/linguistica.png"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginBottom: "20px",
                    marginRight: "10px",
                  }}
                />
                <span>Español (nativo), Inglés (A2), Chino (HSK1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estilos CSS */}
      <style>
        {`
          #info {
            width: 100%; /* Ancho por defecto */
          }

          @media (max-width: 1600px) {
            #info {
              width: 120%; 
              transform: translateX(-150px);
            }
          }
          @media (max-width: 1400px) {
            #info {
              width: 130%;
              transform: translateX(-150px); 
            }
          }
          @media (max-width: 1300px) {
            #info {
              width: 130%;
              transform: translateX(-150px); 
            }
            #info-item{
              font-size:14px;
              padding:10px;
            }
          }
          @media (max-width: 1250px) {
            #info {
              width: 130%;
              transform: translateX(-150px); 
            }
            #info-item{
              font-size:12px;
              padding:10px;
            }
          }
          @media (max-width: 1190px) {
            #info {
              width: 140%;
              transform: translateX(-150px); 
            }
            #info-item{
              font-size:12px;
              padding:2px;
            }
            a{
              font-size:8px;
            }
          }
          @media (max-width: 1000px) {
            #info {
              width: 150%;
              transform: translateX(-150px); 

            }
            #info-item{
              font-size:8px;
              padding:2px;
            }
            a{
              font-size:8px;
            }
            #info-dd{
              margin-left: "30px",
              margin-right: "30px",
              padding: "10px",
            }
          }
          @media (max-width: 800px) {
            #info {
              width: 120%;
              transform: translateX(-150px); 

            }
            #info-item{
              font-size:10px;
              padding:2px;
            }
            a{
              font-size:8px;
            }
            #info-dd{
              margin-left: "30px",
              margin-right: "30px",
              padding: "10px",
            }
          }
        `}
      </style>
    </div>
  );
};

export default AboutMe;
