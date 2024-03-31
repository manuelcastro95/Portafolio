import bootstrapImg from "../assets/img/logos/bootstrap.png";
import cssImg from "../assets/img/logos/css.png";
import jsImg from "../assets/img/logos/js.png";
import laravelImg from "../assets/img/logos/laravel.png";
import mysqlImg from "../assets/img/logos/mysql.png";
import phpImg from "../assets/img/logos/php.png";
import reactImg from "../assets/img/logos/react.png";
import tailwindImg from "../assets/img/logos/tailwind.png";

const Habilidades = () => {
  return (
    <>
      <div className="col-span-3 w-full bg-green-50 h-44 rounded-xl mx-auto my-2 flex justify-center items-center gap-3">
        <div className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={bootstrapImg} className="object-cover scale-75 rounded-2xl" alt="logo php" title="Bootstrap" />
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={cssImg} className="object-cover scale-75 rounded-2xl" alt="logo php" title="CSS 3"/>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={jsImg} className="object-cover scale-75 rounded-2xl" alt="logo php"title="JavaScript" />
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={laravelImg} className="object-cover scale-75 rounded-2xl" alt="logo php" title="Laravel"/>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={mysqlImg} className="object-cover scale-75 rounded-2xl" alt="logo php" title="Mysql"/>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={phpImg} className="object-cover scale-75 rounded-2xl" alt="logo php"title="PHP" />
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={reactImg} className="object-cover scale-75 rounded-2xl" alt="logo php" title="React"/>
        </div>
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-28 h-2w-28 border border-slate-300 p-2 rounded-full flex items-center justify-center cursor-pointer">
          <img src={tailwindImg} className="object-cover scale-75 rounded-2xl" alt="logo php" title="Tailwind"/>
        </div>
      </div>
    </>
  );
};

export default Habilidades;