import PropTypes from "prop-types";
import Universe from "../../assets/universe.jpg";
import { FaWhatsapp } from "react-icons/fa";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";

const CardStudent = ({ name, img, number, statusMember }) => {
  const handleWhatsAppClick = () => {
    alert(number);
  };

  return (
    <div className="flex justify-between items-center w-full p-2 text-blue1 ">
      <div className="flex justify-start items-center gap-2">
        <img src={img} alt={name} className="w-8 h-8 rounded-full" />
        <div>
          <div className="text-base font-semibold font-sans capitalize">
            {name}
          </div>
          <div className="text-xs bg-blue2 text-white text-center w-max rounded-full py-1 px-2 font-semibold font-sans capitalize">
            {statusMember}
          </div>
        </div>
      </div>
      <ScaleEffectMotion>
        <div
          className="bg-green-500 py-1 px-2 rounded-md text-white"
          onClick={handleWhatsAppClick}
        >
          <FaWhatsapp />
        </div>
      </ScaleEffectMotion>
    </div>
  );
};

CardStudent.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  statusMember: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
CardStudent.defaultProps = {
  img: Universe,
};

export default CardStudent;
