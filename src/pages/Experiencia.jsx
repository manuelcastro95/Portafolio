import React from 'react';
import ExperienciaItem from '../components/ExperienciaItem';



const Experiencia = () => {
  return (
    <div id="experiencia" className="container mx-auto px-4">
      {/* Encabezado */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-dark mb-4">
          Experiencia
          <span className="block h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Mi trayectoria profesional en desarrollo de software
        </p>
      </div>

      {/* Grid de experiencia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
        <ExperienciaItem
          cargo="Técnico programación de software"
          empresa="Partes Equipos y Suministros"
          duracion="ago. 2021 - actualidad · 2 años 11 meses"
          ubicacion=""
          responsabilidades={[
            "Desarrollo de módulo Gestor de cuentas por pagar.",
            "Realización de pruebas de aplicativo web y móvil.",
            "Diseño de tablas y actualización de tablas MYSQL.",
            "Maquetación de interfaces de usuario de acuerdo al diseño establecido.",
            "Realización de API Rest.",
            "Actualización Interfaz de usuario (Diseño Responsive), de acuerdo al diseño establecido."
          ]}
          className="p-4 sm:p-6 lg:p-8"
        />
        <ExperienciaItem
          cargo="Técnico programación de software"
          empresa="Fergon Outsourcing SAS"
          duracion="feb. 2021 - ago. 2021 · 7 meses"
          ubicacion=""
          responsabilidades={[
            "Diseño de tablas y actualización de tablas MYSQL.",
            "Maquetación de interfaces de usuario de acuerdo al diseño establecido.",
            "Realización de API Rest.",
            "Testeo de aplicaciones móviles y web."
          ]}
          className="p-4 sm:p-6 lg:p-8"
        />
      </div>
    </div>
  );
};

export default Experiencia;
