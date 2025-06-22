import React, { useState, useEffect } from "react";
import { Globe, Menu, ExternalLink } from "lucide-react";

const Portafolio = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 4;

  const trabajos = [
    {
      id: 1,
      category: "Diseño UX/UI",
      title: "Diseño Móvil | CitaVital",
      descripción:
        "Diseño de la aplicación móvil CitaVital, enfocada en la gestión de citas médicas.",
      image: "https://i.postimg.cc/XJvmwbg5/imagen-2025-06-22-114721494.png",
      url: "https://www.figma.com/design/SVz2Je4JFfwTOaeTDGIANk/CitaVital?node-id=0-1&p=f&t=Jxw5NirGqrz3nEBK-0",
    },
    {
      id: 2,
      category: "Diseño UX/UI",
      title: "Diseño Web | Página Turistica Perú",
      descripción:
        "Diseño de la página de inicio para promover el turismo en Perú, destacando sus atractivos culturales y naturales.",
      image: "https://i.postimg.cc/pXVYp8rc/img3.png",
      url: "https://www.figma.com/design/Ptgl82CWi04lPjvk1hJsLi/P%C3%A1gina-Per%C3%BA?m=dev&t=WHwf9oYWmoIipgnE-1",
    },
    {
      id: 3,
      category: "Diseño UX/UI",
      title:
        "Diseño Web | Aplicación Web para empresa de venta de servicios de desarrollo tecnológicos",
      descripción:
        "Diseño de una aplicación web para una empresa que ofrece servicios de desarrollo tecnológico, enfocada en la gestión de proyectos y clientes.",
      image: "https://i.postimg.cc/g0h3fHtj/img4.png",
      url: "https://www.figma.com/design/U3A3bDJSsCL6YQFYLKS3D0/Empresa-d?node-id=0-1&m=dev&t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 1,
      category: "Desarrollo Web",
      title: "Diseño Web | Página Web para la empresa G&R",
      descripción:
        "Diseño web (Front-End) de la página pública para la empresa de G&R",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 2,
      category: "Desarrollo Web",
      title: "Diseño Web | Página Web para la empresa G&R",
      descripción:
        "Diseño web (Front-End) de la página administrador para la empresa de G&R",
      image: "https://i.postimg.cc/XvGQnwbD/imagen-2025-06-01-214537783.png",
      url: "https://tatiana17899.github.io/plantillaDashboardG-R/",
    },
    {
      id: 3,
      category: "Desarrollo Web",
      title:
        "Diseño Web | Página Web Adiministrador para el Museo de los Descalzos",
      descripción:
        "Diseño web (Front-End) de la página administrador para el Museo de los Descalzos",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 1,
      category: ".NET",
      title: "Desarrollo del Sistema de Ventas para la empresa G&R",
      descripción:
        "Desarrollo del sistema de ventas para la empresa G&R utilizando .NET, incluyendo la implementación de funcionalidades de gestión de productos, clientes y ventas.",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },

    // Agrega más trabajos aquí
  ];

  const filteredTrabajos = selectedCategory
    ? trabajos.filter((trabajo) => trabajo.category === selectedCategory)
    : trabajos;

  const totalPages = Math.ceil(filteredTrabajos.length / itemsPerPage);

  const paginatedTrabajos = filteredTrabajos.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryClick = (category) => {
    setIsAnimating(true);
    setSelectedCategory(category);
    setCurrentPage(1); // Resetear a la primera página al cambiar de categoría
  };

  const handlePageChange = (page) => {
    if (page !== currentPage) {
      setIsAnimating(true);
      setCurrentPage(page);
    }
  };

  const handleTrabajoClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // Restablecer la animación después de que se complete
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <div className="bg-[#f4c7e0] p-6 shadow-lg w-full border-1 border-black">
      <div className="bg-[#c7f0f4] p-6 rounded-lg shadow-lg border-1 border-black">
        <h1
          className="text-center text-4xl font-bold mb-6 m-3"
          style={{
            fontFamily: "Atkinson Hyperlegible Mono, serif",
            fontSize: "30px",
          }}
        >
          PORTAFOLIO
        </h1>
        <hr className="border-1 border-gray-500 mb-4"></hr>
        <div className="flex flex-col md:flex-row">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6 w-full md:w-1/5 border-1 border-black">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full border-1 border-black"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full border-1 border-black"></div>
              </div>
              <i className="fa-solid fa-xmark"></i>
            </div>
            <hr className="border-1 border-gray-500"></hr>
            <div className="flex justify-center m-4">
              <span
                className="font-bold"
                style={{
                  fontSize: "20px",
                  fontFamily: "Atkinson Hyperlegible Mono, serif",
                }}
              >
                Menú
              </span>
            </div>
            <ul className="space-y-2">
              <div
                className="border border-black flex bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors duration-300"
                onClick={() => handleCategoryClick("Diseño UX/UI")}
              >
                <div className="border-r border-black w-1"></div>
                <div className="p-2">Diseño UX/UI para Apps y Web</div>
              </div>
              <div
                className="border border-black flex bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors duration-300"
                onClick={() => handleCategoryClick("Desarrollo Web")}
              >
                <div className="border-r border-black w-1"></div>
                <div className="p-2">Desarrollo Web Responsivo</div>
              </div>
              <div
                className="border border-black flex bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors duration-300"
                onClick={() => handleCategoryClick(".NET")}
              >
                <div className="border-r border-black w-1"></div>
                <div className="p-2">Desarrollo Sistemas .NET</div>
              </div>

              {/* Agrega más categorías aquí */}
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {paginatedTrabajos.map((trabajo) => (
              <div
                key={trabajo.id}
                className={`bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto border-1 border-black transition-all duration-500 ${
                  isAnimating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                } cursor-pointer transform hover:scale-105 hover:shadow-xl transition-transform`}
                onClick={() => handleTrabajoClick(trabajo.url)}
              >
                <div className="flex border border-gray-300 rounded-lg overflow-hidden mb-4">
                  {/* Contenedor de la imagen (ahora al lado izquierdo) */}
                  <div className="flex-shrink-0">
                    <img
                      alt="Screenshot of a mobile app showing contacts, chats, and more options"
                      className="h-full object-cover"
                      src={trabajo.image}
                      style={{ width: "200px", height: "200px" }} // Ajusta estos valores según necesites
                    />
                  </div>

                  {/* Contenedor del contenido (ahora al lado derecho) */}
                  <div className="flex-grow flex flex-col">
                    <div className="bg-white p-4">
                      <div className="flex items-center justify-center">
                        <p className="text-lg font-semibold mr-2">
                          {trabajo.title}
                        </p>
                        <ExternalLink size={16} className="text-blue-500" />
                      </div>
                    </div>

                    <div className="bg-white border-t border-gray-300 p-4">
                      <div className="flex items-center justify-center">
                        <p className="text-lg font-semibold mr-2">
                          {trabajo.descripción}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`bg-gray-300 p-3 shadow-md border-1 border-black transform transition-all duration-300 hover:scale-110 hover:bg-gray-400 hover:shadow-lg ${
                currentPage === index + 1 ? "bg-gray-500 text-white" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portafolio;
