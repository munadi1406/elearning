import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mb-2 footer md:p-10 p-2 rounded-md flex flex-col justify-center items-start">
      <div className="flex justify-center gap-2 p-2 bg-blue2 items-center w-full flex-col  ">
        <div className="flex justify-start gap-2 items-center">
          <img className="" src={Logo} />
          <h1 className="text-2xl font-sans text-white font-semibold">
            E-verse
          </h1>
        </div>
        <div className="flex justify-center h-full items-center space-x-2 text-blue1 font-bold text-xs font-sans">
          <NavLink className={"hover:underline"}>Terms &amp; Policies</NavLink>
          <NavLink className={"hover:underline"}>Privacy Policy</NavLink>
        </div>
      </div>
      <div className="flex gap-2 justify-center items-center w-full">
        <h1 className="text-xs font-sans text-blue1 font-semibold">
          &copy; 2023 <span className="text-blue1">E-Verse</span> All rights
          reserved
        </h1>
        <div>-</div>
        <h1 className="text-xs font-sans font-bold text-blue1">
          Created By Mun
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
