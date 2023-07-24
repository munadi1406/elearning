import Universe from '../assets/universe.jpg'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const LoginRegister = () => {
    const [signUp, setSignUp] = useState(false);

    const qoutes = {
        qoutes1: "Ngoding Aja Dulu Jagonya Belakangan"
    }
    const style = {
        input: "w-full rounded-md bg-slate-200 outline-none border-none h-10 px-2 placeholder:italic text-sm"
    }

    const handleSignUp = () => {
        setSignUp(!signUp)
    }

    const variants = {
        open: {
            right:0,
        },
        closed: {
            left: 0
        }
    }
   

    return (
        <div className="w-screen h-screen flex justify-center items-center px-10">
            <div className={`w-[900px] h-[70%] flex justify-center items-center bg-gray-500 rounded-md overflow-clip relative`}>
                <motion.div
                    animate={signUp ? "open" : "closed"}
                    variants={variants}
                    className='w-[450px] h-full absolute  bg-blue1 gap-2 p-5 px-10 flex justify-center items-center flex-col'
                >
                    <img src={Universe} className='grayscale absolute z-0 top-0 left-0 w-full h-full object-cover' alt="Universe" />
                    <div className=' relative px-2 gap-2 z-10 w-full flex justify-center items-start flex-col h-max'>
                        <h1 className='text-3xl  font-semibold text-white font-sans ' style={{ textShadow: "0px 3px 1px #1D5D9B" }}>
                            {qoutes.qoutes1}
                        </h1>
                        <h1 className='text-1xl  font-semibold text-white font-sans ' style={{ textShadow: "0px 3px 1px #1D5D9B" }}>
                            {signUp ? "Belum Punya Akun ?" : "Sudah Punya Akun ?"}
                        </h1>
                        <button className='text-white hover:bg-white transition-all duration-300 ease-in-out hover:text-blue1 shadow-[3px_3px_1px_white] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans' onClick={handleSignUp}>{signUp ? "Sign In" : "Sign Up"}</button>
                    </div>
                </motion.div>
                <motion.div
                    animate={!signUp ? "open" : "closed"}
                    variants={variants}
                    className='w-[450px] h-full absolute  bg-blue1 gap-2 p-5 px-10 flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Logo} alt="" className="" />
                        <h1 className='text-1xl font-semibold text-white '>E-Verse</h1>
                    </div>
                    <div className='flex justify-center px-20 gap-1 items-start flex-col w-full bg-white rounded-md h-full'>
                        <h1 className='text-blue1  w-full  mt-4 text-center font-semibold text-3xl font-sans' style={{ textShadow: "2px 1px 1px #FBEEAC" }}>{signUp ? "Sign Up" : "Sign In"}</h1>
                        {!signUp ? (
                            <form action="" className='flex h-max justify-start py-5 gap-2 items-start flex-col w-full '>
                                <input type="email" required placeholder='Email' className={`${style.input}`} />
                                <input type="password" required placeholder='Password' className={`${style.input} `} />
                                <input type="submit" value={"Login"} className='text-white hover:bg-cream1 transition-all duration-300 ease-in-out  shadow-[3px_3px_1px_#F4D160] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans w-full' />
                            </form>
                        ) : (
                            <div>Ini Sign Up</div>
                        )}
                        <Link className='text-blue-500 text-xs hover:underline'>Forgot Password ?</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LoginRegister