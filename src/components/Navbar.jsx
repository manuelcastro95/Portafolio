import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50 font-nunito">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-dark font-bold text-2xl">
            <img className="w-12 h-auto rounded-full hover:scale-110 transition-transform duration-300" 
                 src="/imgs/favicon.ico" 
                 alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['inicio', 'habilidades', 'experiencia', 'proyectos', 'contacto'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="
                relative px-2 py-1
                text-dark capitalize font-medium
                transition-all duration-300
                hover:text-primary
                after:content-['']
                after:absolute after:left-0 after:bottom-0
                after:w-full after:h-0.5 after:bg-primary
                after:transform after:scale-x-0
                after:transition-transform after:duration-300
                hover:after:scale-x-100
              "
            >
              {item}
            </a>
          ))}
          <a
            href="/cv-manuel-castro-minotta.pdf"
            download
            className="
              bg-primary text-white px-4 py-2 rounded-full
              hover:bg-primary/80 transition-colors duration-300
              font-medium
            "
          >
            Descargar CV
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-dark hover:text-primary transition-colors duration-300 focus:outline-none"
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
      <div 
        id="mobile-menu" 
        className={`
          ${isOpen ? 'block' : 'hidden'} 
          md:hidden bg-white shadow-lg
          transform transition-all duration-300
        `}
      >
        <ul className="flex flex-col items-center space-y-4 py-4">
          {['inicio', 'habilidades', 'experiencia', 'proyectos', 'contacto'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item}`} 
                className="
                  text-dark capitalize font-medium
                  hover:text-primary transition-colors duration-300
                  block px-4 py-2
                "
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/cv.pdf"
              download
              className="
                bg-primary text-white px-4 py-2 rounded-full
                hover:bg-primary/80 transition-colors duration-300
                font-medium
              "
            >
              Descargar CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
