import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" grid grid-cols-1 gap-3 mx-3 relative mb-24">
        <nav className="w-full rounded-xl my-3 mx-auto fixed top-0 left-0 right-0 z-10">
            {/* <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button> */}
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