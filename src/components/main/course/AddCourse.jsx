/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../utils/WithContainerModal";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import PropTypes from "prop-types";
import ContainerModal from "../../ContainerModal";
import { useReducer } from "react";
import generateRandomCode from "../../../utils/generateRandomCode";
import { createCourse } from "../../../api/course";
import { useMutation } from "react-query";
import { useDataUser } from "../../../store/auth";
import { useState } from "react";

const AddCourse = ({ handleAddCourse }) => {
  const [msg, setMsg] = useState([]);
  const style = {
    boxInput: "flex justify-center items-start flex-col w-full",
    label: "text-sm font-semibold text-blue1 font-sans",
    input: "border-blue1 border outline-none w-full p-2 rounded-md text-sm",
  };
  const idUsers = useDataUser((state) => state.idUsers);

  const handleGenereteRandomCode = () => {
    try {
      const code = generateRandomCode();
      dispacth({ type: "course_code", course_code: code });
    } catch (error) {
      /* empty */
    }
  };

  const initialState = {
    id_users: String(idUsers),
    course: "",
    desc_course: "",
    academy: "",
    course_code: "",
  };

  const reducer = (state, action) => {
    console.log(state);
    console.log({ action });
    if (action.type === "course") {
      return { ...state, course: action.course };
    } else if (action.type === "desc_course") {
      return { ...state, desc_course: action.desc_course };
    } else if (action.type === "academy") {
      return { ...state, academy: action.academy };
    } else {
      return { ...state, course_code: action.course_code };
    }
  };

  const [state, dispacth] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log({ name });
    console.log({ value });
    dispacth({
      type: `${name}`,
      course: value,
      desc_course: value,
      academy: value,
      course_code: value,
    });
  };

  const { mutate, isLoading, error } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      console.log(state);
      const data = await createCourse(state);
      return data;
    },
    onSuccess: () => {
      handleAddCourse();
    },
    onError: (error) => {
      console.log(error.response.data);
      const checkType = typeof msg;

      const newMsg =
        checkType === "string" ? [msg] : msg;
      setMsg(newMsg);
    },
  });

  return (
    <ContainerModal>
      <div className="overflow-y-auto w-full h-[90vh]flex flex-col justify-center items-start gap-1">
        <div className="text-2xl  font-sans text-blue1 font-semibold w-full text-center">
          Add Course
        </div>
        <form
          className="w-full gap-2 flex justify-center items-center flex-col  h-2/3"
          onSubmit={mutate}
        >
          <div className="w-full flex justify-center items-center flex-col">
          {console.log(msg)}
            {error &&
              msg.map((e, i) => (
                <p key={i} className="text-red-500 text-xs font-sans">
                  {e}
                </p>
              ))}
          </div>
          <div className={`${style.boxInput}`}>
            <label htmlFor="course" className={`${style.label}`}>
              Course Name
            </label>
            <input
              type="text"
              name="course"
              id="course"
              onChange={handleChange}
              placeholder="Course Name..."
              value={state.course}
              className={`${style.input}`}
            />
          </div>
          <div className={`${style.boxInput}`}>
            <label htmlFor="desc" className={`${style.label}`}>
              Description Course
            </label>
            <textarea
              id="desc"
              onChange={handleChange}
              cols="30"
              rows="5"
              name="desc_course"
              className={`${style.input}`}
              placeholder="Description Course..."
              value={state.desc_course}
            ></textarea>
          </div>
          <div className={`${style.boxInput}`}>
            <label htmlFor="academy" className={`${style.label}`}>
              academy
            </label>
            <input
              type="text"
              name="academy"
              onChange={handleChange}
              id="academy"
              className={`${style.input}`}
              placeholder="academy..."
              value={state.academy}
            />
          </div>
          <div className={`${style.boxInput}`}>
            <label htmlFor="academy" className={`${style.label}`}>
              Course Code
            </label>
            <input
              type="text"
              name="course_code"
              id="academy"
              onChange={handleChange}
              className={`${style.input}`}
              placeholder="Kode Kelas..."
              value={state.course_code}
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
              <button
                type="submit"
                className={`bg-blue1 rounded-md ${
                  isLoading && "cursor-not-allowed"
                } p-2 cursor-pointer text-white font-sans font-semibold w-full`}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Create Course"}
              </button>
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
      </div>
    </ContainerModal>
  );
};
AddCourse.propTypes = {
  handleAddCourse: PropTypes.func.isRequired,
};
export default WithContainerModal(AddCourse);
