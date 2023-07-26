/* eslint-disable react-refresh/only-export-components */
import WithMotionWhileView from "../../utils/WithMotionWhileView";
import PropTypes from "prop-types";
import { FaQrcode, FaLocationArrow, FaCode } from "react-icons/fa";
import Button from "../Button";

const CardAttedance = ({ course, dateFrom, toDate, opsi, pengajar }) => {
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
        {opsi.map((e) => (
          <>
            {e.opsi === "GPS" && <FaLocationArrow size={20} />}
            {e.opsi === "QR Code" && <FaQrcode size={20} />}
            {e.opsi === "Token" && <FaCode size={20} />}
          </>
        ))}
      </div>
      <div className="flex justify-center w-full gap-2 items-center">
        <div className="flex text-white text-[10px] font-semibold font-sans gap-3">
          <div className="bg-blue2 rounded-md px-2">{dateFrom}</div>
          <div className="text-blue1">To</div>
          <div className="bg-blue2 rounded-md px-2">{toDate}</div>
        </div>
        <Button color={"bg-blue1"} text="Attedance" to="./#" />
      </div>
    </div>
  );
};

CardAttedance.propTypes = {
  course: PropTypes.string.isRequired,
  pengajar: PropTypes.string.isRequired,
  dateFrom: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  opsi: PropTypes.string.isRequired,
};

export default WithMotionWhileView(CardAttedance);
