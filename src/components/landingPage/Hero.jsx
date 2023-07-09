import world from "../../assets/world.png";
import Button from "../Button";
import Image from "./../Image";
import universe from "./../../assets/universe.jpg";
import universe3 from "./../../assets/universe2.jpg";
import universe2 from "./../../assets/universe3.jpg";

export default function Hero() {
  return (
    <div className="hero bg-base-200 w-full min-h-screen">
      <div className="hero-content grid grid-cols-2 w-full">
        <div>
          <p className="text-4xl py-3 font-sans font-semibold">
            Rasakan Era Baru Pendidikan <span className="text-primary italic">Digital</span>
          </p>
          <Button button="Get Started"  />
        </div>
        <div className="flex justify-center items-center relative h-80">
          <div className="w-1/2 h-40 border-2 border-dashed block absolute top-0 left-0 z-0 ">
            {" "}
            <Image src={universe2} className="object-cover w-full h-full" />
          </div>
          <Image src={world} className="relative z-10 w-56" />
          <div className="w-1/2 h-40 border-2 border-dashed block absolute bottom-0 right-0 z-0 ">
            {" "}
            <Image src={universe3} className="object-cover w-full h-full" />
          </div>
          <div className="w-1/2 h-40 block absolute bottom-0 left-0 z-0 ">
            <Image src={universe} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
