import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 mx-3 relative mb-24">
        <nav className="w-full rounded-xl my-3 mx-auto fixed top-0 left-0 right-0 z-10">
          <ul className="flex justify-end gap-2 my-1 mx-1">
            <li className="bg-blue-200 w-36 h-10 rounded-lg flex items-center justify-center">
              <a href="#inicio" className="">Inicio</a>
            </li>
            <li className="bg-blue-200 w-36 h-10 rounded-lg flex items-center justify-center">
              <a href="#proyectos" className="">Proyectos</a>
            </li>
            <li className="bg-blue-200 w-36 h-10 rounded-lg flex items-center justify-center">
              <a href="#contacto" className="">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar;