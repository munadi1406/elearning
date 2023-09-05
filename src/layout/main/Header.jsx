import Logo from "../../assets/logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaPlus, FaBook } from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { SiMusicbrainz } from "react-icons/si";
import { useEffect, useState } from "react";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import AddCourse from "../../components/course/AddCourse";
import { useDataUser } from "../../store/auth";
import { logout } from "../../api/authRegister";
import SplitUsername from "../../utils/SplitUsername";

export default function Header() {
  const [isShowAddCourse, setIsShowAddCourse] = useState(false);
  const [showSubmenuUsers, setShowSubmenuUsers] = useState(false);
  const [showSubmenuUsersMobile, setShowSubmenuUsersMobile] = useState(false);
  const { username, image } = useDataUser((state) => state);
  const navigate = useNavigate();

  const style = {
    navlink:
      "flex justify-center md:text-base text-3xl md:shadow-[2px_2px_1px_#FBEEAC] bg-blue1 hover:shadow-none transtion-all ease-in-out duration-300 active:scale-95 items-center gap-1 md:p-2  md:flex-row flex-col",
    textNavLink: "font-sans font-semibold text-base md:block hidden",
    active: "md:bg-cream2 md:text-blue1 text-white",
  };
  const location = useLocation();
  const [locationIsActive, setLocationIsActive] = useState("");
  const locationArray = ["/home/", "/home/attedance", "/home/course-work"];

  const activeNavlink = () => {
    const checkLocation = locationArray.includes(location.pathname);
    if (!checkLocation) return setLocationIsActive("");
    setLocationIsActive(location.pathname);
  };

  const handleShowSubmenuUsers = () => {
    setShowSubmenuUsers(!showSubmenuUsers);
  };

  useEffect(() => {
    activeNavlink();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const handleAddCourse = () => {
    setIsShowAddCourse(!isShowAddCourse);
  };

  const handleLogout = async () => {
    try {
      await logout();
      sessionStorage.setItem("rt", "");
      sessionStorage.setItem("at", "");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isShowAddCourse && <AddCourse handleAddCourse={handleAddCourse} />}
      <header className="flex justify-center items-center flex-col ">
        <nav className="w-full bg-blue1 p-3 flex justify-between items-center rounded-md">
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} alt="E-verse" />
            <div className="text-1xl text-white font-sans font-semibold">
              E-Verse
            </div>
          </div>
          <div className="flex justify-between items-center gap-2">
            <ScaleEffectMotion>
              <div
                className="flex justify-center items-center gap-2 border rounded-md p-1 h-12 cursor-pointer active:scale-95"
                onClick={handleAddCourse}
              >
                <FaPlus color="white" size={20} />
                <h1 className="text-sm font-sans text-white font-semibold ">
                  Create Course
                </h1>
              </div>
            </ScaleEffectMotion>
            <div className="relative w-max h-max flex justify-center items-center flex-col">
              <ScaleEffectMotion>
                <div
                  className={`md:flex justify-center items-center gap-2 cursor-pointer hidden relative`}
                  onClick={handleShowSubmenuUsers}
                >
                  <div className="w-max h-max border-white rounded-full border-2">
                    {image ? (
                      <img
                        src={image}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full object-cover flex justify-center items-center bg-blue2 text-white text-xs font-semibold">
                        <SplitUsername username={username} />
                      </div>
                    )}
                  </div>
                  <h1 className="text-sm font-sans text-white font-semibold">
                    {username}
                  </h1>
                </div>
              </ScaleEffectMotion>
              <div
                className={`bg-slate-600 text-white z-30 font-semibold text-sm font-sans grid grid-cols-1 ${
                  showSubmenuUsers ? "absolute" : "hidden"
                } w-max h-max py-2  rounded-md top-10`}
              >
                <NavLink
                  to={"./profile"}
                  className="border-b text-start w-full active:bg-blue1 border-white px-10"
                  onClick={handleShowSubmenuUsers}
                >
                  Profile
                </NavLink>
                <NavLink
                  className="text-start w-full active:bg-blue1 cursor-pointer border-white px-10"
                  onClick={() => {
                    handleShowSubmenuUsers();
                    handleLogout();
                  }}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
        <nav className="w-full md:bg-transparent md:relative  bg-blue1 fixed bottom-0 left-0 z-20 flex   p-2 md:justify-center justify-evenly items-center gap-2">
          <NavLink
            to={"./"}
            className={`${style.navlink} ${
              locationIsActive === "/home/" ? style.active : "text-white"
            }`}
          >
            <FaBook
              className={`${
                locationIsActive === "/home/"
                  ? "md:text-blue1 text-cream1"
                  : "white"
              }`}
            />
            <div className={`${style.textNavLink}`}>Course Catalog</div>
          </NavLink>
          <NavLink
            to={"./attedance"}
            className={`${style.navlink} ${
              locationIsActive === "/home/attedance"
                ? style.active
                : "text-white"
            }`}
          >
            <BiCurrentLocation
              className={`${
                locationIsActive === "/home/attedance"
                  ? "md:text-blue1 text-cream1"
                  : "white"
              }`}
            />
            <div className={`${style.textNavLink}`}>Attedance</div>
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
              className={`${
                locationIsActive === "/home/course-work"
                  ? "md:text-blue1 text-cream1"
                  : "white"
              }`}
            />
            <div className={`${style.textNavLink}`}>Coursework</div>
          </NavLink>
          <div className="relative">
            <ScaleEffectMotion>
              <div
                className={`md:hidden justify-center items-center cursor-pointer flex flex-col`}
                onClick={() =>
                  setShowSubmenuUsersMobile(!showSubmenuUsersMobile)
                }
              >
                <div className="w-max h-max border-white rounded-full border-2">
                {image ? (
                      <img
                        src={image}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full object-cover flex justify-center items-center bg-blue2 text-white text-xs font-semibold">
                        <SplitUsername username={username} />
                      </div>
                    )}
                </div>
              </div>
            </ScaleEffectMotion>
            <div
              className={`bg-slate-600 text-white z-30 font-semibold text-sm font-sans grid grid-cols-1 ${
                showSubmenuUsersMobile ? "absolute" : "hidden"
              } w-max h-max py-2  rounded-md -top-16 -left-10`}
            >
              <NavLink
                to={"./profile"}
                className="border-b text-start w-full active:bg-blue1 border-white px-10"
                onClick={() =>
                  setShowSubmenuUsersMobile(!showSubmenuUsersMobile)
                }
              >
                Profile
              </NavLink>
              <NavLink
                className="text-start w-full active:bg-blue1 cursor-pointer border-white px-10"
                onClick={() => {
                  handleLogout();
                  setShowSubmenuUsersMobile(!showSubmenuUsersMobile);
                }}
              >
                Logout
              </NavLink>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
