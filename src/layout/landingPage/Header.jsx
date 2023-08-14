import Navbar from "../../components/landingPage/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ scaleX: -1 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-16 md:h-max"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#75C2F6"
            fillOpacity="1"
            d="M0,128L0,192L360,192L360,256L720,256L720,160L1080,160L1080,288L1440,288L1440,0L1080,0L1080,0L720,0L720,0L360,0L360,0L0,0L0,0Z"
          ></path>
        </svg>
      </motion.div>
      <header className="pt-1 sticky top-0 z-20 flex justify-center items-center">
        <Navbar />
      </header>
    </>
  );
};

export default Header;
