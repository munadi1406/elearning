import Universe from "../assets/universe.jpg";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import RandomQoutes from "../utils/randomQoutes";
import Login from "../components/loginRegister/Login";
import Register from "../components/loginRegister/Register";

const LoginRegister = () => {
  const [signUp, setSignUp] = useState(false)
  const [qouteNumber, setQouteNumber] = useState(1);
  const [msg, setMsg] = useState("");

  const randomNumber = () => {
    const randomMath = Math.random();
    setQouteNumber(Math.floor(randomMath * 11 + 1));
  };

  const handleSignUp = () => {
    setSignUp(!signUp);
    randomNumber();
    setMsg("");
  };

  return (
    <div className="w-full min-h-screen py-2 flex justify-center items-center md:px-10 px-2">
      <div className="md:w-4/5 w-full   h-max grid lg:grid-cols-2 grid-cols-1 items-center bg-gray-500 rounded-md overflow-hidden relative">
        <motion.div
          initial={{ translateX: -100 }}
          animate={{ translateX: 0 }}
          transition={{ ease: "linear", duration: 0.3 }}
          className="h-[450px]  relative  bg-blue1 gap-2 p-5 px-10 flex justify-center items-center flex-col"
        >
          <img
            src={Universe}
            className="grayscale absolute w-full h-full z-0 top-0 left-0  object-cover"
            alt="Universe"
          />
          <div className=" relative px-2 gap-2 z-10 w-full flex justify-center items-start flex-col h-max">
            <div className="w-full h-max overflow-clip">
              <motion.div
                key={qouteNumber}
                initial={{ translateY: -200 }}
                animate={{ translateY: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-3xl  font-semibold text-white font-sans "
                style={{ textShadow: "0px 3px 1px #1D5D9B" }}
              >
                <RandomQoutes qouteNumber={qouteNumber} />
              </motion.div>
            </div>
            <h1
              className="text-1xl  font-semibold text-white font-sans "
              style={{ textShadow: "0px 3px 1px #1D5D9B" }}
            >
              {signUp ? "Belum Punya Akun ?" : "Sudah Punya Akun ?"}
            </h1>
            <button
              className="text-white hover:bg-white transition-all duration-300 ease-in-out hover:text-blue1 shadow-[3px_3px_1px_white] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans"
              onClick={handleSignUp}
            >
              {signUp ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ translateX: 100 }}
          animate={{ translateX: 0 }}
          transition={{ ease: "linear", duration: 0.3 }}
          className=" h-[450px] relative  bg-blue1 gap-2 p-5 md:px-10 px-2 flex justify-center items-center flex-col"
        >
          <div className="flex justify-center items-center gap-2">
            <img src={Logo} alt="" className="" />
            <h1 className="text-1xl font-semibold text-white ">E-Verse</h1>
          </div>
          <div className="flex justify-center lg:px-10 px-5 gap-1 items-center flex-col w-full bg-white rounded-md h-full overflow-clip">
            <h1
              className="text-blue1  w-full  mt-4 text-center font-semibold text-3xl font-sans"
              style={{ textShadow: "2px 1px 1px #FBEEAC" }}
            >
              {signUp ? "Sign Up" : "Sign In"}
            </h1>
            <h1 className="w-full text-center text-red-500 text-xs font-sans capitalize">
              {msg}
            </h1>
            {!signUp ? (
             <Login setMsg={setMsg}/>
            ) : (
              <Register setMsg={setMsg}/>
            )}
            <Link className="text-blue-500 text-xs hover:underline">
              Forgot Password ?
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginRegister;
