import Navbar from "../components/Navbar";
import Inicio from "./Inicio";
import Habilidades from "./Habilidades";
import Proyectos from "./Proyectos";
import Contacto from "./Contacto";


const Layout = () => {
    return (
        <>
            <div className="container mx-auto ">
                <Navbar />
                <Inicio />
                <Proyectos />
                <Contacto />
            </div>
        </>
    )
};

export default Layout;