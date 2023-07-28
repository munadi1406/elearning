import {motion} from 'framer-motion'
import PropTypes from 'prop-types'

export default function ScaleEffectMotion({children}) {
  return (
    <motion.div whileTap={{scale:0.9}} className='cursor-pointer'>
      {children}
    </motion.div>
  )
}

ScaleEffectMotion.propTypes = {
    children:PropTypes.element.isRequired
}
