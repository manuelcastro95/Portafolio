const Contacto = () => {
  return (
    <div id="contacto" 
      className="
        w-full h-auto rounded-xl mx-auto grid grid-cols-1
        md:grid-cols-3 md:gap-1 py-1 px-1 md:mb-4
      "
    >
      <div className=" md:col-span-3 w-full mb-2 text-light-gray bg-dark rounded-lg h-10 border m-0 flex justify-center items-center ">
        <span className='text-2xl md:text-2xl font-bold'>Contacto</span>
      </div>
      
      <div 
        className="
          bg-warm w-[390px] mx-auto rounded-xl col-span-3 grid grid-col-1 gap-3 p-2  md:p-3  md:w-full md:grid-cols-3 md:gap-1 
        "
      >
        <a href="mailto:manuelcastro911@gmail.com" className="text-xl hover:text-light-gray  " title="correo electronico">
          <i className="fa-regular fa-envelope mr-2"></i>
          <span>Manuelcastro911@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/manuel-castro-minotta/" target="_blank" className="text-xl hover:text-light-gray  " title="linkedin">
          <i className="fa fa-linkedin mr-2" aria-hidden="true"></i>
          <span>manuel-castro-minotta</span>
        </a>
        <a href="https://github.com/manuelcastro95" target="_blank" className="text-xl hover:text-light-gray  " title="github">
          <i className="fa fa-github mr-2" aria-hidden="true"></i>
          <span>manuelcastro95</span>
        </a>
        <a href="#" className="text-xl hover:text-light-gray  ">
          <i className="fa fa-whatsapp mr-2" aria-hidden="true"></i>
          +57 317 250 1811
        </a>
      </div>
      <div className="col-span-3 w-[390px] mb-6 md:mb-0 md:w-full rounded-xl h-10 m-0 flex justify-center items-center mt-6 md:mt-2">
        <a href="https://manuel-castro.dev/" className="cursor-pointer text-center text-dark">
          © 2024 Manuel Castro. Todos los derechos reservados. 
        </a>
      </div>
    </div>
  )
}

export default Contacto;
