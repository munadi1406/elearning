/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../utils/WithContainerModal";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import PropTypes from "prop-types";
import ContainerModal from "../../ContainerModal";
import { useRef } from "react";
import generateRandomCode from "../../../utils/generateRandomCode";

const AddCourse = ({ handleAddCourse }) => {
  const style = {
    boxInput: "flex justify-center items-start flex-col w-full",
    label: "text-sm font-semibold text-blue1 font-sans",
    input: "border-blue1 border outline-none w-full p-2 rounded-md text-sm",
  };
  const kodeKelasRef = useRef();

  const handleGenereteRandomCode = () => {
    try {
      kodeKelasRef.current.value = generateRandomCode()
    } catch (error) { /* empty */ }
  };

  return (
    <ContainerModal>
      <div className="text-2xl  font-sans text-blue1 font-semibold">
        Add Course
      </div>
      <form className="w-full gap-2 flex justify-center items-center flex-col  h-2/3">
        <div className={`${style.boxInput}`}>
          <label htmlFor="courseName" className={`${style.label}`}>
            Course Name
          </label>
          <input
            type="text"
            name=""
            id="courseName"
            placeholder="Course Name..."
            className={`${style.input}`}
          />
        </div>
        <div className={`${style.boxInput}`}>
          <label htmlFor="desc" className={`${style.label}`}>
            Description Course
          </label>
          <textarea
            id="desc"
            cols="30"
            rows="5"
            className={`${style.input}`}
            placeholder="Description Course..."
          ></textarea>
        </div>
        <div className={`${style.boxInput}`}>
          <label htmlFor="Academy" className={`${style.label}`}>
            Academy
          </label>
          <input
            type="text"
            name=""
            id="Academy"
            className={`${style.input}`}
            placeholder="Academy..."
          />
        </div>
        <div className={`${style.boxInput}`}>
          <label htmlFor="Academy" className={`${style.label}`}>
            Kode Kelas
          </label>
          <input
            type="text"
            name=""
            id="Academy"
            className={`${style.input}`}
            placeholder="Kode Kelas..."
            ref={kodeKelasRef}
          />
          <div
            className="text-xs fons-sans font-semibold text-blue1 hover:underline cursor-pointer"
            onClick={handleGenereteRandomCode}
          >
            Generate Random Code ?
          </div>
        </div>
        <div className="w-full grid grid-rows-2 gap-2">
          <ScaleEffectMotion>
            <input
              type="submit"
              value={"Create Course"}
              className="bg-blue1 rounded-md p-2 cursor-pointer text-white font-sans font-semibold w-full"
            />
          </ScaleEffectMotion>
          <ScaleEffectMotion>
            <input
              type="reset"
              className="bg-cream1 rounded-md p-2 cursor-pointer text-white font-sans font-semibold w-full"
              onClick={handleAddCourse}
              value={"Close"}
            />
          </ScaleEffectMotion>
        </div>
      </form>
    </ContainerModal>
  );
};
AddCourse.propTypes = {
  handleAddCourse: PropTypes.func.isRequired,
};
export default WithContainerModal(AddCourse);
