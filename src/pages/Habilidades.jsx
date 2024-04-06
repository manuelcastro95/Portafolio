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
      src: bootstrapImg
    },
    {
      title: "CSS 3",
      src: cssImg
    },
    {
      title: "JavaScript",
      src: jsImg
    },
    {
      title: "Laravel",
      src: laravelImg
    },
    {
      title: "Mysql",
      src: mysqlImg
    },
    {
      title: "PHP",
      src: phpImg
    },
    {
      title: "React",
      src: reactImg
    },
    {
      title: "Tailwind",
      src: tailwindImg
    },
  ];

  return (
    <>
      <div
        className="
          bg-green-50 rounded-xl  my-2
            col-span-2 w-full h-full gap-3
            grid grid-cols-2 px-12 py-6
            md:col-span-3  md:h-44 md:flex md:justify-center md:items-center md:mx-auto
          "
      >
        {
          skills.map((skill, index) =>
            <div key={index} className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
              <img src={skill.src} className="object-cover scale-75 rounded-2xl" alt={`logo ${skill.title}`} title={skill.title} />
            </div>
          )
        }
      </div>
    </>
  );
};

export default Habilidades;