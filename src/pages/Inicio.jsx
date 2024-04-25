import perfilImg from "../assets/img/perfil.png";
import EscritorSecuencial from "../components/EscritorSecuencial";
import TextoAnimado from "../components/TextoAnimado";
import Habilidades from "./Habilidades";

const Inicio = () => {
  const words = ["web", "front-end", "back-end", "diseño"];
  return (
    <>
      <div
        id="inicio"
        className="
          grid grid-cols-1 rounded-xl gap-1
          md:grid-cols-3  md:h-80  md:mx-auto md:p-1 md:mb-36
          bg-dark
            text-light-gray
          "
      >

        <div
          className="
          rounded-xl
            h-full w-screen mx-1 p-5
            md:col-span-2 md:h-full md:w-full md:h-45 md:p-3 md:flex md:items-center
            text-light-gray
            
          "
        >
          <div>
            <div
              className="
              md:hidden
            "
            >
              <div className="mb-16 mx-auto h-72 w-[320px] rounded-full hover:animate-bounce ">
                <img src={perfilImg} className="object-cover" alt="" />
              </div>
            </div>

            <h1 className="text-4xl mb-8">
              <TextoAnimado text="¡Hola, soy Manuel Castro!" delay={9000} />
            </h1>
            <span className="text-2xl">
              Desarrollador <EscritorSecuencial words={words} delay={2000} />
            </span>

            <p className="my-3 text-2xl text-justify whitespace-normal">
              apasionado con más de 3 años de experiencia en la creación de aplicaciones web completas e intuitivas y atractivas, elaboración de interfaces de usuario,
              maquetación, desarrollo de modulos de acuerdo a la especificaciones de cada cliente.
            </p>
          </div>
        </div>

        <div
          className="
            hidden
            md:flex md:items-center md:justify-center
          "
        >
          <div className="md:mt-5 md:h-72 md:w-72 rounded-full hover:animate-bounce z-50">
            <img src={perfilImg} className="object-cover" alt="" />
          </div>
        </div>

        <Habilidades />
      </div>
    </>
  )
}

export default Inicio