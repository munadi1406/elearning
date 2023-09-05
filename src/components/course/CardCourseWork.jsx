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
import splitJudul from '../../utils/splitJudul';

const CardCourseWork = ({ id_course,course, fromDate,judul, toDate, username, deskripsi }) => {
    const [commentIsOpen, setCommentIsOpen] = useState(false);
    const handleComment = () => {
        setCommentIsOpen(!commentIsOpen)
    }
    return (
        <div className='w-full border-b-2 border-blue1 p-2 flex justify-center items-start flex-col gap-3'>
            <div className='grid md:grid-cols-2 grid-cols-1 w-full'>
                <div className='flex justify-center items-start flex-col gap-2'>
                    <Link to={`../course/${id_course}`} className='text-lg hover:underline text-blue1 font-sans font-medium'>{course} - {username}</Link>
                </div>
                <div className='flex justify-end items-center gap-2'>
                    <div className='bg-blue1 rounded-md px-2 py-1 text-white  text-xs flex justify-center items-center'>{new Date(fromDate).toLocaleString()}</div>
                    <div>-</div>
                    <div className='bg-blue1 rounded-md px-2 py-1 text-white  text-xs flex justify-center items-center'>{new Date(toDate).toLocaleString()}</div>
                </div>
            </div>
            <div className='text-white bg-gradient-to-r from-blue1 to-cream1 w-max text-xs px-2 py-1 rounded-full font-sans font-semibold '>{splitJudul(judul)}</div>
            <div className='text-blue1 text-sm w-full font-sans ml-3 border-l-2 border-blue1 p-2'>{deskripsi}</div>
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
    id_course: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    judul: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    deskripsi: PropTypes.string.isRequired,
};


export default WithMotionWhileView(CardCourseWork)