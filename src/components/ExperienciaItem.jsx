const ExperienciaItem = ({ cargo, empresa, duracion, ubicacion, responsabilidades }) => {
    return (
      <div className="bg-gray-100 p-4 md:p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <h2 className="text-lg md:text-xl font-bold">{cargo}</h2>
          <p className="text-sm md:text-base">{empresa} </p>
          <p className="text-sm md:text-base">{duracion}</p>
          {ubicacion && <p className="text-sm md:text-base">{ubicacion}</p>}
        </div>
        <div>
          <h3 className="text-md md:text-lg font-semibold mb-2">Responsabilidades y logros:</h3>
          <ul className="list-disc list-inside space-y-1">
            {responsabilidades.map((responsabilidad, index) => (
              <li key={index} className="text-sm md:text-base">{responsabilidad}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };


export default ExperienciaItem;