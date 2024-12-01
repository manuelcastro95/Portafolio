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
          duracion="2 años 11 meses"
          ubicacion=""
          responsabilidades={[
            "Diseño e implementación del módulo de Cuentas por Pagar, incluyendo flujos de aprobación, integración con contabilidad y reportería",
            "Rediseño interfaces existentes aplicando principios de diseño responsive",
            "Desarrollo de API Rest para integración con otros sistemas",
            "Aplicación de principios SOLID y Clean Architecture",
            "Diseño de tablas para la base de datos",
            "Corrección de errores y mejoras de usabilidad"
          ]}
          className="p-4 sm:p-6 lg:p-8"
        />
        <ExperienciaItem
          cargo="Técnico programación de software (Aprendiz)"
          empresa="Fergon Outsourcing SAS"
          duracion="7 meses"
          ubicacion=""
          responsabilidades={[
            "Actualización de interfaz de usuario plataforma web Kaidoc",
            "Maquetación de interfaces de usuario de acuerdo al diseño establecido.",
            "Realización de API Rest.",
            "Corrección de errores y mejoras de usabilidad"
          ]}
          className="p-4 sm:p-6 lg:p-8"
        />
      </div>
    </div>
  );
};

export default Experiencia;
