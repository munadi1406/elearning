import { useState, lazy, Suspense } from "react";
import { posting } from "../../api/course";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useNotification } from "../../store/strore";
import ButtonPure from "../ButtonPure";
const FileDropZone = lazy(() => import("../FileDropzone"));
const DateTimeRange = lazy(()=>import( "../DateTimeRange"));

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
            Desc
          </label>
          <textarea
            id="desc"
            cols="30"
            rows="5"
            className={`${style.input}`}
            placeholder="Desc..."
            required
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          ></textarea>
        </div>
        <div className="w-full flex justify-center items-start flex-col gap-2">
          <label htmlFor="descFile" className={`${style.label}`}>
            File pdf/doc/docx/ppt/pptx (Is Optional)
          </label>
          <Suspense fallback={<>Loading...</>}>
            <FileDropZone onFilesAdded={handleFilesAdded} />
            </Suspense>
        </div>
        <div className={`${style.input} w-full`}>
          <Suspense fallback={<>Loading...</>}>
          <DateTimeRange dateFrom={setDateFrom} dateTo={setDateTo} />
          </Suspense>
        </div>
        <div className="w-full">
          <label htmlFor="accept" className={`${style.label}`}>
            Accept
          </label>
          <select
            id="accept"
            className={`${style.input}`}
            onChange={(e) => setAccept(e.target.value)}
          >
            <option hidden>Pilih Type File Yang Diminta...</option>
            <option value="doc">Doc</option>
            <option value="docx">DocX</option>
            <option value="ppt">Ppt</option>
            <option value="pptx">Pptx</option>
            <option value="pdf">Pdf</option>
            <option value="rar">Rar</option>
            <option value="zip">ZIP</option>
          </select>
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
