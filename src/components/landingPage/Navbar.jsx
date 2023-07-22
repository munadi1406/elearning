import { useEffect } from "react";
import Button from "../Button";
import { useState } from "react";
import Logo from './../../assets/logo.png'
import { NavLink } from "react-router-dom";
import ButtonDropdown from "../ButtonDropdown";

export default function Navbar() {

  const [isScrolled,setIsScrolled] = useState(false);

  useEffect(()=>{
    const isScroll = ()=>{
      const scroll= window.scrollY
      if(scroll > 0){
        return setIsScrolled(true)
      }
      return setIsScrolled(false);
    }
    
    document.addEventListener('scroll',isScroll)
    return () => {
      document.removeEventListener('scroll', isScroll);
    };
  },[])

const style ={
  menu :"text-md text-white font-sans font-semibold"
}

  return (
    <nav className={`bg-blue1 ${isScrolled ? 'bg-blue1/60 backdrop-blur-md backdrop-filter' :'bg-blue1'} rounded-md flex justify-between items-center px-4 py-4 relative z-60`}>
        <div className="flex justify-center items-center space-x-2">
          <img className="w-8" alt="Group" src={Logo} />
          <h1 className="font-sans text-lg text-white font-bold">E-verse</h1>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <NavLink className={`${style.menu}`}>Home</NavLink>
          <NavLink className={`${style.menu}`}>{}About</NavLink>
          <Button to="#" text="Sign In"/>
          <ButtonDropdown/>
        </div>
    </nav>
  );
}
