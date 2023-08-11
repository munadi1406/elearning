import { motion } from "framer-motion"

export default function Alert() {
  return (
    <motion.div
    initial={{ right: -100 }}
    animate={{ right: 0 }}
    className="bg-blue1 absolute top-24 text-white rounded-s-md p-2 font-sans font-semibold w-max"
    transition={{ ease: "easeInOut" }}
  >
    Ini adalah alert
  </motion.div>
  )
}
