import { motion } from "framer-motion";
import { calculateTimeAgo } from "../../utils/CalculateTime";
import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaGripVertical } from "react-icons/fa";

export default function CommentsCard({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      const clickListen = setTimeout(() => {
        document.addEventListener("click", handleOutsideClick);
      }, 100);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
        clearTimeout(clickListen);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);
  return (
    <div className="relative">
      <div className={`w-full flex justify-between items-center px-1 relative ${!isOpen  && 'overflow-clip'}`}>
        <h1 className="w-max py-1 text-blue1 font-semibold text-sm rounded-md">
          {data?.["user.username"]}
        </h1>
        <motion.div whileTap={{scale:0.8}} onClick={() => setIsOpen(!isOpen)} className="text-blue1 cursor-pointer">
          <FaGripVertical />
        </motion.div>
        <motion.div
          animate={isOpen ? { x:0,opacity:1 } : {x:200,opacity:0}}
        //   exit={{ top:-100,opacity:0 }}
          className={`border absolute h-max z-10 top-2 w-[200px] right-0 overflow-clip p-2 bg-blue2/60 rounded-md `}
          ref={modalRef}
        >
          <ul className="flex flex-col gap-1">
            <li className="bg-blue1/70 text-white p-2 rounded-md text-xs font-sans font-semibold ">
              Edit
            </li>
            <li className="bg-red-400/70 text-white p-2 rounded-md text-xs font-sans font-semibold">
              Hapus
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="ml-3 border-l border-blue1 px-2">
        <div className="text-lg text-blue1 break-words">{data?.comment}</div>
        <div className="text-blue1 text-[10px]  font-semibold">
          {calculateTimeAgo(data?.createdAt)}
        </div>
      </div>
    </div>
  );
}
CommentsCard.propTypes = {
  data: PropTypes.object.isRequired,
};
