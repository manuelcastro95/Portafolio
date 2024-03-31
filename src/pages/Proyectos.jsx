
import Carousel from '../components/Carousel';
import { proyectos } from '../data/proyectos'
const Proyectos = () => {

  const carouselProyectos = [...proyectos]


  return (
    <div id="proyectos" className="mt-56  w-full rounded-xl mx-auto p-2 mb-1">

      {
        carouselProyectos.map((proyecto, index) => {
          const isEvenIndex = index % 2 === 0;
          return (
            <div key={index}>
              <div className="flex justify-start my-2 rounded-lg bg-slate-400 p-1 gap-1">
                <div className="h-12 w-12 bg-amber-300 flex justify-center items-center rounded-lg">{index + 1}</div>
                <div className="h-12 w-full flex justify-left items-center rounded-lg">{proyecto.title}</div>
              </div>
              <div className="grid grid-cols-3 gap-4 my-2">
                {isEvenIndex ? (
                  <>
                    <div className="bg-blue-300 rounded-lg p-3">
                      <h4 className='mb-3'>Acerca del proyecto </h4>
                      <p className="text-justify">
                        {proyecto.description}
                      </p>
                    </div>
                    <div className="col-span-2 row-span-2 bg-blue-300 rounded-lg px-10 pb-8">
                      <Carousel imagenes={proyecto.imagenes} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-span-2 row-span-2 bg-blue-300 rounded-lg px-10 pb-8">
                      <Carousel imagenes={proyecto.imagenes} />
                    </div>
                    <div className="bg-blue-300 rounded-lg p-3">
                      <h4 className='mb-3'>Acerca del proyecto </h4>
                      <p className="text-justify">
                        {proyecto.description}
                      </p>
                    </div>
                  </>
                )}
                <div className="bg-blue-300 rounded-lg p-1 grid grid-cols-3 gap-1">
                  {proyecto.tags.map(tag =>
                    <div class=" bg-red-300 flex items-center justify-center rounded-lg">{tag}</div>
                  )}
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};


export default Proyectos;