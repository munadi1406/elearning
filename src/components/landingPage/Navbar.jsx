import { useEffect } from "react";
import Button from "../Button";
import { useState } from "react";
import Logo from "./../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const isScroll = () => {
      const scroll = window.scrollY;
      if (scroll > 0) {
        return setIsScrolled(true);
      }
      return setIsScrolled(false);
    };

    document.addEventListener("scroll", isScroll);
    return () => {
      document.removeEventListener("scroll", isScroll);
    };
  }, []);

  const style = {
    menu: "text-md font-sans font-semibold",
  };

  return (
    <motion.nav
      initial={{ width: 0, }}
      animate={{ width: "100%",  }}
      transition={{ ease: "easeInOut", duration: 1.5 }}
      className={` ${
        isScrolled ? "md:bg-blue2/60 bg-gradient-to-r ease-in from-blue1 to-blue2 " : 'md:text-white md:bg-transparent md:backdrop-blur-none'
      } rounded-md  backdrop-blur-sm flex h-16 justify-between items-center  md:px-4 px-1 py-4 overflow-clip relative z-60 text-white`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.6, delay: 0.6 }}
        className="flex justify-center items-center gap-2 "
      >
        <img className="w-8" alt="Group" src={Logo} />
        <h1 className="font-sans text-lg  font-bold">E-verse</h1>
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.6,ease:"easeInOut"}} className="flex justify-center items-center space-x-4">
        <NavLink className={`${style.menu}`} onClick={() => window.scrollTo({top:0, behavior:"smooth"})}>
          Home
        </NavLink>
        <NavLink className={`${style.menu}`} onClick={() => window.location.replace("/#about")}>
          About
        </NavLink>
        <Button to="/login" text="Sign In" />
      </motion.div>
    </motion.nav>
  );
}
