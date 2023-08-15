import { useState ,useEffect} from "react";
import ScaleEffectMotion from "../../../../utils/ScaleEffectMotion";
import FileDropZone from "../../../FileDropzone";
import DateTimeRange from "../../../DateTimeRange";
import { posting } from "../../../../api/course";
import { useMutation } from "react-query";
import { useDataUser } from "../../../../store/auth";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types'

export default function AddAssignment({handleClose}) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [accept, setAccept] = useState("");
  const idUsers = useDataUser((state) => state.idUsers);
  const [msg,setMsg] = useState([]);
  const { courseId } = useParams();

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
      const insert = await posting({
        id_course: courseId,
        id_users: `${idUsers}`,
        typePost: "Tugas",
        deskripsi,
        accept,
        file:uploadedFiles[0],
        fromDate: dateFrom,
        toDate: dateTo,
      });
      return insert.data
    },
    onSuccess:(data)=>{
      console.log({data})
      handleClose()
    },
    onError: (error) => {
      setMsg(error.respose.data.message);
      console.log(error.response.data)
      console.log("ini error")
    },
  });

  useEffect(()=>{
    console.log({msg});
  },[msg])

  return (
    <div>
    {console.log({isLoading})}
    {msg.map((e,i)=>(
      <div key={i} className="text-xs font-sans font-semibold text-red-500">{e}</div>
    ))}
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
          <FileDropZone onFilesAdded={handleFilesAdded} />
        </div>
        <div className={`${style.input} w-full grid grid-cols-2`}>
          <DateTimeRange dateFrom={setDateFrom} dateTo={setDateTo} />
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
            <option value="Doc/Docx">Doc/Docx</option>
            <option value="ppt">Ppt/Pptx</option>
            <option value="Pdf">Pdf</option>
            <option value="rar">Rar</option>
            <option value="zip">ZIP</option>
          </select>
        </div>
        <div className="w-full">
          <ScaleEffectMotion>
            <button
              type="submit"
              disabled={isLoading}
              className={`${
                isLoading ? "opacity-50 cursor-not-allowed":''
              } bg-blue1 w-full p-2 rounded-md text-white font-sans font-semibold`}
            >
              {isLoading ? "Loading..." : "Create"}
            </button>
          </ScaleEffectMotion>
        </div>
      </form>
    </div>
  );
}
AddAssignment.propTypes ={
  handleClose:PropTypes.func.isRequired
}
