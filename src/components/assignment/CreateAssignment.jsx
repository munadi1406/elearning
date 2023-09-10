import { useState, lazy, Suspense } from "react";
import { posting } from "../../api/course";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useNotification } from "../../store/strore";
import ButtonPure from "../ButtonPure";
const FileDropZone = lazy(() => import("../FileDropzone"));
const DateTimeRange = lazy(() => import("../DateTimeRange"));
const TextEditor = lazy(() => import("../TextEditor"));
import {
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaFileArchive,
  FaCompress,
} from "react-icons/fa";

export default function CreateAssignment({ handleClose }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [accept, setAccept] = useState("");
  const [msg, setMsg] = useState([]);
  const { courseId } = useParams();
  const { setStatus, setMsgNotification, setStatusType } = useNotification();

  const handleFilesAdded = (files) => {
    setUploadedFiles(files);
  };

  const style = {
    input:
      "w-full outline-none border-2 border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
    label: "text-sm font-semibold text-blue1",
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      const data = await posting({
        idCourse: courseId,
        deskripsi,
        accept,
        file: uploadedFiles[0],
        fromDate: dateFrom,
        toDate: dateTo,
      });
      return data;
    },
    onSuccess: () => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification("Tugas Berhasil Di Posting");
      handleClose();
    },
    onError: (error) => {
      setMsg(error.response.data.message);
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message[0]);
    },
  });

  return (
    <div>
      <div className="text-red-500 text-xs w-full text-center">{msg[0]}</div>
      <form
        action=""
        className="flex justify-center items-center flex-col w-full gap-5"
        onSubmit={mutate}
      >
        <div className="w-full">
          <label htmlFor="desc" className={`${style.label}`}>
            Deskripsi
          </label>
          <TextEditor
            setValueData={setDeskripsi}
            pleaceholder={"Ada Tugas Apa Nih ?"}
          />
        </div>
        <div className="w-full flex justify-center items-start flex-col gap-2">
          <label htmlFor="descFile" className={`${style.label}`}>
            File pdf/doc/docx/ppt/pptx (Is Optional)
          </label>
          <Suspense fallback={<>Loading...</>}>
            <FileDropZone onFilesAdded={handleFilesAdded} />
          </Suspense>
        </div>
        <div className={`px-2 py-1 w-full`}>
          <div className={style.label}>Date Range</div>
          <Suspense fallback={<>Loading...</>}>
            <DateTimeRange dateFrom={setDateFrom} dateTo={setDateTo} />
          </Suspense>
        </div>
        <div className="w-full">
          <label htmlFor="accept" className={`${style.label}`}>
            Accept
          </label>
          <div className="grid grid-cols-5 gap-2 p-2">
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "pdf" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2  flex flex-col justify-center items-center`}
              onClick={() => setAccept("pdf")}
            >
              <FaFilePdf />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Pdf
              </div>
            </div>
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "doc" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2  flex flex-col justify-center items-center`}
              onClick={() => setAccept("doc")}
            >
              <FaFileWord />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Word (doc)
              </div>
            </div>
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "docx" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2 flex flex-col justify-center items-center`}
              onClick={() => setAccept("docx")}
            >
              <FaFileWord />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Word (docx)
              </div>
            </div>
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "ppt" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2  flex flex-col justify-center items-center`}
              onClick={() => setAccept("ppt")}
            >
              <FaFilePowerpoint />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Power Point (ppt)
              </div>
            </div>
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "pptx" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2 flex flex-col justify-center items-center`}
              onClick={() => setAccept("pptx")}
            >
              <FaFilePowerpoint />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Power Point (pptx)
              </div>
            </div>
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "rar" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2 flex flex-col justify-center items-center`}
              onClick={() => setAccept("rar")}
            >
              <FaFileArchive />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Rar
              </div>
            </div>
            <div
              className={`w-full cursor-pointer  border-2 ${
                accept === "zip" ? "bg-blue1 text-white" : "bg-none text-blue1"
              } border-blue1 p-2  flex flex-col justify-center items-center`}
              onClick={() => setAccept("zip")}
            >
              <FaCompress />
              <div className="w-full text-xs font-sans font-semibold text-center">
                Zip
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <ButtonPure
            text={isLoading ? "Loading..." : "Create"}
            type="submit"
            disabled={isLoading}
            style={`${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          />
        </div>
      </form>
    </div>
  );
}
CreateAssignment.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
