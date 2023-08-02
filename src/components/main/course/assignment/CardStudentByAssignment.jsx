import PropTypes from "prop-types";
import { FaFile } from "react-icons/fa";
import ScaleEffectMotion from "../../../../utils/ScaleEffectMotion";

export default function CardStudentByAssignment({ student, date, file }) {
  const style = {
    input:
      "w-2/7 py-1 flex justify-between items-center gap-2  text-sm  border-2 border-blue1 rounded-md px-2 placeholder:text-sm",
  };

  return (
    <div className="border-blue1 h-max flex justify-center  items-start flex-col gap-2 border-2 p-2 rounded-md shadow-[2px_2px_1px_#F4D160] w-full">
      <div className="text-blue1 font-sans font-semibole text-lg">
        {student}
      </div>
      <div className={`text-xs font-sans text-blue1 ${date ?? 'hidden'}`}>{date}</div>
      <div className={`flex justify-center items-center gap-2 ${!file && 'hidden'}`}>
        <ScaleEffectMotion>
          <div className="text-white text-xs rounded-md cursor-pointer bg-blue1 px-2 py-1 w-max flex gap-2 justify-center items-center">
            <FaFile />
            <div className="w-full h-full">{file}</div>
          </div>
        </ScaleEffectMotion>
      </div>
      <div className={`${style.input} ${!file && 'hidden'}`}>
        <input type="number" placeholder="Nilai" className="border-none outline-none h-max" />
        <ScaleEffectMotion>
          <button className="bg-blue1  w-max px-2 py-1 rounded-md text-xs font-sans text-white font-semibold">Nilai</button>
        </ScaleEffectMotion>
      </div>
    </div>
  );
}

CardStudentByAssignment.propTypes = {
  student: PropTypes.string.isRequired,
  date: PropTypes.string,
  file: PropTypes.string,
};



