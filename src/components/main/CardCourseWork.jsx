/* eslint-disable react-refresh/only-export-components */
import { Link } from 'react-router-dom';
import WithMotionWhileView from '../../utils/WithMotionWhileView';
import PropTypes from 'prop-types'
import Button from '../Button';
import { FaComment} from 'react-icons/fa'
import {BsSend} from 'react-icons/bs'
import { useState } from 'react';
import ScaleEffectMotion from '../../utils/ScaleEffectMotion';
import { motion } from 'framer-motion';

const CardCourseWork = ({ course, fromDate, toDate, pengajar, desc }) => {
    const [commentIsOpen, setCommentIsOpen] = useState(false);

    const handleComment = () => {
        setCommentIsOpen(!commentIsOpen)
    }

    return (
        <div className='w-full border-b-2 border-blue1 p-2 flex justify-center items-start flex-col gap-3'>
            <div className='grid grid-cols-2 w-full'>
                <div className='flex justify-center items-start flex-col gap-2'>
                    <Link to={'./#'} className='text-2xl hover:underline text-blue1 font-sans font-semibold'>{course} - {pengajar}</Link>
                </div>
                <div className='flex justify-end items-content gap-2'>
                    <div className='bg-blue1 rounded-md px-2 text-white font-semibold text-sm flex justify-center items-center'>{fromDate}</div>
                    <div>/</div>
                    <div className='bg-blue1 rounded-md px-2 text-white font-semibold text-sm flex justify-center items-center'>{toDate}</div>
                </div>
            </div>
            <div className='text-blue1 text-sm w-full font-sans'>{desc}</div>
            <div className='flex justify-start items-center gap-2'>
                <ScaleEffectMotion>
                    <div className='bg-blue1 p-2 rounded-md cursor-pointer' onClick={handleComment}>
                        <FaComment className='text-white' />
                    </div>
                </ScaleEffectMotion>
                <Button text='Open' color={'bg-blue1'} to={`../course/${2}`} />
            </div>
            
            <motion.div initial={{height:0}}  animate={commentIsOpen && {height:"max-content"}} exit={{height:0}} className={`${commentIsOpen ? 'block' : 'hidden'} px-5 bg-blue1 rounded-md w-full`}>
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
            </motion.div>
        </div>
    )
}
CardCourseWork.propTypes = {
    course: PropTypes.string.isRequired,
    pengajar: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    desc: PropTypes.array.isRequired,
};


export default WithMotionWhileView(CardCourseWork)