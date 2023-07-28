import PropTypes from 'prop-types'
import Universe from '../../../assets/Universe.jpg'
import { FaWhatsapp } from 'react-icons/fa'
import ScaleEffectMotion from '../../../utils/ScaleEffectMotion'

const CardStudent = ({ name, img, number }) => {

    const handleWhatsAppClick = () => {
        alert(number)
    }

    return (
        <div className='flex justify-between items-center border w-full p-2 text-white rounded-md bg-blue1'>
            <div className='flex justify-start items-center gap-2'>
                <img src={img ? img : Universe} alt={name} className='w-8 h-8 rounded-full' />
                <div className='text-base font-semibold font-sans uppercase'>{name}</div>
            </div>
            <ScaleEffectMotion>
                <div className='bg-white py-1 px-2 rounded-md text-green-500' onClick={handleWhatsAppClick}>
                    <FaWhatsapp />
                </div>
            </ScaleEffectMotion>
        </div>
    )
}


CardStudent.propTypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}


export default CardStudent