import { useViewportScroll, useTransform, motion } from "framer-motion";
import Landing2 from "../../assets/landing2.jpg";
import Button from "../../components/Button";
import { FaLocationArrow, FaQrcode, FaCode } from "react-icons/fa";
import Landing from '../../assets/landing1.jpg'

export default function Content() {
  const style = {
    text: "text-white text-xl font-sans font-semibold",
  };
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);
  return (
    <main
      id="about"
      className="h-max w-full flex justify-center items-center relative"
    >
      <div className="h-max w-full py-2 flex justify-center items-center flex-col relative z-10">
        <motion.div
          style={{ scale }}
          className="flex justify-center items-center h-48 w-max"
        >
          <motion.div
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <img src={Landing2} alt="image 2" className="h-full w-auto" />
        </motion.div>
        <div className="flex justify-center items-center h-screen">
          <div className="grid w-full  h-max md:grid-cols-3 sm:grid-cols-2  grid-cols-1 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-start items-center flex"
            >
              <div className="h-full flex flex-col justify-center items-start px-5">
                <div
                  className={`${style.text} w-full flex justify-evenly items-center `}
                >
                  Presensi dengan GPS <FaLocationArrow />
                </div>
                <div className="text-white text-sm font-sans">
                  Fitur presensi GPS memungkinkan sistem kami secara otomatis
                  mendeteksi kehadiran Anda saat Anda memasuki platform,
                  menghilangkan kebutuhan untuk tanda tangan manual atau
                  konfirmasi lainnya. Anda hanya perlu melakukan check-in pada
                  saat presensi dibuat oleh instruktur.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-evenly items-center`}
                >
                  Presensi Via QR Code <FaQrcode />
                </div>
                <div className="text-white font-sans text-sm">
                  Cukup dengan memindai QR code unik yang diberikan, Anda bisa
                  langsung mengonfirmasi kehadiran Anda. Ini adalah metode cepat
                  dan praktis yang menggantikan prosedur lama yang lebih
                  merepotkan.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-evenly items-center`}
                >
                  Presensi Via Token <FaCode />
                </div>
                <div className="text-white text-sm font-sans">
                  Anda memiliki kontrol penuh atas kehadiran Anda. Setelah
                  memasukkan token yang diberikan, sistem kami akan segera
                  merekam kehadiran Anda tanpa perlu langkah tambahan.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{duration:3}} className="w-full h-screen flex flex-col justify-center items-center">
          <div className="w-1/2">
            <img src={Landing} alt="landng" />
          </div>
          <div className="text-2xl font-sans font-semibold  text-center text-blue1 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-sans font-semibold  text-center text-blue1">
              Peningkatan Pembelajaran Modern dengan Fitur Absensi
            </h1>
            <h1 className="text-white ">Terbaru</h1>
            <Button to="/login" color={"bg-blue1"} text="Get Started" />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
