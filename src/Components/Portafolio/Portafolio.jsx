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
      title: "Diseño Web | Mi Portafolio",
      descripción: "Diseño de mi portafolio personal",
      image:
        "https://i.postimg.cc/V63pzgmh/Beige-Blogger-Moderna-Personal-Sitio-web.png",
      url: "https://www.figma.com/design/6d0jGq1Iztr6diZGG0YjW9/Untitled?node-id=0-1&m=dev&t=S8dwXBPsDY2qSdBK-1",
    },
    {
      id: 2,
      category: "Diseño UX/UI",
      title: "Diseño Web | Portafolio Modelo Profesional",
      descripción:
        "Diseño de un portafolio web para profesionales con un enfoque en la presentación de proyectos y habilidades.",
      image: "https://i.postimg.cc/kG3105y3/img2.png",
      url: "https://www.figma.com/design/oGjzkT60N6UrCar5DyaQIH/Portafolio-Vista?m=dev&t=WHwf9oYWmoIipgnE-1",
    },
    {
      id: 3,
      category: "Diseño UX/UI",
      title: "Diseño Web | Página Turistica Perú",
      descripción:
        "Diseño de la página de inicio para promover el turismo en Perú, destacando sus atractivos culturales y naturales.",
      image: "https://i.postimg.cc/pXVYp8rc/img3.png",
      url: "https://www.figma.com/design/Ptgl82CWi04lPjvk1hJsLi/P%C3%A1gina-Per%C3%BA?m=dev&t=WHwf9oYWmoIipgnE-1",
    },
    {
      id: 4,
      category: "Diseño UX/UI",
      title:
        "Diseño Web | Aplicación Web para empresa de venta de servicios de desarrollo tecnológicos",
      descripción:
        "Diseño de una aplicación web para una empresa que ofrece servicios de desarrollo tecnológico, enfocada en la gestión de proyectos y clientes.",
      image: "https://i.postimg.cc/g0h3fHtj/img4.png",
      url: "https://www.figma.com/design/U3A3bDJSsCL6YQFYLKS3D0/Empresa-d?node-id=0-1&m=dev&t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 6,
      category: "Diseño UX/UI",
      title:
        "Diseño Web y movil| Página Administrador para el Museo de los Descalzos",
      descripción:
        "Diseño de una página de administrador para el Museo de los Descalzos, permitiendo la gestión de contenido y usuarios.",
      image: "https://i.postimg.cc/yxpJJDp2/img5.png",
      url: "https://www.figma.com/design/HrEiRtEkX8CwiruFvK53yr/Administrador-Museo-de-los-Descalzos?m=dev&t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 7,
      category: "Diseño UX/UI",
      title: "Diseño Web | Página Web para la empresa GRINPLAS",
      descripción:
        "Diseño de una página web para la empresa GRINPLAS, enfocada en la presentación de sus productos y servicios.",
      image: "https://i.postimg.cc/FKXYJ5GF/img6.png",
      url: "https://www.figma.com/design/HBx7GNZLRnDjisPpls7FIL/Anexo-21_-A-Prototipado%C2%A0de%C2%A0HUs?node-id=0-1&p=f&t=m1fc2bk8d6rflXe9-0 ",
    },
    {
      id: 8,
      category: "Diseño UX/UI",
      title:
        "Diseño Web | Página Web para la implementación de un chatbot para una empresa de venta de ropa",
      descripción:
        "Diseño de una página web que desea implementar un chatbot para mejorar la atención al cliente en una empresa de venta de ropa. Modelo de referncia",
      image: "https://i.postimg.cc/hPJvyP5P/img7.png",
      url: "https://www.figma.com/design/SiKdzNtm8j9M0Y4EScqDQP/Tienda-H---M?t=zg5U0Z3p3QaPiQvL-0",
    },
    {
      id: 9,
      category: "Diseño UX/UI",
      title:
        "Diseño Móvil | Aplicación Móvil para una empresa de estacionamiento de carros en un centro comercial",
      descripción:
        "Diseño de aplicación móvil para una empresa de estacionamiento de carros en un centro comercial, permitiendo a los usuarios reservar espacios y gestionar pagos. Incluyendo un diseño web para gestionar el sistema.",
      image: "https://i.postimg.cc/8CGCzdPj/img8.png",
      url: "https://www.figma.com/design/Hb2eu8MzH2Fr1YpZA8Qfop/CencoSmart-Parking?t=zg5U0Z3p3QaPiQvL-0",
    },
    {
      id: 10,
      category: "Diseño UX/UI",
      title: "Diseño Móvil | Aplicación Móvil para citas médicas",
      descripción:
        "Diseño de aplicación móvil para una clínica médica, permitiendo a los pacientes reservar citas y gestionar su historial médico.",
      image: "https://i.postimg.cc/BbRS9HVZ/img9.png",
      url: "https://www.figma.com/design/SVz2Je4JFfwTOaeTDGIANk/CitaVital?node-id=0-1&p=f&t=Gcg9ZznAOVaij1x5-0",
    },
    {
      id: 1,
      category: "Desarrollo Web",
      title: "Diseño Web | Página Web para la empresa Museo Descalzos",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 2,
      category: "Desarrollo Web",
      title: "Diseño Web | Página Web para la empresa G&R",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 1,
      category: ".NET",
      title: "Desarrollo del Sistema de Ventas para la empresa G&R",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 2,
      category: ".NET",
      title: "Desarrollo web Profile Hub",
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
