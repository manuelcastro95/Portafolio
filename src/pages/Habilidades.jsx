import bootstrapImg from "../assets/img/logos/bootstrap.png";
import cssImg from "../assets/img/logos/css.png";
import jsImg from "../assets/img/logos/js.png";
import laravelImg from "../assets/img/logos/laravel.png";
import mysqlImg from "../assets/img/logos/mysql.png";
import phpImg from "../assets/img/logos/php.png";
import reactImg from "../assets/img/logos/react.png";
import tailwindImg from "../assets/img/logos/tailwind.png";
import gitImg from "../assets/img/logos/git.png";
const Habilidades = () => {
  const skills = [
    { title: "Laravel", src: laravelImg },
    { title: "PHP", src: phpImg },
    { title: "MySQL", src: mysqlImg },
    { title: "React", src: reactImg },
    { title: "Bootstrap", src: bootstrapImg },
    { title: "Tailwind", src: tailwindImg },
    { title: "Git", src: gitImg },
  ];

  return (
    <div id="habilidades" className="container mx-auto px-4">
      {/* Encabezado */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold text-dark mb-4">
          Habilidades
          <span className="block h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tecnologías y herramientas que domino
        </p>
      </div>

      {/* Grid de habilidades */}
      <div className="
        max-w-5xl mx-auto 
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 
        gap-4 sm:gap-6
        bg-white rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg
      ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group relative bg-white
              rounded-xl p-3 sm:p-4
              transform transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              flex flex-col items-center justify-center
              aspect-square border border-gray-100
            "
          >
            <img
              src={skill.src}
              alt={`${skill.title} logo`}
              className="
                w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain
                transition-transform duration-300
                group-hover:scale-110
              "
            />
            <p className="
              mt-2 sm:mt-4 text-xs sm:text-sm font-medium text-gray-600
              group-hover:text-primary transition-colors duration-300
            ">
              {skill.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Habilidades;
