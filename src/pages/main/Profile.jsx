import { useState } from 'react'
import Universe from '../../assets/universe.jpg'
import ButtonPure from '../../components/ButtonPure'
import { FaImage } from 'react-icons/fa'

const Profile = () => {
  const [subMenuActive, setSubMenuActive] = useState(0)
  const [isMouseUp, setMouseUp] = useState(false);
  const style = {
    input: "w-full outline-none border-blue1 rounded-md p-2 border-2 text-sm text-blue1",
    label: "text-blue1 text-xs font-sans font-semibold",
    text: "text-white capitalize font-sans",
    submenu: "bg-blue1 p-2 text-sm font-sans font-semibold  text-white cursor-pointer shadow-[2px_2px_1px_white] "
  }

  const handleMouseUp = () => {
    setMouseUp(!isMouseUp)
    console.log("oke")
  }

  return (
    <div className='w-full  flex justify-center items-center gap-2 flex-col'>
      <div className='lg:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-2 bg-gradient-to-r from-blue1 to-cream1 rounded-md p-2'>
        <div className='flex justify-start items-center gap-2'>
          <div className='relative flex justify-center items-center '>
            <div className={`${isMouseUp ? 'absolute z-0' : 'hidden'} text-3xl text-white`}>
              <FaImage />
            </div>
            <img src={Universe} onMouseOver={handleMouseUp} onMouseLeave={handleMouseUp} alt="universe" className={`${isMouseUp && 'opacity-60'} w-32 h-32 rounded-full z-10  border-2 border-white`} />
          </div>
          <div className=''>
            <div className={`${style.text} text-3xl font-bold`}>Jamal</div>
            <div className={`${style.text} text-xs font-semibold`}>jamal@gmail.com</div>
            <div className={`${style.text} text-xs font-semibold`}>08218231318</div>
          </div>
        </div>
        <div className=' flex justify-end items-end  px-2'>
          <div className={`${style.submenu} ${subMenuActive === 0 ? 'bg-cream1' : 'bg-blue1'}`} onClick={() => setSubMenuActive(0)}>
            Account
          </div>
          <div className={`${style.submenu} ${subMenuActive === 1 ? 'bg-cream1' : 'bg-blue1'}`} onClick={() => setSubMenuActive(1)}>
            Change Password
          </div>
        </div>
      </div>
      <div className='md:w-2/3 w-full  grid grid-cols-1 gap-2'>
        {subMenuActive === 0 && (
          <>
            <div className="flex justify-center items-start flex-col w-full gap-2">
              <label
                htmlFor="username"
                className={style.label}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                defaultValue={"maksdmasdmkasd12901293"}
                className={style.input}
              />
            </div>
            <div className="flex justify-center items-start flex-col w-full gap-2">
              <label
                htmlFor="email"
                className={style.label}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                defaultValue={"mamdksadk@gmail.com"}
                className={style.input}
              />
            </div>
            <div className="flex justify-center items-start flex-col w-full gap-2">
              <label
                htmlFor="phoneNumber"
                className={style.label}
              >
                Phone Number
              </label>
              <input
                type="number"
                id="phoneNumber"
                defaultValue={"08128012801228"}
                className={style.input}
              />
            </div>
            <div className='w-full flex'>
              <ButtonPure text={"save"} />
            </div>
          </>
        )}
        {subMenuActive === 1 && (
          <>
            <div className="flex justify-center items-start flex-col w-full gap-2">
              <label
                htmlFor="password"
                className={style.label}
              >
                New Password
              </label>
              <input
                type="password"
                id="password"

                className={style.input}
              />
            </div>
            <div className="flex justify-center items-start flex-col w-full gap-2">
              <label
                htmlFor="confirmPassword"
                className={style.label}
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"

                className={style.input}
              />
            </div>
            <div className='w-full flex'>
              <ButtonPure text={"save"} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Profile