import PropTypes from 'prop-types'

export default function InputText({type, style, label, ...data }) {
    return (
        <div className='w-full'>
            <label htmlFor={label} className="text-sm font-semibold text-blue1">
                {label}
            </label>
            <input type={type} id={label} className={`${style} w-full outline-none border-2 text-sm placeholder:text-blue1 font-sans text-blue1 border-blue1 rounded-md py-1 px-2 placeholder:text-sm`} {...data}  />
        </div>
    )
}
InputText.propTypes = {
    style: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string.isRequired
}
InputText.defaultProps={
    type:"text",
}
