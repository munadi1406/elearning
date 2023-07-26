/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../utils/WithContainerModal";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const AddCourse = ({ handleAddCourse }) => {
  const style = {
    boxInput: "flex justify-center items-start flex-col w-full",
    label: "text-sm font-semibold text-blue1 font-sans",
    input: "border-blue1 border outline-none w-full p-2 rounded-md text-sm",
  };

  return (
    <motion.div
      initial={{ opaticy: 0, scale: 0.9 }}
      animate={{ opaticy: 1, scale: 1 }}
      exit={{ scale: 0, opaticy: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-blue1/70 p-3 rounded-md flex justify-center 
        items-center relative w-96 h-max flex-col"
    >
      <div className="w-full h-full rounded-md gap-2 bg-white flex justify-evenly items-center flex-col p-2">
        <div className="text-2xl font-sans text-blue1 font-semibold">
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
              className={`${style.input}`}
            />
          </div>
          <div className={`${style.boxInput}`}>
            <label htmlFor="desc" className={`${style.label}`}>
              Description Course
            </label>
            <input type="text" name="" id="desc" className={`${style.input}`} />
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
            />
          </div>
          <div className="w-full grid grid-rows-2 gap-2">
            <ScaleEffectMotion>
              <input
                type="submit"
                value={"Create Course"}
                className="bg-blue1 rounded-md p-2 text-white font-sans font-semibold w-full"
              />
            </ScaleEffectMotion>
            <ScaleEffectMotion>
              <button
                className="bg-cream1 rounded-md p-2 text-white font-sans font-semibold w-full"
                onClick={handleAddCourse}
              >
                Close
              </button>
            </ScaleEffectMotion>
          </div>
        </form>
      </div>
    </motion.div>
  );
};
AddCourse.propTypes = {
  handleAddCourse: PropTypes.func.isRequired,
};
export default WithContainerModal(AddCourse);
