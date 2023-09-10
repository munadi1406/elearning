/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../utils/WithContainerModal";
import { lazy, Suspense } from "react";
import ButtonPure from "../ButtonPure";
import ContainerModal from "../ContainerModal";
import PropTypes from "prop-types";
const TextEditor = lazy(() => import("../TextEditor"));

const ModalCreatePengumuman = ({ handleClose ,setPengumuman,mutate,isLoading}) => {
  return (
    <ContainerModal>
      <form className="md:w-[500px] w-[90vw]">
      <div className="text-blue1 font-semibold text-md w-full">Pengumuman</div>
        <Suspense fallback={<>Loading...</>}>
          <TextEditor setValueData={setPengumuman} title={"Ada Pengumuman Apa Nih ?"}/>
        </Suspense>
        <div className="flex gap-2 w-full justify-center items-center">
          <ButtonPure text={`${isLoading ? 'Loading...':'Post'}`} type={"submit"} onClick={mutate} disabled={isLoading} style={`${isLoading && 'cursor-not-allowed opacity-80'}`}/>
          <ButtonPure text={"Close"} onClick={handleClose} color={"red-500"} />
        </div>
      </form>
    </ContainerModal>
  );
};
ModalCreatePengumuman.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setPengumuman: PropTypes.func.isRequired,
  mutate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
export default WithContainerModal(ModalCreatePengumuman);
