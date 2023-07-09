import Hero from "../components/landingPage/Hero"
import Footer from "../layout/landingPage/Footer"
import Header from "../layout/landingPage/Header"
import Image from "../components/Image"
import universe from './../assets/universe4.jpg'

export default function LandingPage() {
  return (
    <div className="lg:px-32 px-1">
      <Header />
      <Hero />
      <div className="w-full grid grid-cols-2 justify-center items-center bg-base-100 rounded-md">
        <div className="flex space-x-2 justify-center items-center h-max">
          <div className="flex justify-center items-center text-center w-1/3 h-20 p-1 text-1xl font-semibold font-sans">Akses Materi Secara Online</div>
          <div className="flex justify-center items-center text-center w-1/3 border-r-2 border-l-2 h-20 p-1 text-1xl font-semibold font-sans">Evaluasi dan Ujian Online</div>
          <div className="flex justify-center items-center text-center w-1/3 h-20 p-1 text-1xl font-semibold font-sans">Absensi Digital dengan QR Code</div>
        </div>
        <div>
          <Image src={universe} className="object-cover w-full h-56 block " />
        </div>
      </div>
      <Footer />
    </div>
  )
}
