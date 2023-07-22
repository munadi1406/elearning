import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const style = {
    text: "text-white font-sans",
  };
  return (
    <footer className="mb-2 footer p-10 bg-cream1 rounded-md flex flex-col justify-center items-start">
      <div className="flex justify-between items-center space-x-2 w-max border">
        <img className="" src={Logo} />
        <h1 className="text-2xl font-sans text-white font-semibold">E-verse</h1>
      </div>
      <div className="flex justify-start items-center space-x-2">
        <NavLink className={`${style.text}`}>Terms &amp; Policies</NavLink>
        <NavLink className={`${style.text}`}>Privacy Policy</NavLink>
      </div>
      <div className="">
        <h1 className="text-lg font-sans text-white font-semibold">&copy; 2023 <span className="text-blue1">E-Verse</span> All rights reserved</h1>
      </div>
    </footer>
  );
};

export default Footer;
