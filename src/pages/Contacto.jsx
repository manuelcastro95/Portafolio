const Contacto = () => {
  return (
    <div id="contacto" className="container mx-auto px-4">
      {/* Encabezado */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-dark mb-4">
          Contacto
          <span className="block h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          ¿Interesado en trabajar juntos? ¡Contáctame!
        </p>
      </div>

      {/* Grid de contactos */}
      <div className="
        max-w-6xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-4 sm:gap-6 lg:gap-8
        bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg
      ">
        <a 
          href="mailto:manuelcastro911@gmail.com" 
          className="
            flex items-center gap-4 p-6 rounded-lg
            transition-all duration-300
            hover:bg-primary/5 hover:scale-105
            min-h-[100px]
          "
        >
          <div className="flex-shrink-0">
            <i className="fa-regular fa-envelope text-3xl text-primary"></i>
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-sm text-gray-600 mb-1">Email</p>
            <p className="text-dark font-medium truncate">manuelcastro911@gmail.com</p>
          </div>
        </a>

        <a 
          href="https://www.linkedin.com/in/manuel-castro-minotta/" 
          target="_blank"
          className="
            flex items-center gap-4 p-6 rounded-lg
            transition-all duration-300
            hover:bg-primary/5 hover:scale-105
            min-h-[100px]
          "
        >
          <div className="flex-shrink-0">
            <i className="fa fa-linkedin text-3xl text-primary"></i>
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-sm text-gray-600 mb-1">LinkedIn</p>
            <p className="text-dark font-medium truncate">manuel-castro-minotta</p>
          </div>
        </a>

        <a 
          href="https://github.com/manuelcastro95" 
          target="_blank"
          className="
            flex items-center gap-4 p-6 rounded-lg
            transition-all duration-300
            hover:bg-primary/5 hover:scale-105
            min-h-[100px]
          "
        >
          <div className="flex-shrink-0">
            <i className="fa fa-github text-3xl text-primary"></i>
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-sm text-gray-600 mb-1">GitHub</p>
            <p className="text-dark font-medium truncate">manuelcastro95</p>
          </div>
        </a>

        <a 
          href="#" 
          className="
            flex items-center gap-4 p-6 rounded-lg
            transition-all duration-300
            hover:bg-primary/5 hover:scale-105
            min-h-[100px]
          "
        >
          <div className="flex-shrink-0">
            <i className="fa fa-whatsapp text-3xl text-primary"></i>
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
            <p className="text-dark font-medium truncate">+57 317 250 1811</p>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-gray-600">
        <p>© 2024 Manuel Castro. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Contacto;
