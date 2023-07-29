import { BsSend } from "react-icons/bs"
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion"

export default function Comments() {
  return (
    <div  className={`px-5 bg-blue1 rounded-md w-full`}>
    <div className='p-3'>
        <div className='w-max py-1 text-white font-semibold text-sm rounded-md'>Jamal</div>
        <div className='text-white text-xs '>18:00 27-07-2023</div>
        <div className='text-base font-semibold text-white'>Tugasnya terlalu gampang pak wkwkwkwkw</div>
    </div>
    <form action="" className='flex justify-center items-center w-full p-2'>
        <div className='w-full flex bg-white justify-center items-center rounded-md py-1 px-2'>
            <input type="text" className='w-full bg-transparent text-sm p-1 outline-none rounded-md' placeholder='Comment...'/>
            <ScaleEffectMotion>
                <button type='submit'  className='p-1 px-2 rounded-md bg-blue1 text-white'><BsSend /></button>
            </ScaleEffectMotion>
        </div>
    </form>
</div>
  )
}
