
import Carousel from '../components/Carousel';
import { proyectos } from '../data/proyectos'
const Proyectos = () => {

  const carouselProyectos = [...proyectos]


  return (
    <div 
      id="proyectos" 
      className="
        rounded-xl mx-auto p-2 mb-1 mt-3
        md:mt-56 md:w-full 
      "
    >
      <div 
        className="
          w-full h-full py-2  bg-green-800 flex justify-center items-center
          rounded-lg md:h-10 md:border md:m-0 
        "
      >
        <span>Proyectos</span>
      </div>

      <div 
        className='
          grid w-full h-full rounded-lg 
          grid-cols-1 gap-3 py-3
          md:grid-cols-3 md:gap-0 md:py-3
        '
      >
        {carouselProyectos.map((proyecto, index) =>
          <div 
            key={index} 
            className='
              w-[380px]
              md:w-[400px] bg-gray-100 rounded-lg shadow-md hover:shadow-lg-hover transition duration-300 ease-in-out transform hover:scale-105 justify-self-center cursor-pointer
            '
          >
            <div className="h-12 w-full bg-red-200 flex justify-center items-center rounded-lg">
              <span>{proyecto.title}</span>
            </div>

            <div className="bg-slate-300 rounded-lg px-10 pb-8">
              <Carousel imagenes={proyecto.imagenes} />
            </div>

            <div className=" rounded-lg p-3 max-h-44 overflow-y-auto">
              <p className="text-justify">
                {proyecto.description}
              </p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
};


export default Proyectos;