import PropTypes from 'prop-types'
import Universe from '../../../assets/universe.jpg'
import ScaleEffectMotion from '../../../utils/ScaleEffectMotion'
import { useState } from 'react'
import ModalDeleteCourse from './ModalDeleteCourse'

export default function Setting({ course, img }) {
    const [isDelete, setIsDelete] = useState(false);

    const handleIsDelete = () => {
        setIsDelete(!isDelete)
    }

    return (
        <>
            {isDelete &&
                <ModalDeleteCourse handleIsDelete={handleIsDelete} course={course}/>
            }
            <div className='w-full flex justify-center items-center flex-col gap-3'>
                <div className='flex justify-center items-start flex-col w-full gap-2'>
                    <label htmlFor="courseName" className='text-blue1 text-lg font-sans font-semibold'>Course Name</label>
                    <input type="text" id="courseName" defaultValue={course} className='w-full outline-none border-blue1 rounded-md p-2 border text-sm text-blue1' />
                </div>
                <div className='w-full flex justify-center items-start flex-col gap-2'>
                    <img src={img} alt="course" className='w-10 h-10 rounded-full' />
                    <input type="file" className='w-full outline-none border-blue1 rounded-md p-2 border' />
                </div>
                <div className='flex justify-center items-start flex-col w-full  gap-2'>
                    <div className='text-blue1 font-sans font-semibold text-lg'>Delete This Course</div>
                    <ScaleEffectMotion>
                        <button className='bg-blue1 rounded-md p-2 text-white font-sans font-semibold ' onClick={handleIsDelete}>Delete course</button>
                    </ScaleEffectMotion>
                </div>
            </div>
        </>
    )
}

Setting.propTypes = {
    course: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

Setting.defaultProps = {
    img: Universe
}


