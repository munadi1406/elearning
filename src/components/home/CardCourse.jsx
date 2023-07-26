/* eslint-disable react-refresh/only-export-components */
import PropTypes from 'prop-types'
import WithMotionWhileView from "../../utils/WithMotionWhileView";
import Button from '../Button';
import TextTruncate from '../../utils/TextTruncate';

const CardCourse = ({ course, desc, pengajar }) => {
    return (
        <div className='border-blue1  border-2 p-2 rounded-md h-full text-blue1 shadow-[2px_2px_1px_#F4D160] flex justify-start items-start gap-2 flex-col'>
            <div className='flex w-full justify-start items-start flex-col gap-2 '>
                <div className='text-xl font-sans font-semibold '>{course}</div>
                <div className='text-xs font-sans font-semibold rounded-full bg-cream1 px-2'>{pengajar}</div>
            </div>
            <div className='w-full text-xs'><TextTruncate text={desc} maxWords={10}/></div>
            <Button text='Go To Course' color={"bg-blue2"} to='#'/>
        </div>
    )
}

CardCourse.propTypes = {
    course: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    pengajar: PropTypes.string.isRequired
}
export default WithMotionWhileView(CardCourse)