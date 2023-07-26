import Logo from "../../assets/logo.png";
import Universe from "../../assets/universe.jpg";
import { NavLink, useLocation } from "react-router-dom";
import { FaPlus, FaBook } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { SiMusicbrainz } from "react-icons/si";
import { useEffect, useState } from "react";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import AddCourse from "../../components/home/AddCourse";

export default function Header() {

  const [isShowAddCourse,setIsShowAddCourse] = useState(false);

  const style = {
    navlink:
      "flex justify-center md:shadow-[2px_2px_1px_#FBEEAC] bg-blue1 hover:shadow-none transtion-all ease-in-out duration-300 active:scale-95 items-center gap-1 border-white md:border-2 md:p-2  md:flex-row flex-col",

    active: "md:bg-cream2 md:text-blue1 text-white",
  };
  const location = useLocation();
  const [locationIsActive, setLocationIsActive] = useState("");
  const locationArray = ["/home/", "/home/attedance", "/home/course-work"];

  const activeNavlink = () => {
    const checkLocation = locationArray.includes(location.pathname);
    if (!checkLocation) return;
    setLocationIsActive(location.pathname);
  };

  useEffect(() => {
    activeNavlink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleAddCourse = ()=>{
    setIsShowAddCourse(!isShowAddCourse);
  }

  return (
    <>
    {isShowAddCourse && <AddCourse handleAddCourse={handleAddCourse}/>}
    <header className="flex justify-center items-center flex-col ">
      <nav className="w-full bg-blue1 p-3 flex justify-between items-center rounded-md">
        <div className="flex justify-center items-center gap-2">
          <img src={Logo} alt="" />
          <div className="text-1xl text-white font-sans font-semibold">
            E-Verse
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <ScaleEffectMotion>
            <div className="flex justify-center items-center gap-2 border rounded-md p-1 h-12 cursor-pointer active:scale-95" onClick={handleAddCourse}>
              <FaPlus color="white" size={20} />
              <h1 className="text-sm font-sans text-white font-semibold ">
                Create Course
              </h1>
            </div>
          </ScaleEffectMotion>
          <ScaleEffectMotion>
            <div
              className={`md:flex justify-center items-center gap-2 cursor-pointer hidden`}
            >
              <div className="w-max h-max border-white rounded-full border-2">
                <img src={Universe} className="w-8 h-8 rounded-full" />
              </div>
              <h1 className="text-sm font-sans text-white font-semibold">
                Fathullah Munadi
              </h1>
            </div>
          </ScaleEffectMotion>
        </div>
      </nav>
      <nav className="w-full md:bg-transparent md:relative  bg-blue1 fixed bottom-0 left-0 z-20 flex   p-2 justify-center items-center gap-2">
        <NavLink
          to={"./"}
          className={`${style.navlink} ${
            locationIsActive === "/home/" ? style.active : "text-white"
          }`}
        >
          <FaBook
            size={20}
            className={`${
              locationIsActive === "/home/"
                ? "md:text-blue1 text-cream1"
                : "white"
            }`}
          />
          <div className=" font-sans font-semibold md:text-base text-xs">
            Course Catalog
          </div>
        </NavLink>
        <NavLink
          to={"./attedance"}
          className={`${style.navlink} ${
            locationIsActive === "/home/attedance" ? style.active : "text-white"
          }`}
        >
          <BiCurrentLocation
            size={20}
            className={`${
              locationIsActive === "/home/attedance"
                ? "md:text-blue1 text-cream1"
                : "white"
            }`}
          />
          <div className=" font-sans font-semibold md:text-base text-xs">
            Attedance
          </div>
        </NavLink>
        <NavLink
          to={"./course-work"}
          className={`${style.navlink} ${
            locationIsActive === "/home/course-work"
              ? style.active
              : "text-white"
          }`}
        >
          <SiMusicbrainz
            size={20}
            className={`${
              locationIsActive === "/home/course-work"
                ? "md:text-blue1 text-cream1"
                : "white"
            }`}
          />
          <div className=" font-sans font-semibold md:text-base text-xs">
            Coursework
          </div>
        </NavLink>
        <ScaleEffectMotion>
          <div
            className={`md:hidden justify-center items-center cursor-pointer flex flex-col`}
          >
            <div className="w-max h-max border-white rounded-full border-2">
              <img src={Universe} className="w-5 h-5 rounded-full" />
            </div>
            <h1 className="text-xs font-sans text-white font-semibold">
              Fathullah Munadi
            </h1>
          </div>
        </ScaleEffectMotion>
      </nav>
    </header>
    </>
  );
}
