import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNotification } from "../store/strore";
import { ImCancelCircle } from "react-icons/im";

export default function Notification() {
  const { status, msgNotification, statusType } = useNotification(
    (state) => state
  );
  const { setStatus ,setStatusType} = useNotification();

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
      initial={{ y: -50, translateX: "-50%", left: "50%", position: "fixed" }}
      animate={status ? { y: 20 } : {}}
      exit={{ y: -50 }}
      transition={{ ease: "linear" }}
      className={`${
        statusType ? "bg-green-400/90" : "bg-red-500"
      } backdrop-blur-sm   flex transform justify-between gap-2 w-[400px] m-auto items-center font-semibold text-base rounded-md py-2 px-4 absolute z-50`}
    >
      {statusType ? (
        <FaCheckCircle color="white" />
      ) : (
        <ImCancelCircle color="white" />
      )}
      <div className="text-white">{msgNotification}</div>
    </motion.div>
  );
}
