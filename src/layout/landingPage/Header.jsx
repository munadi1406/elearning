import Navbar from "../../components/landingPage/Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <motion.div initial={{scaleX:-1}} animate={{scaleX:1}} transition={{duration:1.5,ease:"easeInOut"}} className="absolute top-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#75c2f6"
            fillOpacity="1"
            d="M0,320L0,288L288,288L288,96L576,96L576,256L864,256L864,128L1152,128L1152,256L1440,256L1440,0L1152,0L1152,0L864,0L864,0L576,0L576,0L288,0L288,0L0,0L0,0Z"
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
