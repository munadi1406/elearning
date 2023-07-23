// import './hero.css';
import Polygon from "../../assets/polygon.svg";
import Universe from "../../assets/universe.svg";
import Elipse from "../../assets/elipse.svg";
import Button from "../Button";
import { motion } from "framer-motion";


export default function Hero({handleClickUniverse,isUniverseClicked}) {

 
  return (
    <div className="p-2  rounded-md overflow-clip mt-2 min-h-[723px] flex justify-between items-center relative ">
      <div className="flex px-10 flex-col text-4xl font-bold font-sans text-blue2 space-y-2 relative z-10">
        <span>Rasakan Era Baru</span>
        <div>
          Pendidikan <span className="text-blue1">Digital</span>
        </div>
        <Button color={"bg-blue1"} to="#" text="Get Started" />
      </div>
      <div>
        <div className="absolute left-0 top-0 z-0 w-full h-full">
          <img className="w-full h-full" src={Polygon} />
        </div>
        <div className=" relative flex justify-center items-center">
          <motion.div
            className="h-full w-full absolute transform -translate-y-28"
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <img className="w-full h-full" alt="Subtract" src={Elipse} />
          </motion.div>
          <motion.div
            className="h-full w-full absolute transform -translate-y-28"
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: 5,
              repeatDelay: 5,
            }}
          >
            <img className="w-full h-full" alt="Subtract" src={Elipse} />
          </motion.div>
          <img
            className={`${
                isUniverseClicked ? `opacity-0` : "relative z-10 w-full h-full"
              }`}
            alt="Vectary texture"
            src={Universe}
            onClick={handleClickUniverse}
          />
        </div>
        <div className="block border-4 absolute -bottom-10 right-5 rounded-[50%] w-40 h-80 border-white " />
      </div>
    </div>
  );
}
