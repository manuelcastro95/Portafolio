import React from 'react';
import Carousel from '../components/Carousel';
import { proyectos } from '../data/proyectos';

const Proyectos = () => {
  const carouselProyectos = [...proyectos];

  return (
    <div id="proyectos" className="container mx-auto px-4">
      {/* Encabezado de sección */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-dark mb-4">
          Proyectos
          <span className="block h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explora algunos de mis proyectos más destacados
        </p>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {carouselProyectos.map((proyecto, index) => (
          <div 
            key={index} 
            className="
              group bg-white rounded-xl overflow-hidden
              transform transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl
              border border-gray-100
            "
          >
            {/* Imagen del proyecto */}
            <div className="relative h-40 sm:h-48 lg:h-56 overflow-hidden">
              <Carousel imagenes={proyecto.imagenes} />
              <div className="
                absolute inset-0 bg-gradient-to-t from-black/80 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
                flex items-end p-6
              ">
                <p className="text-white text-sm">{proyecto.description}</p>
              </div>
            </div>

            {/* Contenido del proyecto */}
            <div className="p-4 sm:p-6">
              <h3 className="text-xl font-bold text-dark mb-3">{proyecto.title}</h3>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {proyecto.tags.map(tag => (
                  <span key={tag} className="
                    px-3 py-1 text-xs font-medium
                    bg-primary/10 text-primary
                    rounded-full
                  ">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="flex justify-end space-x-4 pt-4 border-t border-gray-100">
                {proyecto.link && (
                  <a 
                    href={proyecto.link}
                    className="
                      text-accent hover:text-primary
                      transition-colors duration-300
                      flex items-center gap-2
                    "
                  >
                    <i className="fas fa-globe text-lg"></i>
                    <span className="text-sm">Demo</span>
                  </a>
                )}
                {proyecto.github && (
                  <a 
                    href={proyecto.github}
                    className="
                      text-accent hover:text-primary
                      transition-colors duration-300
                      flex items-center gap-2
                    "
                  >
                    <i className="fab fa-github text-lg"></i>
                    <span className="text-sm">Código</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
