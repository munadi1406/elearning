import { useState } from "react";
import Universe from "../../assets/universe.jpg";
import ButtonPure from "../../components/ButtonPure";
import { FaImage, FaEye } from "react-icons/fa";
import UploadImage from "../../components/UploadImage";
import { useDataUser } from "../../store/auth";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [subMenuActive, setSubMenuActive] = useState(0);
  const [isMouseUp, setMouseUp] = useState(false);
  const [isUploadImage, setIsUploadImage] = useState(false);
  const { username, image, idUsers } = useDataUser((state) => state);
  const [clickedImage, setClickedImage] = useState(false);
  const [imageFull, setImageFull] = useState(false);
  const imageRef = useRef();
  const containerRef = useRef();
  const dropdownRef = useRef();
  const style = {
    input:
      "w-full outline-none border-blue1 rounded-md p-2 border-2 text-sm text-blue1",
    label: "text-blue1 text-xs font-sans font-semibold",
    text: "text-white capitalize font-sans",
    submenu:
      "bg-blue1 p-2 text-sm font-sans font-semibold  text-white cursor-pointer shadow-[2px_2px_1px_white] ",
  };

  const handleMouseUp = () => {
    setMouseUp(!isMouseUp);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (imageRef.current && !imageRef.current.contains(event.target)) {
        setImageFull(false);
      }
    };
    containerRef.current.addEventListener("click", handleOutsideClick); // Tambahkan event listener

    const handleOutiseClickDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setClickedImage(false);
      }
    };

    containerRef.current.addEventListener("click", handleOutiseClickDropdown);
    const container = containerRef.current;
    return () => {
      container.removeEventListener("click", handleOutsideClick);
      document.documentElement.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isUploadImage && <UploadImage handleClose={setIsUploadImage} />}
      <div
        className="w-full  flex justify-center items-center gap-2 flex-col"
        ref={containerRef}
      >
        {imageFull && (
          <div className="w-full left-0 h-full absolute top-0 z-30 bg-slate-600/20 backdrop-blur-sm flex justify-center items-center">
            <img
              src={
                image
                  ? `${
                      import.meta.env.VITE_SOME_ENDPOINT_API
                    }/image/${idUsers}/${image}`
                  : Universe
              }
              ref={imageRef}
              className="w-96"
            />
          </div>
        )}
        <div className="lg:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-2 bg-gradient-to-r from-blue1 to-cream1 rounded-md p-2">
          <div className="flex justify-start items-center gap-2">
            <div className="relative flex justify-center items-center flex-col">
              <img
                src={
                  image
                    ? `${
                        import.meta.env.VITE_SOME_ENDPOINT_API
                      }/image/${idUsers}/${image}`
                    : Universe
                }
                onMouseOver={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onClick={() => setClickedImage(true)}
                alt="universe"
                style={{display:""}}
                className={`${
                  isMouseUp && "opacity-60"
                } w-32 h-32 object-cover block rounded-full z-10  border-2 border-white`}
              />
              <motion.div
                initial={{ height: 0, display: "none" }}
                animate={
                  clickedImage ? {
                    height: "max-content",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    zIndex: "10",
                    top: "8rem",
                    left: 0,
                  }:{height: 0}
                }
                className={`w-max bg-slate-600/60 backdrop-blur-sm rounded-md text-white`}
                ref={dropdownRef}
              >
                <button
                  className="flex justify-start items-center gap-2 active:bg-blue1 p-2"
                  onClick={() => {
                    setIsUploadImage(true);
                  }}
                >
                  <FaImage />
                  Upload Photo
                </button>
                <button
                  className="flex justify-start items-center gap-2 active:bg-blue1 p-2"
                  onClick={() => setImageFull(true)}
                >
                  <FaEye />
                  Lihat Gambar
                </button>
              </motion.div>
            </div>
            <div className="">
              <div className={`${style.text} text-3xl font-bold`}>
                {username}
              </div>
              <div className={`${style.text} text-xs font-semibold`}>
                jamal@gmail.com
              </div>
              <div className={`${style.text} text-xs font-semibold`}>
                08218231318
              </div>
            </div>
          </div>
          <div className=" flex justify-end items-end  px-2">
            <div
              className={`${style.submenu} ${
                subMenuActive === 0 ? "bg-cream1" : "bg-blue1"
              }`}
              onClick={() => setSubMenuActive(0)}
            >
              Account
            </div>
            <div
              className={`${style.submenu} ${
                subMenuActive === 1 ? "bg-cream1" : "bg-blue1"
              }`}
              onClick={() => setSubMenuActive(1)}
            >
              Change Password
            </div>
          </div>
        </div>
        <div className="md:w-2/3 w-full  grid grid-cols-1 gap-2">
          {subMenuActive === 0 && (
            <>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="username" className={style.label}>
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  defaultValue={"maksdmasdmkasd12901293"}
                  className={style.input}
                />
              </div>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="email" className={style.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  defaultValue={"mamdksadk@gmail.com"}
                  className={style.input}
                />
              </div>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="phoneNumber" className={style.label}>
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phoneNumber"
                  defaultValue={"08128012801228"}
                  className={style.input}
                />
              </div>
              <div className="w-full flex">
                <ButtonPure text={"save"} />
              </div>
            </>
          )}
          {subMenuActive === 1 && (
            <>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="password" className={style.label}>
                  New Password
                </label>
                <input type="password" id="password" className={style.input} />
              </div>
              <div className="flex justify-center items-start flex-col w-full gap-2">
                <label htmlFor="confirmPassword" className={style.label}>
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={style.input}
                />
              </div>
              <div className="w-full flex">
                <ButtonPure text={"save"} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
