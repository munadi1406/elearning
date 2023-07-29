/* eslint-disable react-refresh/only-export-components */
import WithMotionWhileView from '../../../utils/WithMotionWhileView'
import PropTypes from 'prop-types';

const CardCourseById = ({ tugas, desc, fromDate ,showModalTugas}) => {
    return (
        <div className='border-blue1 border-b-2 p-2'>
            <div className='flex justify-between items-center '>
                <div className='text-blue1 cursor-pointer font-2xl font-semibold font-sans hover:underline' onClick={showModalTugas}>{tugas}</div>
                <div className='flex justify-center items-center'>
                    <div className='text-blue1 font-sans text-xs'>{fromDate}</div>
                </div>
            </div>
            <div className='text-sm text-blue1'>{desc && desc}</div>
        </div>
    )
}


CardCourseById.propTypes = {
    tugas: PropTypes.string.isRequired,
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    showModalTugas: PropTypes.func.isRequired,
}
CardCourseById.defaultProps = {
    desc: ""
}

export default WithMotionWhileView(CardCourseById)