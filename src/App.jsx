import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import AboutMe from "./Components/AboutMe/AboutMe";
import Habilidades from "./Components/Habilidades/Habilidades";
import Servicios from "./Components/Servicios/Servicios";
import KofiWidget from "./Components/KofiWidget/kofi";
import Portafolio from "./Components/Portafolio/Portafolio";
import Hotmart from "./Components/Hotmart/Hotmart";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutMe />
      <Habilidades />
      <Portafolio />
      <KofiWidget />
      <Footer />
    </div>
  );
};
export default App;
