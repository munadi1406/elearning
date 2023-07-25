import Logo from '../../assets/logo.png'
import Universe from '../../assets/universe.jpg'
import { NavLink } from 'react-router-dom'
import { FaPlus, FaBook } from 'react-icons/fa'
import { BiHomeCircle ,BiCurrentLocation} from 'react-icons/bi'
import {SiMusicbrainz} from 'react-icons/si'

export default function Header() {

  const style = {
    navlink: "flex justify-center shadow-[2px_2px_1px_#FBEEAC] bg-blue1 hover:shadow-none transtion-all ease-in-out duration-300 active:scale-95 items-center gap-1 border-white border-2 px-2 ",
    nav1Action:'flex justify-center items-center gap-2 border rounded-md p-1 h-12 cursor-pointer active:scale-95',
    active:"bg-cream2"
  }
  return (
    <header className='flex justify-center items-center flex-col '>
      <nav className='w-full bg-blue1 p-3 flex justify-between items-center rounded-t-md'>
        <div className='flex justify-center items-center gap-2'>
          <img src={Logo} alt="" />
          <div className='text-1xl text-white font-sans font-semibold'>E-Verse</div>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <div className={`${style.nav1Action}`}>
            <FaPlus color='white' size={20} />
            <h1 className='text-sm font-sans text-white font-semibold '>Create Class</h1>
          </div>
          <div className={`${style.nav1Action}`}>
            <div className='w-max h-max border-white rounded-full border-2'>
              <img src={Universe} className='w-8 h-8 rounded-full' />
            </div>
            <h1 className='text-sm font-sans text-white font-semibold'>Fathullah Munadi</h1>
          </div>
        </div>
      </nav>
      <nav className='w-full flex rounded-t-none rounded-b-md  p-2 justify-center items-center gap-2'>
        <NavLink to={'./'} className={`${style.navlink} ${style.active}`}>
          <BiHomeCircle size={20} color='#1D5D9B'/>
          <div className='text-blue1 font-sans font-semibold text-md '>Home</div>
        </NavLink>
        <NavLink to={'./my-course'} className={`${style.navlink}`}>
          <FaBook size={20} color='white' />
          <div className='text-white font-sans font-semibold text-md '>
            My Course
          </div>
        </NavLink>
        <NavLink to={'./attedance'} className={`${style.navlink}`}>
          <BiCurrentLocation size={20} color='white' />
          <div className='text-white font-sans font-semibold text-md '>
            Attedance
          </div>
        </NavLink>
        <NavLink to={'./course-work'} className={`${style.navlink}`}>
          <SiMusicbrainz size={20} color='white' />
          <div className='text-white font-sans font-semibold text-md '>
            Coursework
          </div>
        </NavLink>
      </nav>
    </header>
  )
}
