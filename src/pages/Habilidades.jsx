import bootstrapImg from "../assets/img/logos/bootstrap.png";
import cssImg from "../assets/img/logos/css.png";
import jsImg from "../assets/img/logos/js.png";
import laravelImg from "../assets/img/logos/laravel.png";
import mysqlImg from "../assets/img/logos/mysql.png";
import phpImg from "../assets/img/logos/php.png";
import reactImg from "../assets/img/logos/react.png";
import tailwindImg from "../assets/img/logos/tailwind.png";

const Habilidades = () => {
  const skills = [
    {
      title: "Bootstrap",
      src: bootstrapImg,
    },
    {
      title: "JavaScript",
      src: jsImg,
    },
    {
      title: "Laravel",
      src: laravelImg,
    },
    {
      title: "MySQL",
      src: mysqlImg,
    },
    {
      title: "PHP",
      src: phpImg,
    },
    {
      title: "React",
      src: reactImg,
    },
    {
      title: "Tailwind",
      src: tailwindImg,
    },
  ];

  return (
    <>
      <div id="habilidades" className="bg-light-gray text-dark rounded-2xl my-3 p-6 col-span-2 w-full h-full gap-4 grid grid-cols-2 md:col-span-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:items-center lg:mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-28 border border-dark p-2 rounded-full flex items-center justify-center cursor-pointer m-2 bg-soft"
          >
            <img
              src={skill.src}
              className="object-cover scale-75 rounded-2xl"
              alt={`logo ${skill.title}`}
              title={skill.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Habilidades;
