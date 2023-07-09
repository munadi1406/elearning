import { useEffect } from "react";
import Button from "../Button";
import { useState } from "react";

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


  return (
    <nav className={`navbar bg-base-100 justify-between items-center rounded-md ${isScrolled && 'backdrop-blur-sm backdrop-filter bg-transparent border-b-2'}`}>
      <a className="btn btn-ghost normal-case text-xl">e-Verse</a>
      <ul className="menu bg-base-200 flex flex-row justify-center items-center rounded-box">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Inbox
            <span className="badge badge-sm">99+</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Updates
            <span className="badge badge-sm badge-warning">NEW</span>
          </a>
        </li>
        <li>
          <a>
            Stats
            <span className="badge badge-xs badge-info"></span>
          </a>
        </li>
      </ul>
      <Button button={"Login"} className="btn btn-primary "/>
    </nav>
  );
}
