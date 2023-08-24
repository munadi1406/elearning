import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNotification } from "../store/strore";
import { ImCancelCircle } from "react-icons/im";

export default function Notification() {
  const { status, msgNotification, statusType } = useNotification(
    (state) => state
  );
  const { setStatus, setStatusType } = useNotification();

  useEffect(() => {
    if (status) {
      const timeOut = setTimeout(() => {
        setStatus(false);
      }, 5000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [setStatus, setStatusType, status]);

  return (
    <motion.div
      initial={{ y: -100, translateX: "-50%", left: "50%", position: "fixed" }}
      animate={status ? { y: 20 } : {}}
      exit={{ y: -100 }}
      transition={{ ease: "linear" }}
      className={`${
        statusType ? "bg-green-400/90" : "bg-red-500"
      } backdrop-blur-sm  transform grid grid-cols-12 gap-2 md:w-[400px] w-[85vw] m-auto font-semibold text-base rounded-md py-2 px-4 absolute z-50`}
    >
      <div className="col-span-2 text-xl flex justify-center items-center">
        {statusType ? (
          <FaCheckCircle color="white" />
        ) : (
          <ImCancelCircle color="white" />
        )}
      </div>
      <div className="text-white flex-grow col-span-10">{msgNotification}</div>
    </motion.div>
  );
}
