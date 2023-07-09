import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Button({button,to}) {
  return (
    <Link className="btn btn-primary " to={to}>{button}</Link>
  )
}

Button.propTypes ={
    button:PropTypes.string.isRequired,
    to:PropTypes.string.isRequired,
}
