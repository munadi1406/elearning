/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../utils/WithContainerModal";
import ContainerModal from "../ContainerModal";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import PropTypes from "prop-types";
import Tugas from "./Tugas";
import { useState } from "react";
import { motion } from "framer-motion";
import DataTugas from "./DataTugas";

const ModalTugas = ({ handleClose, type }) => {
  const [optionTugas, setOptionTugas] = useState(0);
  const style = {
    optionTugas:
      "w-1/2 relative z-10 text-center rounded-md font-sans font-semibold text-sm p-2",
  };


  return (
    <ContainerModal>
      <div className="flex justify-center items-start flex-col gap-2">
        {type === 'tugas' && (
          <>
            <div className="flex justify-center items-center border-blue1 w-full">
              <div className="relative flex justify-between items-center gap-1 bg-blue1 w-[400px] py-1 px-2 rounded-md">
                <button
                  className={`${style.optionTugas} ${optionTugas === 0 ? "text-blue1 " : "text-white"
                    }`}
                  onClick={() => setOptionTugas(0)}
                >
                  Tugas
                </button>
                <button
                  className={`${style.optionTugas} ${optionTugas === 1 ? "text-blue1" : "text-white"
                    }`}
                  onClick={() => setOptionTugas(1)}
                >
                  Data Pengumpulan / Absensi
                </button>
                <motion.div
                  animate={
                    optionTugas === 0 ? { translateX: 0 } : { translateX: 194 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute w-[190px] p-2 rounded-md h-[38px] bg-white z-0"
                ></motion.div>
              </div>
            </div>
            <div className="max-h-[90vh] md:w-[800px] w-full overflow-y-auto grid md:grid-cols-3 grid-cols-2 gap-1">

              {optionTugas === 0 && (
                <Tugas />
              )}
              {optionTugas === 1 && (<DataTugas />)}
            </div>
          </>
        )}
        {type==="quis"&&(<h1>Quis</h1>)}
        <div className="w-max">
          <ScaleEffectMotion>
            <button
              className="bg-cream1 w-full p-2 rounded-md text-white font-sans font-semibold"
              onClick={handleClose}
            >
              Close
            </button>
          </ScaleEffectMotion>
        </div>
      </div>
    </ContainerModal>
  );
};
ModalTugas.propTypes = {
  handleClose: PropTypes.func.isRequired,
  type: PropTypes.func.isRequired

};
export default WithContainerModal(ModalTugas);
