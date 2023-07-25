import Universe from '../assets/universe.jpg'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const LoginRegister = () => {
    const [signUp, setSignUp] = useState(false);
    const [signIn, setSignIn] = useState(0)
    const [qouteNumber, setQouteNumber] = useState(1);

    const qoutes = {
        quote1: "Ngoding Aja Dulu Jagonya Belakangan",
        quote2: "Inovasi memisahkan pemimpin dari pengikut.",
        quote3: "Teknologi ubah hidup manusia secara mendalam.",
        quote4: "Kreativitas mengalahkan kesempurnaan, lampaui batas diri.",
        quote5: "Mimpi besar menggerakkan kemajuan teknologi masa depan.",
        quote6: "Ciptakan hari esok dengan teknologi hari ini.",
        quote7: "Imajinasi menginspirasi inovasi tanpa batas waktu.",
        quote8: "Teknologi sebagai alat, manusia yang menentukan arahnya.",
        quote9: "Ketekunan adalah kunci keberhasilan dalam teknologi.",
        quote10: "Sederhana, kuat, dan revolusioner - teknologi hebat.",
        quote11: "Tantangan memunculkan kreativitas dan inovasi yang tak terduga."
    }

    const randomNumber = () => {
        const randomMath = Math.random();
        setQouteNumber(Math.floor(randomMath * 11 + 1));

    }

    const style = {
        input: "w-full rounded-md bg-slate-200 outline-none border-none h-10 px-2 placeholder:italic text-sm",
        button: "text-white active:scale-95 hover:bg-cream1 transition-all duration-300 ease-in-out  shadow-[3px_3px_1px_#F4D160] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans w-full"
    }

    const handleSignUp = () => {
        setSignUp(!signUp)
        randomNumber()
    }



    return (
        <div className="w-full min-h-screen py-2 flex justify-center items-center md:px-10 px-2">
            <div className="w-4/5   h-max grid lg:grid-cols-2 grid-cols-1 items-center bg-gray-500 rounded-md overflow-hidden relative">
                <motion.div
                    initial={{ translateX: -100 }}
                    animate={{ translateX: 0 }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className='h-[450px]  relative  bg-blue1 gap-2 p-5 px-10 flex justify-center items-center flex-col'
                >
                    <img src={Universe} className='grayscale absolute w-full h-full z-0 top-0 left-0  object-cover' alt="Universe" />
                    <div className=' relative px-2 gap-2 z-10 w-full flex justify-center items-start flex-col h-max'>
                        <div className='w-full h-max overflow-clip'>
                            <motion.div
                                key={qouteNumber}
                                initial={{ translateY: -200 }}
                                animate={{ translateY: 0 }}
                                transition={{ duration: 0.4,ease:"easeInOut"}}
                                className='text-3xl  font-semibold text-white font-sans '
                                style={{ textShadow: "0px 3px 1px #1D5D9B" }}
                            >
                                {qoutes[`quote${qouteNumber}`]}
                            </motion.div>
                        </div>
                        <h1 className='text-1xl  font-semibold text-white font-sans ' style={{ textShadow: "0px 3px 1px #1D5D9B" }}>
                            {signUp ? "Belum Punya Akun ?" : "Sudah Punya Akun ?"}
                        </h1>
                        <button className='text-white hover:bg-white transition-all duration-300 ease-in-out hover:text-blue1 shadow-[3px_3px_1px_white] hover:shadow-none bg-blue1 p-2 rounded-md font-semibold font-sans' onClick={handleSignUp}>{signUp ? "Sign In" : "Sign Up"}</button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ translateX: 100 }}
                    animate={{ translateX: 0 }}
                    transition={{ ease: "linear", duration: 0.3 }}
                    className=' h-[450px] relative  bg-blue1 gap-2 p-5 px-10 flex justify-center items-center flex-col'>
                    <div className='flex justify-center items-center gap-2'>
                        <img src={Logo} alt="" className="" />
                        <h1 className='text-1xl font-semibold text-white '>E-Verse</h1>
                    </div>
                    <div className='flex justify-center lg:px-10 px-5 gap-1 items-center flex-col w-full bg-white rounded-md h-full overflow-clip'>
                        <h1 className='text-blue1  w-full  mt-4 text-center font-semibold text-3xl font-sans' style={{ textShadow: "2px 1px 1px #FBEEAC" }}>{signUp ? "Sign Up" : "Sign In"}</h1>
                        {!signUp ? (
                            <motion.div
                                className='w-full'
                                initial={{ opacity: 0, translateX: -200, }}
                                animate={{ opacity: 1, translateX: 0, }}
                                transition={{ duration: 0.4,ease:"easeInOut"}}
                                >
                                <form
                                    action=""
                                    className='flex h-max justify-start py-5 gap-2 items-start flex-col w-full '
                                >
                                    <input type="email" required placeholder='Email' className={`${style.input}`} />
                                    <input type="password" required placeholder='Password' className={`${style.input} `} />
                                    <input type="submit" value={"Login"} className={`${style.button}`} />
                                </form>
                            </motion.div>
                        ) : (
                            <motion.form
                                initial={{ opacity: 0, translateX: -200, }}
                                whileInView={{ opacity: 1, translateX: 0, }}
                                transition={{ duration: 0.4,ease:"easeInOut"}}
                                action=""
                                className='  flex h-max justify-start py-5 gap-2 items-start flex-col w-full '
                            >
                                {signIn == 0 && (
                                    <>
                                        <input type="text" required placeholder='Fisrt Name' className={`${style.input}`} />
                                        <input type="text" required placeholder='Last Name' className={`${style.input} `} />
                                    </>
                                )}
                                {signIn == 1 && (
                                    <>
                                        <input type="email" required placeholder='Email' className={`${style.input}`} />
                                        <input type="number" required placeholder='Phone Number' className={`${style.input} `} />
                                    </>
                                )}
                                {signIn == 2 && (
                                    <>
                                        <input type="password" required placeholder='Password' className={`${style.input}`} />
                                        <input type="password" required placeholder='Confirm Password' className={`${style.input} `} />
                                        <input type="submit" value={"Sign In"} className={`${style.button} `} />
                                    </>
                                )}
                                <div className={`grid ${signIn == 2 ? 'grid-cols-1' : 'grid-cols-2'} w-full gap-2`}>
                                    <input type="button" value={"Next"} onClick={() => setSignIn(signIn + 1)} className={`${style.button} ${signIn == 2 && 'hidden'}`} disabled={signIn == 2} />
                                    <input type="button" value={"Back"} onClick={() => setSignIn(signIn - 1)} className={`${style.button} ${signIn == 0 && 'disabled:opacity-70'}`} disabled={signIn == 0} />
                                </div>
                            </motion.form>
                        )}
                        <Link className='text-blue-500 text-xs hover:underline'>Forgot Password ?</Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LoginRegister