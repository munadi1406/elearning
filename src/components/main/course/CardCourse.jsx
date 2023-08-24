/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import WithMotionWhileView from "../../../utils/WithMotionWhileView";
import Button from "../../Button";
import TextTruncate from "../../../utils/TextTruncate";
import { useState, useRef, useEffect } from "react";
import { FaGripVertical } from "react-icons/fa";
import { motion } from "framer-motion";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import { Link } from "react-router-dom";
import ModalDeleteCourse from "./ModalDeleteCourse";

const CardCourse = ({
  idCourse,
  course,
  desc,
  pengajar,
  containerRef,
  academy,
}) => {
  const [subMenu, setSubmenu] = useState(false);
  const [isOffset, setIsOffset] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const modalRef = useRef();

  const handleSubMenu = (e) => {
    setSubmenu(!subMenu);
    const offestCard = e.clientX;
    const windowWidth = window.innerWidth;
    setIsOffset(windowWidth - 100 < offestCard);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSubmenu(false);
      }
    };

    containerRef.current.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClose = () => {
    setIsDelete(false);
  };


  return (
    <>
      {isDelete && (
        <ModalDeleteCourse handleIsDelete={handleClose} course={course} idCourse={idCourse}/>
      )}
      <div
        className="border-blue1  border-2 p-2 rounded-md h-full text-blue1 shadow-[2px_2px_1px_#F4D160] flex justify-start items-start gap-2 flex-col relative"
        ref={containerRef}
      >
        <div className="flex justify-between items-center w-full ">
          <div className="flex w-full justify-start items-start flex-col gap-2 ">
            <div className="text-xl font-sans font-semibold ">{course}</div>
            <div className="text-xs font-sans font-semibold rounded-full bg-cream1 px-2">
              {pengajar}
            </div>
            <div className="text-xs font-sans font-semibold rounded-full bg-blue2 text-white px-2">
              {academy}
            </div>
          </div>
          <div className={`h-full w-max flex justify-center items-start`}>
            <ScaleEffectMotion>
              <button
                onClick={handleSubMenu}
                className={`${subMenu && "scale-0"}`}
              >
                <FaGripVertical />
              </button>
            </ScaleEffectMotion>
            <div>
              <motion.div
                initial={{ height: "0px" }}
                whileInView={{ height: "100px" }}
                exit={{ height: 0 }}
                className={`bg-slate-700 w-[200px] ${
                  subMenu ? "absolute" : "hidden"
                } text-white ${
                  isOffset && "right-8"
                } top-8 font-sans font-semibold flex justify-start items-center flex-col rounded-md z-10 py-2  `}
                ref={modalRef}
              >
                <Link
                  to={`./course/${idCourse}`}
                  className="w-full active:bg-cream1 border-white cursor-pointer border-b p-2 hover:bg-blue1"
                >
                  Open
                </Link>
                <div
                  className="w-full active:bg-cream1 p-2 cursor-pointer hover:bg-blue1"
                  onClick={() => setIsDelete(true)}
                >
                  Delete Course
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="w-full text-xs">
          <TextTruncate text={desc} maxWords={10} />
        </div>
        <div className="w-full flex-grow flex justify-start items-end">
          <Button
            text="Go To Course"
            color={"bg-blue2"}
            to={`./course/${idCourse}`}
          />
        </div>
      </div>
    </>
  );
};

CardCourse.propTypes = {
  idCourse: PropTypes.number.isRequired,
  course: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  pengajar: PropTypes.string.isRequired,
  academy: PropTypes.string.isRequired,
  containerRef: PropTypes.object.isRequired,
};
export default WithMotionWhileView(CardCourse);
