
import ScaleEffectMotion from "../utils/ScaleEffectMotion";
import PropTypes from "prop-types";

export default function ButtonPure({text,color,style,...props}) {
  return (
    <ScaleEffectMotion>
      <button
        {...props}
        className={`bg-${color} ${style} text-sm shadow-[2px_2px_1px_#F4D160] py-1 min-w-[80px] text-center rounded-md text-white font-semibold font-sans hover:bg-white hover:text-blue1 transition-all duration-300 ease-in-out w-max  px-2 capitalize`}
      >
        {text}
      </button>
    </ScaleEffectMotion>
  );
}
ButtonPure.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  color:PropTypes.string
};
ButtonPure.defaultProps={
  color:"blue1"
}
