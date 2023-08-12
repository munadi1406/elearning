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
        isScrolled ? "bg-white/60 backdrop-blur-md backdrop-filter text-blue1" : 'text-white'
      } rounded-md  flex h-16 justify-between items-center  px-4 py-4 overflow-clip relative z-60`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.6, delay: 0.6 }}
        className="flex justify-center items-center space-x-2"
      >
        <img className="w-8" alt="Group" src={Logo} />
        <h1 className="font-sans text-lg  font-bold">E-verse</h1>
      </motion.div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.6,delay:0.6,ease:"easeInOut"}} className="flex justify-center items-center space-x-4">
        <NavLink className={`${style.menu}`} to={""}>
          Home
        </NavLink>
        <NavLink className={`${style.menu}`} to={"#about"}>
          {}About
        </NavLink>
        <Button to="/login" text="Sign In" />
      </motion.div>
    </motion.nav>
  );
}
