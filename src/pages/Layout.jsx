import Navbar from "../components/Navbar";
import Inicio from "./Inicio";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Experiencia from "./Experiencia";
import BackgroundPattern from "../components/BackgroundPattern";

const Layout = () => {
  return (
    <>
      <BackgroundPattern />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Navbar />
        <div className="pt-16 sm:pt-20 space-y-12 sm:space-y-16">
          <Inicio />
          <Habilidades />
          <Experiencia />
          <Proyectos />
          <Contacto />
        </div>
      </div>
    </>
  );
};

export default Layout;
