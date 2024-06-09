import Navbar from "../components/Navbar";
import Inicio from "./Inicio";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";
import Experiencia from "./Experiencia";

const Layout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <div className="pt-20"> {/* Añadido padding-top */}
          <Inicio />
          <Experiencia />
          <Proyectos />
          <Contacto />
        </div>
      </div>
    </>
  );
};

export default Layout;
