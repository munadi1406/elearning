import Polygon from "../../assets/polygon.svg";
import Universe from "../../assets/universe.svg";
import Elipse from "../../assets/elipse.svg";
import Button from "../Button";
import { motion } from "framer-motion";


export default function Hero() {
  const stringText = "Digital";
  return (
    <div className="p-2 rounded-md overflow-clip mt-2 min-h-[723px] grid md:grid-cols-2 grid-cols-1 flex-col-reverse relative ">
      <div className="flex px-10 order-2 md:order-1 flex-col justify-center md:items-start md:py-0 py-10 items-center text-4xl font-bold font-sans text-blue2 space-y-2 relative z-10">
        <motion.div initial={{ opacity: 0, x: -300 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "linear" }} >Rasakan Era Baru</motion.div>
        <div className="w-max flex">
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "linear", delay: 0.1
            }}
            className="w-max"
          >
            Pendidikan
          </motion.h1>
          <motion.ul
            className="w-full text-white flex p-1 overflow-clip">
            {Array.from(stringText).map((e, i) => (
              <motion.li key={i}
                initial={{ translateY: 100, opacity: 0, rotate: 90, background: "white" }}
                animate={{ translateY: 0, opacity: 1, rotate: 0, background: "#1D5D9B" }}
                viewport={{ once: true }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  delay: i * 0.1,
                }}
              >
                {e}
              </motion.li>
            ))}

          </motion.ul>
        </div>
        <Button color={"bg-blue1"} to="#" text="Get Started" />
      </div>
      <div className="relative z-10 order-1 md:order-2  h-screen flex justify-center items-center">
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
          <div className="flex justify-center items-center flex-col relative">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
              className="relative z-20">
              <img
                className={`
                "relative z-20 w-max h-full "
              `}
                alt="Vectary texture"
                src={Universe}
              />
            </motion.div>
            <motion.div
              animate={{ translateY: [5, 0, 5], scale: [0.5, 0.6, 0.5] }}
              transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: "loop" }}
              className="absolute z-0 bottom-10">
              <div className="w-36 h-10 block bg-black/50 rounded-[50%] blur-lg"></div>
            </motion.div>
          </div>
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
