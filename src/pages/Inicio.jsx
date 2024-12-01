import perfilImg from "../assets/img/perfil.png";
import EscritorSecuencial from "../components/EscritorSecuencial";
import TextoAnimado from "../components/TextoAnimado";

const Inicio = () => {
  const words = ["web", "front-end", "back-end"];
  return (
    <div
      id="inicio"
      className="
        grid grid-cols-1 gap-4 rounded-xl
        sm:gap-6 md:grid-cols-3 md:h-auto lg:h-[500px]
        bg-gradient-to-br from-primary/5 via-soft to-warm text-dark
        animate-fadeIn
      "
    >
      <div className="
        rounded-xl p-4 sm:p-6 md:p-8
        md:col-span-2 md:flex md:items-center
      ">
        <div>
          <div className="md:hidden mb-8">
            <div className="mx-auto h-48 w-48 sm:h-64 sm:w-64 rounded-full hover:animate-bounce">
              <img src={perfilImg} className="object-cover rounded-full" alt="Manuel Castro" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            ¡Hola, soy Manuel Castro!
          </h1>
          <span className="text-xl sm:text-2xl lg:text-3xl">
            Desarrollador <EscritorSecuencial words={words} delay={2000} />
          </span>

          <p className="my-4 sm:my-6 text-base sm:text-lg lg:text-xl text-left max-w-3xl">
          Desarrollador FullStack con más de 3 años de experiencia especializado en el diseño e implementación 
          de soluciones web empresariales. Destaco por mi capacidad para crear aplicaciones robustas y escalables, 
          con un fuerte enfoque en la arquitectura limpia y las mejores prácticas de desarrollo. 
          He participado en proyectos significativos como la implementación de sistemas de Cuentas por Pagar 
          y la modernización de interfaces de usuario.

          </p>
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:justify-center">
        <div className="h-56 w-56 lg:h-72 lg:w-72 rounded-full hover:animate-bounce">
          <img src={perfilImg} className="object-cover rounded-full" alt="Manuel Castro" />
        </div>
      </div>
    </div>
  );
}

export default Inicio;
