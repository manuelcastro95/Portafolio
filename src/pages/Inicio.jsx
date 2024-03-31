import perfilImg from "../assets/img/perfil.png";
import Habilidades from "./Habilidades";

const Inicio = () => {
  return (
    <>
      <div id="inicio" className="grid grid-cols-3 gap-1  w-full h-80 rounded-xl mx-auto p-1 mb-36">
        <div className="col-span-2 h-45 bg-blue-200 rounded-xl p-3 flex items-center">
          <div>
            <h1 className="text-4xl mb-8">¡Hola, soy Manuel Castro!</h1>
            <p className="my-3 text-2xl text-justify whitespace-normal">
              Soy un desarrollador full stack
              apasionado con más de 3 años de experiencia en la creación de aplicaciones web completas e intuitivas y atractivas, elaboración de interfaces de usuario,
              maquetación, desarrollo de modulos de acuerdo a la especificaciones de cada cliente.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="mt-14 h-72 w-72 rounded-full hover:animate-bounce ">
            <img src={perfilImg} className="object-cover" alt="" />
          </div>
        </div>

        <Habilidades />
      </div>
    </>
  )
}

export default Inicio