import PropTypes from "prop-types";
import { downloadFileTugas } from "../../api/tugas";
import { useParams } from "react-router-dom";
import TextTruncate from '../../utils/TextTruncate'

export default function DetailTugas({
  deskripsi,
  fromDate,
  toDate,
  file,
  accept,
}) {
  const { courseId } = useParams();
  return (
    <>
      <div className="grid grid-cols-5 w-full  gap-2">
        <div className="col-span-1  text-sm font-sans font-semibold text-blue1">
          Date
        </div>
        <div className="col-span-4">
          <div className="text-sm font-sans text-blue1 flex gap-2">
            <div>: {new Date(fromDate).toLocaleString()}</div>
            <div>-</div>
            <div>{new Date(toDate).toLocaleString()}</div>
          </div>
        </div>
        <div className="col-span-1  text-sm font-sans font-semibold text-blue1">
          File
        </div>
        <div className="col-span-4">
          <div
            className="text-sm font-sans text-blue1 hover:underline cursor-pointer"
            onClick={() => downloadFileTugas(courseId, file)}
          >
            : {file}
          </div>
        </div>
        <div className="col-span-1  text-sm font-sans font-semibold text-blue1">
          Accept
        </div>
        <div className="col-span-4">
          <div className="text-sm font-sans text-blue1">: {accept}</div>
        </div>
        <div className="col-span-1  text-sm font-sans font-semibold text-blue1">
          Deskripsi
        </div>
        <div className="col-span-4">
          <div className="text-sm font-sans text-blue1 flex gap-1">: <TextTruncate text={deskripsi} maxWords={100}/></div>
        </div>
      </div>
    </>
  );
}
DetailTugas.propTypes = {
  deskripsi: PropTypes.string.isRequired,
  fromDate: PropTypes.string.isRequired,
  toDate: PropTypes.string.isRequired,
  accept: PropTypes.string.isRequired,
  file: PropTypes.string.isRequired,
};
