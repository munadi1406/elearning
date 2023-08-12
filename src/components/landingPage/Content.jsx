import Landing2 from "../../assets/landing2.jpg";
import Button from "../../components/Button";
import Universe from "./../../assets/universe.jpg";
import {FaLocationArrow,FaQrcode,FaCode, FaSearch} from 'react-icons/fa'

export default function Content() {
  const style = {
    text: "text-white text-xl font-sans font-semibold",
  };
  return (
    <section
      id="about"
      className="h-max w-full flex justify-center items-center relative"
    >
      <div className="h-max w-full py-2 flex justify-center items-center flex-col relative z-10">
        <div className="flex justify-center items-center h-48 w-full">
          <img src={Landing2} alt="image 2" className="h-full w-auto" />
        </div>
        <div className="flex justify-center items-center h-screen">
          <div className="grid w-full  h-max md:grid-cols-3 sm:grid-cols-2  grid-cols-1 flex-wrap">
            <div className="h-full bg-blue1 px-2 py-3 relative  justify-start items-center flex">
              <div className="h-full flex flex-col justify-center items-start px-5">
                <div className={`${style.text} w-full flex justify-evenly items-center `}>
                  Presensi dengan GPS <FaLocationArrow/>
                </div>
                <div className="text-white text-sm font-sans">
                  Fitur presensi GPS memungkinkan sistem kami secara otomatis
                  mendeteksi kehadiran Anda saat Anda memasuki platform,
                  menghilangkan kebutuhan untuk tanda tangan manual atau
                  konfirmasi lainnya. Anda hanya perlu melakukan check-in pada
                  saat presensi dibuat oleh instruktur.
                </div>
              </div>
            </div>
            <div className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex">
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div className={`${style.text} w-full flex justify-evenly items-center`}>
                  Presensi Via QR Code <FaQrcode/>
                </div>
                <div className="text-white font-sans text-sm">
                  Cukup dengan memindai QR code unik yang diberikan, Anda bisa
                  langsung mengonfirmasi kehadiran Anda. Ini adalah metode cepat
                  dan praktis yang menggantikan prosedur lama yang lebih
                  merepotkan.
                </div>
              </div>
            </div>
            <div className="h-full bg-blue1 px-2 py-3 relative  justify-center items-start flex">
              <div className="h-full flex flex-col justify-start items-center px-5">
                <div className={`${style.text} w-full flex justify-evenly items-center`}>
                  Presensi Via Token <FaCode/>
                </div>
                <div className="text-white text-sm font-sans">
                  Anda memiliki kontrol penuh atas kehadiran Anda. Setelah
                  memasukkan token yang diberikan, sistem kami akan segera
                  merekam kehadiran Anda tanpa perlu langkah tambahan.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-44 justify-center items-center flex flex-col">
          <div className="text-2xl font-sans font-semibold  text-center text-blue1 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-sans font-semibold  text-center text-blue1">
              Peningkatan Pembelajaran Modern dengan Fitur Absensi
            </h1>
            <h1 className="text-white ">Terbaru</h1>
            <Button to="/login" color={"bg-blue1"} text="Get Started" />
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-wrap px-2">
          <div className="md:w-[600px] md:flex-grow-0 flex-grow rounded-md relative h-72 flex justify-center items-center z-10">
            <img
              className="w-full grayscale rounded-md h-full object-cover block absolute z-0 top-0 left-0"
              src={Universe}
            />
            <h1 className="relative z-10 text-2xl px-10 text-white font-sans font-semibold w-full">
              Akses kelas dan materi belajar kapan saja dan <br />
              di mana saja sesuai dengan jadwal Anda.
            </h1>
          </div>
          <div className="bg-blue1  p-3 rounded-md h-44 flex justify-center items-center flex-col flex-grow-0 sm:w-[300px] w-[90%] md:translate-x-[-6px]  md:translate-y-0 translate-y-[-20px] transform">
            <div className=" flex justify-center xl:w-auto w-full items-start flex-col space-y-1">
              <div className="text-white text-lg font-sans font-semibold">
                Cari Kelas Anda...
              </div>
              <div className="flex lg:justify-center justify-between xl:w-auto w-full items-center bg-white p-1 rounded-md ">
                <input
                  type="search"
                  placeholder="Kode Kelas..."
                  className="bg-transparent w-full border-0 outline-none placeholder:text-blue2 placeholder:text-xs"
                />
                <button className="bg-blue1 rounded-md p-1 px-3 active:bg-blue1/70">
                  <FaSearch color="white"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
