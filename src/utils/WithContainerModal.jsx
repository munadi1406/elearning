import { motion } from "framer-motion";

const WithContainerModal = (OriginalComponent) => {
  const WrapperComponent = (props) => {
    return (
      <div className="h-full w-full bg-black/30 z-30 flex justify-center items-center fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <motion.div
          initial={{ opaticy: 0, scale: 0.9 }}
          animate={{ opaticy: 1, scale: 1 }}
          exit={{ scale: 0, opaticy: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-screen flex justify-center items-center p-3"
        >
          <OriginalComponent {...props} />
        </motion.div>
      </div>
    );
  };
  return WrapperComponent;
};

export default WithContainerModal;
