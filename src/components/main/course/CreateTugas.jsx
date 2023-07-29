/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../utils/WithContainerModal";
import ContainerModal from "../../../components/main/ContainerModal";
import PropTypes from "prop-types";
import { useState } from "react";
import { motion } from "framer-motion";
import AddTugas from "./AddTugas";
import AddQuis from "./AddQuis";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";

const CreateTugas = ({ handleClose }) => {
  const [optionTugas, setOptionTugas] = useState(0);
  const style = {
    input:
      "w-full outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
    label: "text-sm font-semibold text-blue1",
    optionTugas:
      "w-1/2 relative z-10 text-center rounded-md font-sans font-semibold text-sm p-2",
  };

  return (
    <ContainerModal>
      <div className="bg-white  rounded-md overflow-y-scroll max-h-[90vh] md:w-[700px] w-full grid grid-cols-1 gap-2">
        <div className="text-2xl font-sans font-semibold text-blue1 w-full text-center">
          Buat {optionTugas === 0 ? "Tugas" : "Quis"}
        </div>
        <div className="flex justify-center items-center border-blue1 w-full ">
          <div className="relative flex justify-between items-center gap-1 bg-blue1 w-40 py-1 px-2 rounded-md">
            <button
              className={`${style.optionTugas} ${
                optionTugas === 0 ? "text-blue1" : "text-white"
              }`}
              onClick={() => setOptionTugas(0)}
            >
              Tugas
            </button>
            <button
              className={`${style.optionTugas} ${
                optionTugas === 1 ? "text-blue1" : "text-white"
              }`}
              onClick={() => setOptionTugas(1)}
            >
              Quis
            </button>
            <motion.div
              animate={
                optionTugas === 0 ? { translateX: 0 } : { translateX: 74 }
              }
              className="absolute w-[70px] p-2 rounded-md h-[38px] bg-white z-0"
            ></motion.div>
          </div>
        </div>
        {optionTugas === 0 && <AddTugas />}
        {optionTugas === 1 && <AddQuis />}
        <ScaleEffectMotion>
          <button
            onClick={() => handleClose()}
            className="bg-cream1 w-full p-2 rounded-md text-white font-sans font-semibold"
          >
            Close
          </button>
        </ScaleEffectMotion>
      </div>
    </ContainerModal>
  );
};

CreateTugas.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default WithContainerModal(CreateTugas);
