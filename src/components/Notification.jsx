import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNotification } from "../store/strore";

export default function Notification() {
  const { status, msgNotification } = useNotification((state) => state);
  const { setStatus } = useNotification();

  useEffect(() => {
    if (status) {
      const timeOut = setTimeout(() => {
        setStatus(false);
      }, 5000);
      return () => {
        clearTimeout(timeOut);
      };
    }
  }, [status]);
  
  return (
    <motion.div
      initial={{ y: -50, translateX: "-50%", left: "50%", position: "fixed" }}
      animate={status ? { y: 20 } : {}}
      exit={{ y: -50 }}
      transition={{ ease: "easeInOut" }}
      className="bg-green-400/90 backdrop-blur-sm   flex transform justify-between gap-2 w-[400px] m-auto items-center font-semibold text-base rounded-md py-2 px-4 absolute z-50"
    >
      <FaCheckCircle color="white"/>
      <div className="text-white">
      {msgNotification}
      </div>
    </motion.div>
  );
}
