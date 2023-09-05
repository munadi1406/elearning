/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../utils/WithContainerModal";
import PropTypes from "prop-types";
import ContainerModal from "../ContainerModal";
import { useReducer, useState } from "react";
import generateRandomCode from "../../utils/generateRandomCode";
import { createCourse } from "../../api/course";
import { useMutation } from "react-query";
import { useNotification } from "../../store/strore";
import InputText from "../InputText";
import TextArea from "../TextArea";
import ButtonPure from "../ButtonPure";

const AddCourse = ({ handleAddCourse }) => {
  const [msg, setMsg] = useState([]);
  const { setStatus, setMsgNotification } = useNotification();

  const handleGenereteRandomCode = () => {
    try {
      const code = generateRandomCode();
      dispacth({ type: "course_code", course_code: code });
    } catch (error) {
      /* empty */
    }
  };

  const initialState = {
    course: "",
    desc_course: "",
    academy: "",
    course_code: "",
  };

  const reducer = (state, action) => {
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
      const data = await createCourse(state);
      return data;
    },
    onSuccess: (data) => {
      setStatus(true);
      setMsgNotification(data.data.message);
      handleAddCourse();
    },
    onError: (error) => {
      const errorArray = typeof error.response.data.message;
      const errorMsg =
        errorArray === "object"
          ? error.response.data.message
          : [error.response.data.message];
      setMsg(errorMsg);
    },
  });

  return (
    <ContainerModal>
      <div className="overflow-y-auto w-[85vw] md:w-[500px] h-[90vh]flex flex-col justify-center items-start gap-1">
        <div className="text-2xl  font-sans text-blue1 font-semibold w-full text-center">
          Add Course
        </div>
        <form
          className="w-full gap-2 flex justify-center items-center flex-col  h-2/3"
          onSubmit={mutate}
        >
          <div className="w-full flex justify-center items-center flex-col">
            {error && (
              <p className="text-red-500 text-xs font-sans">{msg[0]}</p>
            )}
          </div>
          <InputText
            label={"Course"}
            name="course"
            id="course"
            onChange={handleChange}
            placeholder="Course Name..."
            required
          />
          <TextArea
            label={"Description Course"}
            id="desc"
            onChange={handleChange}
            name="desc_course"
            placeholder="Description Course..."
            required
          />
          <InputText
            label={"Academy"}
            name="academy"
            onChange={handleChange}
            id="academy"
            placeholder="academy..."
            required
          />
          <InputText
            label={"Course Code"}
            name="course_code"
            id="academy"
            onChange={handleChange}
            placeholder="Kode Kelas..."
            value={state.course_code}
            required
          />
          <div
            className="text-xs fons-sans font-semibold text-blue1 hover:underline cursor-pointer"
            onClick={handleGenereteRandomCode}
          >
            Generate Random Code ?
          </div>

          <div className="flex gap-2 p-2">
            <ButtonPure
              text={isLoading ? "Loading..." : "Create Course"}
              disabled={isLoading}
              style={`${isLoading && "cursor-not-allowed opacity-75"}`}
            />
            <ButtonPure
              type="reset"
              text={"Close"}
              onClick={handleAddCourse}
              color={"cream1"}
            />
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
