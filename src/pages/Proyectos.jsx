import React from 'react';
import Carousel from '../components/Carousel';
import { proyectos } from '../data/proyectos';

const Proyectos = () => {
  const carouselProyectos = [...proyectos];

  // Función para truncar la descripción del proyecto
  function truncate(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    } else {
      return text;
    }
  }

  return (
    <div id="proyectos" className="rounded-xl mx-auto p-4 mb-8 mt-1 md:mt-1 md:w-full">
      <div className="text-light-gray bg-dark w-full py-4 flex justify-center items-center rounded-lg md:h-10 md:border md:m-0">
        <span className='text-2xl font-bold'>Proyectos</span>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mt-6'>
        {carouselProyectos.map((proyecto, index) => (
          <div key={index} className='border rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
            <div className="h-16 bg-dark flex justify-center items-center rounded-t-lg">
              <span className='text-lg text-light-gray font-semibold'>{proyecto.title}</span>
            </div>

            <div className="bg-light-gray rounded-b-lg">
              <Carousel imagenes={proyecto.imagenes} />
            </div>

            <div className="p-4">
              <p className="text-left text-dark" title={proyecto.description}>
                {truncate(proyecto.description, 80)}
              </p>
            </div>

            <div className="flex justify-between items-center p-4">
              <div>
                {proyecto.tags.map(tag => (
                  <span key={tag} className="inline-block bg-accent text-light-gray rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div>
                <a title='Ver demo proyecto' href={proyecto.link} className="text-accent hover:text-dark pr-3">
                  <i className="fas fa-globe"></i>
                </a>
                <a title='Ver GitHub' href={proyecto.github} className="text-accent hover:text-dark">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;
