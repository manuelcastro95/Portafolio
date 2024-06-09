import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-light-gray shadow-md fixed top-0 left-0 right-0 z-50 font-nunito">
      <div className="container mx-auto flex items-center justify-between py-2 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-dark font-bold text-2xl">
            <img className="w-12 h-auto rounded-full" src="/imgs/favicon.ico" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="text-dark hover:text-accent">Inicio</a>
          <a href="#habilidades" className="text-dark hover:text-accent">Habilidades</a>
          <a href="#experiencia" className="text-dark hover:text-accent">Experiencia</a>
          <a href="#proyectos" className="text-dark hover:text-accent">Proyectos</a>
          <a href="#contacto" className="text-dark hover:text-accent">Contacto</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-dark focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-light-gray shadow-md`}>
        <ul className="flex flex-col items-center space-y-4 py-4">
          <li>
            <a href="#inicio" className="text-dark hover:text-accent block">Inicio</a>
          </li>
          <li>
            <a href="#habilidades" className="text-dark hover:text-accent block">Habilidades</a>
          </li>
          <li>
            <a href="#experiencia" className="text-dark hover:text-accent block">Experiencia</a>
          </li>
          <li>
            <a href="#proyectos" className="text-dark hover:text-accent block">Proyectos</a>
          </li>
          <li>
            <a href="#contacto" className="text-dark hover:text-accent block">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
