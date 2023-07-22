// import './hero.css';
import Polygon from "../../assets/polygon.svg";
import Universe from "../../assets/universe.svg";
import Elipse from "../../assets/elipse.svg";
import Button from "../Button";

export default function Hero() {
  return (
    <div className="bg-cream1 p-2  rounded-md overflow-clip mt-2 min-h-[723px] flex justify-between items-center relative ">
      <div className="flex px-10 flex-col text-3xl font-bold font-sans text-white space-y-2 relative z-20">
        <span>
          Rasakan Era Baru
        </span>
        <div >Pendidikan <span className="text-blue1">Digital</span></div>
        <Button color={"bg-blue1"} to="#" text="Get Started" />
      </div>
      <div >
        <div className="absolute left-0 top-0 z-0 w-full h-full">
          <img className="w-full h-full" src={Polygon} />
        </div>
        <div className=" relative flex justify-center items-center">
          <div className="h-max w-max absolute transform -translate-y-28">
            <img className="" alt="Subtract" src={Elipse} />
          </div>
          <img className="relative z-20" alt="Vectary texture" src={Universe} />
        </div>
        <div className="block border-4 absolute -bottom-10 right-5 rounded-[50%] w-40 h-80 border-white " />
      </div>
    </div>

  );
}
