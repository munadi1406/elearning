import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import {
  FaFilePdf,
  FaFileWord,
  FaFilePowerpoint,
  FaArrowAltCircleDown,
  FaFileArchive,
} from "react-icons/fa";

export default function FileDropZone({ onFilesAdded }) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
      "image/*":[],
      "application/x-zip-compressed": [],
      "application/x-rar-compressed": [],
      "application/vnd.rar": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.ms-powerpoint": [],
      "application/vnd.openxmlformats-officedocument.presentationml.presentation":
        [],
    },
    maxSize: 5242880,
    onDropAccepted: (file) => {
      onFilesAdded(file);
    },
  });
  const getFileExtension = (filename) => {
    return filename.split(".").pop();
  };
  const Files = () => {
    return acceptedFiles.map((file) => (
      <li
        key={file.path}
        className=" flex overflow-clip gap-2 justify-start items-center text-sm font-sans font-semibold text-blue1 p-2 rounded-md w-full"
      >
        <span className="text-base">
          {(getFileExtension(file.name) === "docx" ||
            getFileExtension(file.name) === "doc") && <FaFileWord />}
          {(getFileExtension(file.name) === "ppt" ||
            getFileExtension(file.name) === "pptx") && <FaFilePowerpoint />}
          {getFileExtension(file.name) === "pdf" && <FaFilePdf />}
          {getFileExtension(file.name) === "zip" && <FaFileArchive />}
        </span>
        <div className=" whitespace-pre-wrap flex-grow">
          {file.path} - {Math.round((file.size / (1024 * 1024)) * 100) / 100} MB
        </div>
      </li>
    ));
  };
  return (
    <div className="w-full">
      <div
        {...getRootProps({
          className: `border-dashed rounded-md h-44 flex justify-center items-center border-blue1 border-2 ${
            isDragAccept && "border-green-500"
          } ${isDragReject && "border-red-500"}`,
        })}
      >
        <input {...getInputProps()} />
        <p className="text-blue1 px-2 font-sans text-center animate-bounce flex justify-center items-center flex-col gap-2">
          Drag and drop some files here, or click to select files
          <FaArrowAltCircleDown />
        </p>
      </div>
      <aside>
        <h4 className="text-blue1 text-sm font-sans border-">Files</h4>
        <ul>
          <Files />
        </ul>
      </aside>
    </div>
  );
}
FileDropZone.propTypes = {
  onFilesAdded: PropTypes.func.isRequired,
};
