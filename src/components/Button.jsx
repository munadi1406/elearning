import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Button({text,to,color}) {
  return (
    <Link className={`${color ? color :"bg-blue2"} py-1 min-w-[80px] text-center rounded-md text-white font-semibold font-sans hover:bg-white hover:text-blue1 transition-all duration-300 ease-in-out w-max text-lg px-2`} to={to}>{text}</Link>
  )
}

Button.propTypes ={
    text:PropTypes.string.isRequired,
    color:PropTypes.string,
    to:PropTypes.string.isRequired,
}
