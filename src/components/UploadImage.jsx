/* eslint-disable react-refresh/only-export-components */
import ContainerModal from "./ContainerModal";
import WithContainerModal from "../utils/WithContainerModal";
import { useState } from "react";
import FileDropZoneForImage from "./FileDropZoneForImage";
import ButtonPure from "./ButtonPure";
import { useMutation } from "react-query";
import { handleUploadImage } from "../api/users";
import PropTypes from "prop-types";
import { useNotification } from "../store/strore";

const UploadImage = ({ handleClose }) => {
  const { setStatus, setStatusType, setMsgNotification } = useNotification(
    (state) => state
  );
  const [file, setFile] = useState([]);
  const { mutate, isLoading } = useMutation({
    mutationFn: async () => {
      return await handleUploadImage(file[0]);
    },
    onSuccess: (data) => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.message);
      setFile([]);
      handleClose(false); //false artinya di tutup
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
    },
  });
  return (
    <ContainerModal>
      <div className="max-h-[90vh] overflow-y-auto w-full p-2 grid grid-cols-1">
        <div className="w-full text-center font-semibold text-blue1 text-xl p-2">
          Upload Image
        </div>
        <FileDropZoneForImage onFilesAdded={setFile} />
        <div className="w-full flex p-2 gap-2">
          <ButtonPure
            text={isLoading ? "Loading..." : "Save"}
            onClick={mutate}
            disabled={isLoading || !file[0]}
            style={`${
              isLoading || !file[0] ? "opacity-80 cursor-not-allowed" : ""
            }`}
          />
          <ButtonPure
            text={"Cancel"}
            color={"red-500"}
            onClick={() => handleClose(false)}
          />
        </div>
      </div>
    </ContainerModal>
  );
};
UploadImage.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default WithContainerModal(UploadImage);
