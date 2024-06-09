import React from 'react';
import ExperienciaItem from '../components/ExperienciaItem';



const Experiencia = () => {
    return (
      <div id="experiencia" className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-6">
        <div className="text-light-gray bg-dark w-full mt-2 py-1 flex justify-center items-center rounded-lg col-span-1 md:col-span-2">
          <span className='text-2xl md:text-2xl font-bold'>Experiencia</span>
        </div>
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
        />
      </div>
    );
  };

export default Experiencia;
