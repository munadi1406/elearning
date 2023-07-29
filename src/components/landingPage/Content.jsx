import Location from "./../../assets/location.svg";
import Blob1 from "../../assets/Vector.svg";
import Blob2 from "../../assets/Vector (1).svg";
import Blob3 from "../../assets/Vector (2).svg";
import Blob4 from "../../assets/Vector (3).svg";
import Blob5 from "../../assets/Vector (4).svg";
import Blob6 from "../../assets/Vector (5).svg";
import QrCode from "../../assets/qrcode.svg";
import Token from "../../assets/token.svg";
import Button from "../../components/Button";
import Universe from "./../../assets/universe.jpg";
import Search from "../../assets/search.svg";

export default function Content() {
  const style = {
    text: "text-white text-xl font-sans font-semibold",
  };
  return (
    <div className="h-max w-full flex justify-center items-center relative">
      <div className="bg-cream1 w-full h-[60%] rounded-md absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] transform z-0"></div>
      <div className="h-max w-full py-2 flex justify-center items-center flex-col relative z-10">
        <div className="grid  min-w-[90%]  h-max md:grid-cols-3 gap-2 sm:grid-cols-2  grid-cols-1 flex-wrap">
          <div className="bg-blue1 h-44 rounded-md  p-2 relative   justify-center items-center flex">
            <div className="flex justify-center items-center h-full w-full">
              <img
                className="absolute w-10 top-1 left-2 z-0"
                alt="Vector"
                src={Blob1}
              />
              <div className=" grid grid-row-2 px-5 w-full h-2/3 relative z-10">
                <div className={`${style.text} w-full `}>
                  Absensi dengan GPS
                </div>
                <div className="flex justify-end w-full">
                  <img className="w-10 mr-10 " src={Location} />
                </div>
              </div>
              <img
                className="absolute w-10 top-0 right-2 z-0"
                alt="Vector"
                src={Blob2}
              />
            </div>
          </div>
          <div className="bg-blue1 h-44 rounded-md  p-2 relative  justify-center items-center flex">
            <div className="flex justify-center items-center h-full w-full">
              <img
                className="absolute top-20 w-16 left-2 z-0"
                alt="Vector"
                src={Blob4}
              />
              <div className="grid grid-row-2 px-5 w-full h-2/3 relative z-10 ">
                <div className={`${style.text} w-full`}>
                  Absensi Via QR Code
                </div>
                <div className="w-full flex justify-end">
                  <img className="w-10" src={QrCode} />
                </div>
              </div>
              <img
                className="absolute w-10 top-0 right-2 z-0"
                alt="Vector"
                src={Blob3}
              />
            </div>
          </div>
          <div className="bg-blue1 h-44 rounded-md   p-2 relative sm:col-span-full md:col-span-1 justify-center items-center flex">
            <div className="flex justify-center items-center h-full w-full">
              <img
                className="absolute top-20 w-16 right-2 z-0"
                alt="Vector"
                src={Blob5}
              />
              <div className="grid grid-row-2 px-5 w-full h-2/3 relative z-10">
                <div className={`${style.text} w-full`}>
                  Absensi Menggunakan Token
                </div>
                <div className="w-full flex justify-end">
                  <img className="w-10" src={Token} />
                </div>
              </div>
              <img
                className="absolute w-8 top-0 left-2 z-0"
                alt="Vector"
                src={Blob6}
              />
            </div>
          </div>
        </div>
        <div className="w-full h-44 justify-center items-center flex flex-col">
          <div className="text-2xl font-sans font-semibold  text-center text-blue1 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-sans font-semibold  text-center text-blue1">
              Peningkatan Pembelajaran Modern dengan Fitur Absensi
            </h1>
            <h1 className="text-white ">Terbaru</h1>
            <Button to="#" color={"bg-blue1"} text="Get Started" />
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
                  placeholder="Kode Kelas"
                  className="bg-transparent w-full border-0 outline-none placeholder:text-blue2"
                />
                <button className="bg-blue1 rounded-md p-1 px-3 active:bg-blue1/70">
                  <img src={Search} alt="Search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
