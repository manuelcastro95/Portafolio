const ExperienciaItem = ({ cargo, empresa, duracion, ubicacion, responsabilidades }) => {
  return (
    <div className="
      bg-white rounded-xl p-6 shadow-lg
      transform transition-all duration-300
      hover:-translate-y-2 hover:shadow-xl
      border border-gray-100
    ">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-dark mb-2">{cargo}</h3>
        <div className="space-y-1">
          <p className="text-accent font-medium">{empresa}</p>
          <p className="text-gray-600 text-sm">{duracion}</p>
          {ubicacion && <p className="text-gray-600 text-sm">{ubicacion}</p>}
        </div>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-dark mb-3">
          Responsabilidades y logros
        </h4>
        <ul className="space-y-2">
          {responsabilidades.map((responsabilidad, index) => (
            <li key={index} className="
              flex items-start gap-2 text-gray-700
              before:content-['•'] before:text-primary before:font-bold
            ">
              <span>{responsabilidad}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default ExperienciaItem;