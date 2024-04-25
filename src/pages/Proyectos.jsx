import Carousel from '../components/Carousel';
import { proyectos } from '../data/proyectos';


const Proyectos = () => {
  const carouselProyectos = [...proyectos];

  return (
    <div id="proyectos" className="rounded-xl mx-auto p-2 mb-1 mt-3 md:mt-56 md:w-full">
      <div className="text-light-gray bg-dark w-full h-full py-2 flex justify-center items-center rounded-lg md:h-10 md:border md:m-0">
        <span className='text-xl'>PROYECTOS</span>
      </div>

      <div className='grid w-full h-full rounded-lg grid-cols-1 gap-3 py-3 md:grid-cols-3 md:gap-6 md:py-3'>
        {carouselProyectos.map((proyecto, index) => (
          <div key={index} className='border w-[380px] md:w-[400px] rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 justify-self-center cursor-pointer'>
            <div className="h-12 w-full text-dark flex justify-center items-center rounded-lg">
              <span className='capitalize font-bold'>{proyecto.title}</span>
            </div>

            <div className="bg-slate-300 rounded-lg px-10 pb-8">
              <Carousel imagenes={proyecto.imagenes} />
            </div>

            <div className="p-3 max-h-44 overflow-y-auto">
              <p className="text-justify">
                {proyecto.description}
              </p>
            </div>

            <div className="flex justify-between items-center p-3">
              <div>
                {proyecto.tags.map(tag => (
                  <span key={tag} className="inline-block bg-accent text-light-gray rounded-full px-2 py-1 text-sm font-semibold mr-2 mb-2">{tag}</span>
                ))}
              </div>
              <div>
                <a title='ver demo proyecto' href={proyecto.link} className="text-accent hover:text-dark pr-2">
                  <i className="fa-solid fa-globe"></i>
                </a>
                <a title='ver github' href={proyecto.github} className="text-accent hover:text-dark">
                  <i className="fa fa-github" aria-hidden="true"></i>
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
