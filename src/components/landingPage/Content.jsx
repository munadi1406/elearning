import { motion } from "framer-motion";
import Landing2 from "../../assets/landing2.jpg";
import Button from "../../components/Button";
import { FaLocationArrow, FaQrcode, FaCode } from "react-icons/fa";
import Landing from "../../assets/landing1.jpg";
import Particle from "../Particle";

export default function Content() {
  const style = {
    text: "text-white text-xl font-sans font-semibold",
  };
  return (
    <main
      id="about"
      className="h-max w-full flex justify-center items-center relative"
    >
      <Particle />
      <div className="h-max w-full py-2 flex justify-center items-center flex-col relative z-10">
        <motion.div
          initial={{ scale: 0.4 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="flex justify-center items-center h-48 w-max"
        >
          <img src={Landing2} alt="image 2" className="h-full w-auto" />
        </motion.div>
        <div className="flex justify-center items-center h-screen">
          <div className="grid w-full  h-max md:grid-cols-2 grid-rows-2 sm:grid-cols-2  grid-cols-1 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative row-span-2 justify-start items-center flex"
            >
              <div className="h-full flex flex-col justify-center items-start px-5 gap-2">
                <div
                  className={`${style.text} w-full flex justify-start items-center text-4xl gap-2`}
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
              transition={{ duration: 1, ease: "easeInOut" }}
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
              transition={{ duration: 1, ease: "easeInOut" }}
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
        <div className="flex justify-center items-center h-max">
          <div className="grid w-full  h-max md:grid-cols-2 grid-rows-6 sm:grid-cols-2  grid-cols-1 flex-wrap">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue2 px-2 py-3 relative row-span-2 justify-start items-center flex"
            >
              <div className="h-full flex flex-col justify-center items-start px-5 gap-2">
                <div
                  className={`${style.text} w-full flex justify-start items-center text-4xl gap-2`}
                >
                  Kecepatan dan Efisiensi Absensi
                </div>
                <div className="text-white text-sm font-sans">
                  Sistem absensi dengan QR code dan token memungkinkan siswa
                  untuk mengambil kehadiran mereka dengan cepat. Mereka hanya
                  perlu memindai QR code atau memasukkan token, tanpa perlu
                  menunggu daftar hadir manual.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center`}
                >
                  Presisi dan Akurasi
                </div>
                <div className="text-white font-sans text-sm">
                  Dengan penggunaan QR code dan token, Anda dapat memastikan
                  akurasi yang tinggi dalam mencatat kehadiran siswa. Ini
                  mengurangi risiko kesalahan manusia yang mungkin terjadi dalam
                  proses manual.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center`}
                >
                  Pelacakan Kehadiran yang Mudah
                </div>
                <div className="text-white text-sm font-sans">
                  Dengan sistem ini, Anda dapat dengan mudah melacak kehadiran
                  siswa Anda. Data absensi dapat disimpan dalam database yang
                  dapat diakses oleh guru atau administrator kapan saja.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center`}
                >
                  Kemudahan Penggunaan
                </div>
                <div className="text-white text-sm font-sans">
                  Penggunaan QR code dan token absensi cukup sederhana dan mudah
                  dipahami oleh siswa. Ini memungkinkan mereka untuk dengan
                  cepat dan mudah mengambil kehadiran tanpa perlu pelatihan
                  khusus.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue2 px-2 py-3 relative row-span-2 justify-center items-center flex"
            >
              <div className="h-full flex flex-col justify-center items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center text-4xl`}
                >
                  Laporan Kehadiran Otomatis
                </div>
                <div className="text-white text-sm font-sans ">
                  Dengan sistem ini, Anda dapat menghasilkan laporan kehadiran
                  secara otomatis. Ini memudahkan proses pelaporan untuk guru,
                  administrator, atau siswa.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue2 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center`}
                >
                  Fleksibilitas
                </div>
                <div className="text-white text-sm font-sans">
                  Sistem ini dapat diterapkan dalam berbagai jenis kursus atau
                  pelatihan. Baik itu pelatihan online, kelas-kelas tatap muka,
                  atau kombinasi keduanya.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center`}
                >
                  Penghematan Waktu
                </div>
                <div className="text-white text-sm font-sans">
                  Dengan absensi yang otomatis, waktu yang sebelumnya digunakan
                  untuk pencatatan kehadiran manual dapat dialokasikan untuk
                  kegiatan pembelajaran yang lebih produktif.
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex"
            >
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div
                  className={`${style.text} w-full flex justify-start items-center`}
                >
                  Pemantauan Progres Siswa
                </div>
                <div className="text-white text-sm font-sans">
                  Data absensi yang akurat juga dapat membantu dalam memantau
                  progres siswa. Ini dapat membantu guru untuk lebih efektif
                  memberikan bimbingan kepada siswa yang mungkin absen terlalu
                  sering.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.5 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-screen flex flex-col justify-center items-center"
        >
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
