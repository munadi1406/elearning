import { motion } from "framer-motion";
import Universe from "../../assets/universe.jpg";
import { useState,useEffect } from "react";
import { useRef } from "react";
import { FaEye, FaImage } from "react-icons/fa";
import { useDataUser } from "../../store/auth";
import PropTypes from 'prop-types'

export default function BannerProfile({ username, phoneNumber, email,handleUploadImgae }) {
  const [clickedImage, setClickedImage] = useState(false);
  const [imageFull, setImageFull] = useState(false);
  const { image } = useDataUser((state) => state);
  const dropdownRef = useRef();
  const imageRef = useRef();
  const style = {
    input:
      "w-full outline-none border-blue1 rounded-md p-2 border-2 text-sm text-blue1",
    label: "text-blue1 text-xs font-sans font-semibold",
    text: "text-white capitalize font-sans",
    submenu:
      "bg-blue1 p-2 text-sm font-sans font-semibold  text-white cursor-pointer shadow-[2px_2px_1px_white] ",
  };
 
  const handleOutsideClick = (event) => {
    if (imageFull && imageRef.current && !imageRef.current.contains(event.target)) {
      setImageFull(false);
    }
  };

  const handleDropdownClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setClickedImage(false);
    }
  };

  useEffect(() => {
    if (imageFull) {
      const clickListenerTimeout = setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
      }, 100);
      
      return () => {
        document.removeEventListener("click", handleOutsideClick);
        clearTimeout(clickListenerTimeout);
      };
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageFull]);

  useEffect(() => {
    document.addEventListener("click", handleDropdownClick);
    
    return () => {
      document.removeEventListener("click", handleDropdownClick);
    };
  }, []);


  return (
    <>
      {imageFull && (
        <div className="w-full left-0 h-full absolute top-0 z-30 bg-slate-600/20 backdrop-blur-sm flex justify-center items-center">
          <img src={image ?? Universe} ref={imageRef} className="w-96" />
        </div>
      )}
      <div className="flex justify-start items-center gap-2 flex-wrap">
        <div className="relative h-max">
          <img
            src={image ?? Universe}
            onClick={() => setClickedImage(!clickedImage)}
            alt="universe"
            style={{ display: "" }}
            ref={dropdownRef}
            className={`w-32 h-32 active:scale-95 object-cover block rounded-full z-10  border-2 border-white`}
          />
          <motion.div
            initial={{ height: 0, display: "none" }}
            animate={
              clickedImage
                ? {
                    height: "max-content",
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    zIndex: "10",
                    top: "9rem",
                    left: 0,
                  }
                : { height: 0 }
            }
            className={`w-max bg-white backdrop-blur-sm rounded-md text-blue1`}
          >
            <button
              className="flex justify-start items-center gap-2 active:bg-cream1 p-2"
              onClick={() => {
                handleUploadImgae(true);
              }}
            >
              <FaImage />
              Upload Photo
            </button>
            <button
              className="flex justify-start items-center gap-2 active:bg-cream1 p-2"
              onClick={() => setImageFull(true)}
            >
              <FaEye />
              Lihat Gambar
            </button>
          </motion.div>
        </div>
        <div className="flex flex-col gap-2 flex-grow">
          <div className={`${style.text} text-3xl font-bold `}>{username}</div>
          <div className={`${style.text} text-xs font-semibold`}>{email}</div>
          <div className={`${style.text} text-xs font-semibold`}>
            {phoneNumber}
          </div>
        </div>
      </div>
    </>
  );
}
BannerProfile.propTypes={
  username:PropTypes.string.isRequired,
  email:PropTypes.string.isRequired,
  phoneNumber:PropTypes.string.isRequired,
  handleUploadImgae:PropTypes.func.isRequired
}
