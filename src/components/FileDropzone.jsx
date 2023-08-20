import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { FaFilePdf, FaFileWord, FaFilePowerpoint,FaArrowAltCircleDown } from "react-icons/fa";

export default function FileDropZone({ onFilesAdded }) {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: {
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
  const Files = () => {
    return acceptedFiles.map((file) => (
      <li
        key={file.path}
        className="bg-blue1 flex gap-2 justify-center items-center text-xs font-sans font-semibold text-white p-1 rounded-md w-max"
      >
        {file.type === "application/vnd.ms-powerpoint" ||
          (file.type ===
            "application/vnd.openxmlformats-officedocument.presentationml.presentation" && (
            <FaFilePowerpoint />
          ))}
        {file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document" && (
          <FaFileWord />
        )}
        {file.type === "application/pdf" && <FaFilePdf />}
        {file.path} - {Math.round((file.size / (1024 * 1024)) * 100) / 100} MB
      </li>
    ));
  };
  return (
    <div className="w-full">
      <div
        {...getRootProps({
          className: `border-dashed h-44 flex justify-center items-center border-blue1 border-2 ${
            isDragAccept && "border-green-500"
          } ${isDragReject && "border-red-500"}`,
        })}
      >
        <input {...getInputProps()} />
        <p className="text-blue1 font-sans  animate-bounce flex justify-center items-center flex-col gap-2">
          Drag and drop some files here, or click to select files
          <FaArrowAltCircleDown/>
        </p>
      </div>
      <aside>
        <h4>Files</h4>
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
