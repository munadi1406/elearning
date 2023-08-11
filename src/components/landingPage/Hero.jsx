import Button from "../Button";
import { motion } from "framer-motion";
import Landing1 from './../../assets/landing1.jpg'


export default function Hero() {
  return (
    <div className="p-2 rounded-md overflow-clip mt-2 min-h-[723px] grid md:grid-cols-2 grid-cols-1 flex-col-reverse relative ">
      <div className="flex px-10 order-2 md:order-1 flex-col justify-center md:items-start md:py-0 py-10 items-center font-sans text-blue2 space-y-2 relative z-10">
        <motion.div className="flex text-blue2 flex-col gap-1" initial={{ opacity: 0, x: -300 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.5, ease: "linear" }} viewport={{ once: true }}>
          <span className="text-3xl font-bold">
            Selamat Datang di E-Verse
          </span>
          <span className="text-lg font-medium">
            Terhubunglah dengan materi pembelajaran tanpa repot. Dengan fitur absensi GPS
          </span>
        </motion.div>
        <div className="w-full flex text-sm font-medium flex-col">
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "linear", delay: 0.1
            }}
            className="w-full"
          >
            Lupakan absensi manual yang merepotkan! Dengan fitur absensi melalui GPS, QR code atau token, Anda dapat fokus pada pembelajaran tanpa harus khawatir tentang tanda tangan dan catatan manual.
          </motion.h1>
        </div>
        <Button color={"bg-blue1"} to="#" text="Get Started" />
      </div>
      <div className="relative z-10 order-1 md:order-2  h-screen flex justify-center items-center">
        <motion.div initial={{ translateX: 200 }} whileInView={{ translateX: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <img src={Landing1} alt="Image 1" />
        </motion.div>
      </div>
    </div>
  );
}
