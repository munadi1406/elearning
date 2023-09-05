import PropTypes from 'prop-types'

export default function TextArea({ style,wrapperStyle, label, row, ...data }) {
    return (
        <div className={`w-full ${wrapperStyle}`}>
            <label htmlFor={label} className="text-sm font-semibold text-blue1">
                {label}
            </label>
            <textarea id={label} rows={row} className={`${style} w-full outline-none border-2 text-sm placeholder:text-blue1 font-sans text-blue1 border-blue1 rounded-md py-1 px-2 placeholder:text-sm`} {...data} >

            </textarea>
        </div>
    )
}
TextArea.propTypes = {
    style: PropTypes.string,
    wrapperStyle: PropTypes.string,
    label: PropTypes.string.isRequired,
    row:PropTypes.number
}
TextArea.defaultProps={
    row:2,
}
