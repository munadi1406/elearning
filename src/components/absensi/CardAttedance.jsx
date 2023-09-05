/* eslint-disable react-refresh/only-export-components */
import WithMotionWhileView from "../../utils/WithMotionWhileView";
import PropTypes from "prop-types";
import { FaQrcode, FaLocationArrow, FaCode } from "react-icons/fa";
import ButtonPure from "../ButtonPure";

const CardAttedance = ({ course, dateFrom, toDate, opsi, pengajar,handleOpenModal }) => {
  return (
    <div className="border-blue1  border-2 p-2 rounded-md h-full text-blue1 shadow-[2px_2px_1px_#F4D160] flex justify-start items-start gap-3 flex-col">
      <div className="flex flex-wrap justify-between items-center w-full">
        <div className="w-max text-lg font-sans font-semibold hover:underline cursor-pointer">{course}</div>
        <div className="w-max text-xs bg-cream1 rounded-md font-sans text-white font-semibold px-2">
          {pengajar}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
        <div className="text-xs font-semibold font-sans">
          Attedance Option :{" "}
        </div>
        {opsi.map((e,i) => (
          <div key={i}>
            {e.opsi === "GPS" && <FaLocationArrow size={20} />}
            {e.opsi === "QR Code" && <FaQrcode size={20} />}
            {e.opsi === "Token" && <FaCode size={20} />}
          </div>
        ))}
      </div>
      <div className="flex justify-between w-full gap-2 items-center">
        <div className="flex text-white text-[10px] font-semibold font-sans gap-3">
          <div className="bg-blue2 rounded-md px-2">{dateFrom}</div>
          <div className="text-blue1">To</div>
          <div className="bg-blue2 rounded-md px-2">{toDate}</div>
        </div>
        <ButtonPure onClick={handleOpenModal} text={'check-in'} />
      </div>
    </div>
  );
};

CardAttedance.propTypes = {
  course: PropTypes.string.isRequired,
  pengajar: PropTypes.string.isRequired,
  dateFrom: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  opsi: PropTypes.array.isRequired,
  handleOpenModal:PropTypes.func.isRequired
};

export default WithMotionWhileView(CardAttedance);
