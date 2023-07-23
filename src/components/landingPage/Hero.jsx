import Polygon from "../../assets/polygon.svg";
import Universe from "../../assets/universe.svg";
import Elipse from "../../assets/elipse.svg";
import Button from "../Button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="p-2 rounded-md overflow-clip mt-2 min-h-[723px] flex justify-between items-center relative ">
      <div className="flex px-10 flex-col text-4xl font-bold font-sans text-blue2 space-y-2 relative z-10">
        <span>Rasakan Era Baru</span>
        <div>
          Pendidikan <span className="text-blue1">Digital</span>
          
        </div>
        <Button color={"bg-blue1"} to="#" text="Get Started" />
      </div>
      <div className="relative z-10 h-screen flex justify-center items-center">
        <div className="relative flex justify-center items-center ">
          {/* lingkaran atas kecil*/}
          <div
            className="h-max  w-full absolute  z-10  translate-y-0 flex justify-center items-center"

          >
            <motion.div
              className="h-72  "
              animate={{ rotate: 360 }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <div className="h-1/2 overflow-clip ">
                <div className="w-72 h-72 border-4 border-blue2 border-dashed block rounded-full "></div>
              </div>
            </motion.div>
          </div>
          {/* penutup lingkaran atas kecil */}
          {/* lingkaran bawah kecil */}
          <div
            className="h-max w-full absolute z-10  translate-y-0 flex justify-center items-center"

          >
            <motion.div
              className="h-72 "
              animate={{ rotate: 360, }}
              transition={{
                duration: 5,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                delay: 5,
                repeatDelay: 5,
              }}
            >
              <div className="h-1/2 overflow-clip ">
                <div className="w-72 h-72 border-4 border-blue2 border-dashed block rounded-full "></div>
              </div>
            </motion.div>
          </div>
          {/* penutup lingkaran kecil */}
          {/* lingkaran atas besar */}
          <div
            className="h-max  w-full absolute  z-10  translate-y-0 flex justify-center items-center"
          >
            <motion.div
              className="h-80  -translate-y-2"
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "loop",
                delay: 3
              }}
            >
              <div className="h-1/2 overflow-clip ">
                <div className="w-80 h-80 border-[6px] border-blue1 border-dashed block rounded-full "></div>
              </div>
            </motion.div>
          </div>
          {/* penutup lingkaran bawah besar */}
          <div
            className="h-max w-full absolute z-10  translate-y-0 flex justify-center items-center"

          >
            <motion.div
              className="h-80  -translate-y-2"
              animate={{ rotate: 360, }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
                delay: 6,
                repeatDelay: 3,
              }}
            >
              <div className="h-1/2 overflow-clip ">
                <div className="w-80 h-80 border-[6px] border-blue1  block rounded-full "></div>
              </div>
            </motion.div>
          </div>
          {/* penutup lingkaran bawah kecil */}
          <motion.div
            animate={{ scale: [1,1.1,1] }}
            transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
            className="relative z-20">
            <img
              className={`
                "relative z-20 w-full h-full"
              `}
              alt="Vectary texture"
              src={Universe}
            />
          </motion.div>
        </div>
        <div className="absolute top-32 left-[50%]  flex justify-center items-center -translate-x-[50%]  w-full h-max ">
          <img src={Elipse} alt="" className="w-max h-max" />
        </div>
        <div className="block border-4 absolute -bottom-10 right-5 rounded-[50%] w-40 h-80 border-white " />
      </div>
      <div className="absolute left-0 top-0 z-0 w-full h-full">
        <img className="w-full h-full" src={Polygon} />
      </div>
    </div>
  );
}
