import { useState } from "react";
import Button from "../Button";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const stringText = "Selamat Datang di E-Verse";
  return (
    <div
      id="home"
      className="p-2 rounded-md w-full overflow-clip mt-2 h-screen flex justify-center items-center relative "
    >
      <div className="flex px-10 flex-col gap-4 justify-center w-full md:py-0 py-10 items-center font-sans text-blue2 space-y-2 relative z-10">
        <div className="flex justify-center items-center  text-blue1 flex-col gap-1">
          <motion.ul className="flex border-2 md:w-full w-max overflow-clip md:text-3xl text-xl justify-center items-center font-bold p-2 border-blue1 shadow-[2px_2px_1px_#F4D160]">
            {stringText.split("").map((e, i) => (
              <motion.li
                key={i}
                className="item text-center min-w-[10px]"
                initial={{
                  translateY: 100,
                  opacity: 0,
                  rotate: 90,
                }}
                animate={{
                  translateY: 0,
                  opacity: 1,
                  rotate: 0,
                }}
                transition={{
                  ease: "linear",
                  duration: 1,
                  delay: i * 0.1,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 5,
                }}
              >
                {e}
              </motion.li>
            ))}
          </motion.ul>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "linear" }}
            onAnimationComplete={() => setIsAnimationComplete(true)}
            className={`${
              isAnimationComplete
                ? "bg-transparent text-blue1"
                : "bg-blue1 text-blue1"
            } md:text-2xl text-xl transition-all ease-in flex justify-center items-center overflow-clip h-14 text-center font-medium`}
          >
            Tak perlu repot lagi dengan daftar hadir manual
          </motion.div>
        </div>
        <Button color={"bg-blue1"} to="/login" text="Get Started" />
        <div className="w-full flex text-sm font-medium flex-col">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              ease: "linear",
              delay: 0.1,
            }}
            className="w-full text-xs break-keep font-sans font-semibold text-blue1 text-center"
          >
            Lupakan presensi manual yang merepotkan! Dengan fitur presensi
            melalui GPS, QR code atau token, Anda dapat fokus pada pembelajaran
            tanpa harus khawatir tentang tanda tangan dan catatan manual.
          </motion.h1>
        </div>
        <div className="flex lg:justify-center justify-between md:w-72 w-full items-center border-2 border-blue1 bg-white p-1 rounded-md ">
          <input
            type="search"
            placeholder="Kode Kelas..."
            className="bg-transparent w-full text-xs text-blue1 border-0 outline-none placeholder:text-blue1 placeholder:text-xs placeholder:font-semibold"
          />
          <button className="bg-blue1 rounded-md p-1 px-3 active:bg-blue1/70">
            <FaSearch color="white" />
          </button>
        </div>
      </div>
    </div>
  );
}
