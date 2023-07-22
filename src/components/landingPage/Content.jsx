import Location from "./../../assets/location.svg";
import Blob1 from "../../assets/Vector.svg";
import Blob2 from "../../assets/Vector (1).svg";
import Blob3 from "../../assets/Vector (2).svg";
import Blob4 from "../../assets/Vector (3).svg";
import Blob5 from "../../assets/Vector (4).svg";
import Blob6 from "../../assets/Vector (5).svg";
import QrCode from '../../assets/qrcode.svg';
import Token from '../../assets/token.svg';
import Button from '../../components/Button';

export default function Content() {

  const style = {
    text: 'text-white text-xl font-sans font-semibold'
  }
  return (
    <div className="h-screen w-full flex justify-center items-center relative">
      <div className="bg-cream1 w-full h-[60%] rounded-md block"></div>
      <div className="absolute top-10 left-0  w-full py-2 flex justify-center items-center flex-col">
        <div className="grid grid-cols-4 w-[90%] space-x-2 ">
          <div className="bg-blue1 h-44 rounded-md p-2 relative col-span-2 justify-center items-center flex">
            <div className="flex justify-center items-center h-full w-full">
              <img className="absolute w-10 top-1 left-2 z-0" alt="Vector" src={Blob1} />
              <div className=" grid grid-row-2 px-5 w-full h-max relative z-10">
                <div className={`${style.text} w-full `}>
                  Absensi dengan
                  GPS
                </div>
                <div className="flex justify-end w-full">
                  <img className="w-20 mr-10 " src={Location} />
                </div>
              </div>
              <img className="absolute w-10 top-0 right-2 z-0" alt="Vector" src={Blob2} />
            </div>
          </div>
          <div className="bg-blue1 rounded-md p-2 relative col-span-1 justify-center items-center flex">
            <div className="flex justify-center items-center h-full w-full">
              <img className="absolute top-20 w-16 left-2 z-0" alt="Vector" src={Blob4} />
              <div className="grid grid-row-2 px-5 w-full h-max relative z-10">
                <div className={`${style.text} w-full`}>
                  Absensi Via QR Code
                </div>
                <div className="w-full flex justify-end">
                  <img className="w-10" src={QrCode} />
                </div>
              </div>
              <img className="absolute w-10 top-0 right-2 z-0" alt="Vector" src={Blob3} />
            </div>
          </div>
          <div className="bg-blue1 rounded-md p-2 relative col-span-1 justify-center items-center flex">
            <div className="flex justify-center items-center h-full w-full">
              <img className="absolute top-20 w-16 right-2 z-0" alt="Vector" src={Blob5} />
              <div className="grid grid-row-2 px-5 w-full h-max relative z-10">
                <div className={`${style.text} w-full`}>
                  Absensi Menggunakan Token
                </div>
                <div className="w-full flex justify-start">
                  <img className="w-10" src={Token} />
                </div>
              </div>
              <img className="absolute w-8 top-0 left-2 z-0" alt="Vector" src={Blob6} />
            </div>
          </div>
        </div>
      <div className="w-full h-44 justify-center items-center flex flex-col">
      <div className="text-2xl font-sans font-semibold  text-center text-blue1">
        <h1 className="text-2xl font-sans font-semibold  text-center text-blue1">
          Peningkatan Pembelajaran Modern dengan Fitur Absensi
        </h1>
        <h1 className="text-white ">Terbaru</h1>
        <Button to="#" color={"bg-blue1"} text="Get Started"/>
      </div>
      </div>
      </div>
      {/* <div className="div-wrapper">
        <div className="overlap-3">
          <div className="text-wrapper-2">GET STARTED</div>
        </div>
      </div>
      <div className="card-2">
        <div className="overlap-4">
          <div className="frame-2">
            <div className="text-wrapper-3">Cari Kelas Anda...</div>
            <div className="overlap-5">
              <div className="group-2">
                <div className="overlap-group-4">
                  <div className="text-wrapper-4">Kode Kelas</div>
                </div>
              </div>
              <div className="icon-magnifying-wrapper">
                <img
                  className="icon-magnifying"
                  alt="Icon magnifying"
                  src="icon-magnifying-glass.png"
                />
              </div>
            </div>
          </div>
          <img className="rectangle-2" alt="Rectangle" src="rectangle-16.png" />
          <p className="akses-kelas-dan">
            Akses kelas dan materi belajar kapan saja dan <br />
            di mana saja sesuai dengan jadwal Anda.
          </p>
        </div>
      </div> */}
    </div>
  );
}
