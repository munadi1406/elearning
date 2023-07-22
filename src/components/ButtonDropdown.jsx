import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function ButoonDropdown() {
  const [isDropdown, SetIsDropdown] = useState(false);

  const handleDropdown = () => {
    SetIsDropdown(!isDropdown);
  };

  return (
    <div
      className="bg-blue2 py-1 min-w-[80px] text-center rounded-md text-white font-semibold font-sans hover:bg-white  transition-all duration-300 ease-in-out w-max text-lg px-2 relative"
      onClick={handleDropdown}
    >
      <div className="hover:text-blue1">Sign In</div>
      <div className={`absolute bg-blue2 flex flex-col p-2 rounded-md  top-10 left-0 ${isDropdown ? '' :'hidden'}`}>
        <NavLink className="border-white border-b-2 border-t-0 border-x-0">Pengajar</NavLink>
        <NavLink>Pelajar</NavLink>
      </div>
    </div>
  );
}
