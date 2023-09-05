import PropTypes from "prop-types";
import {
  FaFileArchive,
  FaFileWord,
  FaFilePowerpoint,
  FaFilePdf,
} from "react-icons/fa";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import { useMutation } from "react-query";
import { useState } from "react";
import { downloadFileSubmitTugas, insertNilai } from "../../api/tugas";
import { useNotification } from "../../store/strore";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

export default function CardStudentByAssignment({
  student,
  date,
  file,
  idTugasSubmission,
  idUsers,
  score,
}) {
  const [nilai, setNilai] = useState(0);
  const { setStatus, setStatusType, setMsgNotification } = useNotification();
  const { idTugas } = useParams();
  const style = {
    input:
      "w-2/7 py-1 flex justify-between items-center gap-2  text-sm  border-2 border-blue1 rounded-md px-2 placeholder:text-sm",
  };
  const fileExt = file.split(".");
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      return await insertNilai({ idUsers, idTugasSubmission, nilai });
    },
    onSuccess: (data) => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.data);
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
    },
  });

  const handleOpenNewWindow = ()=>{
    window.open('http://localhost:5173/#/file-view/oke', 'new_window', 'width=500,height=700')
  }

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3, ease: "linear" }}
      className="border-blue1 h-max flex justify-center  items-start flex-col gap-2 border-2 p-2 rounded-md shadow-[2px_2px_1px_#F4D160] w-full"
    >
      <div className="text-blue1 font-sans font-semibole text-lg">
        {student}
      </div>
      <div className={`text-xs font-sans text-blue1 ${date ?? "hidden"}`}>
        Submit At : {date}
      </div>
      <div
        className={`flex justify-center items-center flex-col gap-2 ${
          !file && "hidden"
        }`}
      >
        <ScaleEffectMotion>
          <div className="text-white text-xs rounded-md cursor-pointer bg-blue1 px-2 py-1 w-max flex gap-2 justify-center items-center">
            {fileExt[1] === "rar" || fileExt[0] === "zip" ? (
              <FaFileArchive />
            ) : (
              ""
            )}
            {fileExt[1] === "doc" || fileExt[1] === "docx" ? (
              <FaFileWord />
            ) : (
              ""
            )}
            {fileExt[1] === "ppt" || fileExt[1] === "pptx" ? (
              <FaFilePowerpoint />
            ) : (
              ""
            )}
            {fileExt[1] === "pdf" && <FaFilePdf />}
            <div className="w-full h-full">{file}</div>
          </div>
        </ScaleEffectMotion>
        <div className="border-l-2 p-2 border-blue1 flex flex-col gap-2">
          <div
            onClick={() => downloadFileSubmitTugas(idTugas, idUsers, file)}
            className="text-xs text-blue1 font-sans cursor-pointer hover:underline"
          >
            Download
          </div>
          <div className="text-xs text-blue1 font-sans cursor-pointer hover:underline" onClick={handleOpenNewWindow}>
            Preview
          </div>
        </div>
      </div>
      <div className={`${style.input} ${!file && "hidden"} w-full`}>
        <input
          type="number"
          placeholder="Nilai"
          defaultValue={score}
          className="border-none outline-none h-max text-blue1 w-full"
          onChange={(e) => setNilai(e.target.value)}
        />
        <ScaleEffectMotion>
          <button
            className={`bg-blue1 ${
              isLoading && "cursor-not-allowed opacity-80"
            }w-max px-2 py-1 rounded-md text-xs font-sans text-white font-semibold`}
            disabled={isLoading}
            onClick={mutate}
          >
            Nilai
          </button>
        </ScaleEffectMotion>
      </div>
    </motion.div>
  );
}

CardStudentByAssignment.propTypes = {
  student: PropTypes.string.isRequired,
  idTugasSubmission: PropTypes.number.isRequired,
  score: PropTypes.string,
  idUsers: PropTypes.number.isRequired,
  date: PropTypes.string,
  file: PropTypes.string,
};
