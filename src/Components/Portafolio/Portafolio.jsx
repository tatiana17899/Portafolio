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
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/6d0jGq1Iztr6diZGG0YjW9/Untitled?node-id=0-1&m=dev&t=S8dwXBPsDY2qSdBK-1",
    },
    {
      id: 2,
      category: "Diseño UX/UI",
      title: "Diseño Web | Portafolio Modelo Profesional",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/oGjzkT60N6UrCar5DyaQIH/Portafolio-Vista?m=dev&t=WHwf9oYWmoIipgnE-1",
    },
    {
      id: 3,
      category: "Diseño UX/UI",
      title: "Diseño Web | Página Turistica Perú",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/Ptgl82CWi04lPjvk1hJsLi/P%C3%A1gina-Per%C3%BA?m=dev&t=WHwf9oYWmoIipgnE-1",
    },
    {
      id: 4,
      category: "Diseño UX/UI",
      title:
        "Diseño Web | Aplicación Web para empresa de venta de servicios de desarrollo tecnológicos",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/U3A3bDJSsCL6YQFYLKS3D0/Empresa-d?node-id=0-1&m=dev&t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 5,
      category: "Diseño UX/UI",
      title: "Diseño Web y movil| Página Web para el Museo de los Descalzos",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/Rdlt7rIA1Ngdde8qV01uDJ/Museo-Descalzos-Proyecto-FInal?m=dev&t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 6,
      category: "Diseño UX/UI",
      title:
        "Diseño Web y movil| Página Administrador para el Museo de los Descalzos",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/HrEiRtEkX8CwiruFvK53yr/Administrador-Museo-de-los-Descalzos?m=dev&t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 7,
      category: "Diseño UX/UI",
      title: "Diseño Web | Página Web para la empresa GRINPLAS",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
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
      title: "Diseño Web | Página Web para la empresa GRINPLAS",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 3,
      category: "Desarrollo Web",
      title: "Diseño Web | Página Web Portafolio",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.figma.com/design/N8xKcOK1CxiOqaRCdqJZNu/P%C3%A1gina-Web-GRINPLAS?t=Nmxp7Qu0JNGU3yuh-1",
    },
    {
      id: 1,
      category: ".NET",
      title: "Desarrollo del Sistema Museo de los Descalzos",
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
    {
      id: 1,
      category: "Canva",
      title: "Presentación del sistema para el Museo de los Descalzos",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.canva.com/design/DAGWF2fjSYQ/0rJsvM64Ah11-KRp5bUO2Q/edit?utm_content=DAGWF2fjSYQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 2,
      category: "Canva",
      title: "Presentación para un Proyecto Innovador",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.canva.com/design/DAFn5mmfz_c/H5rcJx1zIBb4Z3uLShzrPQ/edit?utm_content=DAFn5mmfz_c&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 3,
      category: "Canva",
      title: "Presentación temática equipo de voley",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.canva.com/design/DAGHlFcVEls/sTOeBGKRbZmGcO_sVrFV-Q/edit?utm_content=DAGHlFcVEls&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 4,
      category: "Canva",
      title: "Presentación para una empresa de Moda",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.canva.com/design/DAGRlCiXtkU/_DBqBy1A2rgyglh6o4vh7w/edit?utm_content=DAGRlCiXtkU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 5,
      category: "Canva",
      title: "Infografía para presentación",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.canva.com/design/DAF-fDtFtPE/HlJtlKpwG2XK-UPEVfUfdg/edit?utm_content=DAF-fDtFtPE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    },
    {
      id: 6,
      category: "Canva",
      title: "Presentación con temática IA",
      image:
        "https://storage.googleapis.com/a1aa/image/rcVvD-RIL4VRKSv2jfqszZt19WxWeeiqN6ufdLMWOlM.jpg",
      url: "https://www.canva.com/design/DAGOJcRvCYI/RNGZP_Wl1KGUGu2KJS7pFw/edit?utm_content=DAGOJcRvCYI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
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
              <div
                className="border border-black flex bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors duration-300"
                onClick={() => handleCategoryClick("Canva")}
              >
                <div className="border-r border-black w-1"></div>
                <div className="p-2">Presentaciones en Canva</div>
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
                <div className="flex justify-center mb-4">
                  <img
                    alt="Screenshot of a mobile app showing contacts, chats, and more options"
                    className="w-1/3 border border-gray-300 rounded-lg mx-2"
                    height="600"
                    src={trabajo.image}
                    width="300"
                  />
                </div>
                <div className="bg-white border-t border-gray-300 p-4 text-center">
                  <div className="flex items-center justify-center">
                    <p className="text-lg font-semibold mr-2">
                      {trabajo.title}
                    </p>
                    <ExternalLink size={16} className="text-blue-500" />
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
