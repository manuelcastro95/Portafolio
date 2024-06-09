import perfilImg from "../assets/img/perfil.png";
import EscritorSecuencial from "../components/EscritorSecuencial";
import TextoAnimado from "../components/TextoAnimado";
import Habilidades from "./Habilidades";

const Inicio = () => {
  const words = ["web", "front-end", "back-end", "diseño"];
  return (
    <div
      id="inicio"
      className="
        grid grid-cols-1 gap-1 rounded-xl
        md:grid-cols-3 md:h-80 md:mx-auto md:p-1 md:mb-48
        bg-dark text-light-gray
      "
    >
      <div
        className="
          rounded-xl h-full w-screen mx-1 p-5
          md:col-span-2 md:h-full md:w-full md:p-3 md:flex md:items-center
        "
      >
        <div>
          <div className="md:hidden">
            <div className="mb-16 mx-auto h-72 w-[320px] rounded-full hover:animate-bounce">
              <img src={perfilImg} className="object-cover rounded-full" alt="Manuel Castro" />
            </div>
          </div>

          <h1 className="text-4xl mb-8">
            ¡Hola, soy Manuel Castro!
          </h1>
          <span className="text-2xl">
            Desarrollador <EscritorSecuencial words={words} delay={2000} />
          </span>

          <p className="my-3 text-2xl text-left">
            Apasionado desarrollador con más de 3 años de experiencia en la creación de aplicaciones web completas, intuitivas y atractivas. Especializado en interfaces de usuario, maquetación y desarrollo de módulos personalizados según las especificaciones de cada cliente.
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:items-center md:justify-center">
        <div className="md:mt-5 md:h-72 md:w-72 rounded-full hover:animate-bounce ">
          <img src={perfilImg} className="object-cover rounded-full" alt="Manuel Castro" />
        </div>
      </div>

      <Habilidades />
      
    </div>
  );
}

export default Inicio;
