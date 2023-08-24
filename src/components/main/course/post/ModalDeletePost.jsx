/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../../utils/WithContainerModal";
import ContainerModal from "../../../ContainerModal";
import PropTypes from "prop-types";
import ButtonPure from "../../../ButtonPure";
import { useMutation } from "react-query";
import { useNotification } from "../../../../store/strore";
import { handleDeletePost } from "../../../../api/course";

const ModalDeletePost = ({ idPost, handleIsDelete }) => {
  const { setStatus, setStatusType, setMsgNotification } = useNotification(
    (state) => state
  );
  const { mutate,isLoading } = useMutation({
    mutationFn: async () => {
      return handleDeletePost(Number(idPost));
    },
    onSuccess: (data) => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.message);
      handleIsDelete()
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
    },
  });

  const handleDelete = ()=>{
    mutate()
  }

  return (
    <ContainerModal>
      <div className="w-full flex justify-center items-center flex-col gap-2">
        <div className="grid grid-cols-1 w-full gap-2 ">
          <div className="w-full text-center text-xl text-blue1 font-semibold">
            Apakah Anda Yakin Ingin Menghapus Postingan Ini ?
          </div>
          <div className="w-full text-center text-sm text-blue1">
            Semua Data Dan File Yang Berhubungan Dengan Postingan Ini Juga Akan
            Di Hapus
          </div>
        </div>
        <div className="flex gap-2 w-full justify-center items-center">
          <ButtonPure
            text={isLoading ? "Loading...":'Delete'}
            color={"red-500"}
            onClick={handleDelete}
            disabled={isLoading}
          />
          <ButtonPure text={"cancel"} onClick={handleIsDelete} disabled={isLoading}/>
        </div>
      </div>
    </ContainerModal>
  );
};
ModalDeletePost.propTypes = {
  idPost: PropTypes.string.isRequired,
  handleIsDelete: PropTypes.func.isRequired,
};
export default WithContainerModal(ModalDeletePost);
