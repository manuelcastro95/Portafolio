import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="mb-1 grid grid-cols-1 gap-3 mx-3 relative md:mb-24">
        <nav className="w-full rounded-xl my-3  fixed top-6 left-0 right-0 z-10">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-sm 
            text-light-gray rounded-lg md:hidden 
              hover:bg-dark focus:outline-none 
              focus:ring-2 focus:ring-light-gray
              dark:focus:ring-gray-600
              ml-2 my-2
              bg-dark
              border border-light-gray
              "
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} absolute top-full w-full bg-transparent shadow-md md:block md:static md:bg-transparent md:shadow-none`}>
            <ul className="flex flex-col md:flex-row md:justify-start gap-2 my-1 mx-4 ">
              <li className="bg-dark text-light-gray border border-light-gray w-3/4  mx-auto md:mx-0  md:w-36 h-10 rounded-lg flex items-center justify-center">
                <a href="#inicio">Inicio</a>
              </li>
              <li className="bg-dark text-light-gray border border-light-gray w-3/4  mx-auto md:mx-0 md:w-36 h-10 rounded-lg flex items-center justify-center">
                <a href="#proyectos">Proyectos</a>
              </li>
              {/* <li className="bg-dark text-light-gray border border-light-gray w-3/4  mx-auto md:mx-0 md:w-36 h-10 rounded-lg flex items-center justify-center">
                <a href="#proyectos">Experiencia</a>
              </li> */}
              <li className="bg-dark text-light-gray border border-light-gray w-3/4  mx-auto md:mx-0 md:w-36 h-10 rounded-lg flex items-center justify-center">
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
