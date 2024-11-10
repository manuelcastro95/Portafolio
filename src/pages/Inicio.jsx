import perfilImg from "../assets/img/perfil.png";
import EscritorSecuencial from "../components/EscritorSecuencial";
import TextoAnimado from "../components/TextoAnimado";

const Inicio = () => {
  const words = ["web", "front-end", "back-end", "diseño"];
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
            Apasionado desarrollador con más de 3 años de experiencia en el desarrollo de aplicaciones web. 
            Me especializo en la creación de soluciones tecnológicas eficientes y escalables, 
            utilizando las mejores prácticas y tecnologías modernas. Mi enfoque se centra en 
            crear experiencias de usuario excepcionales mientras mantengo un código limpio y mantenible.
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
