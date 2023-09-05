/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../utils/WithContainerModal";
import ContainerModal from "../ContainerModal";
import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation } from "react-query";
import { joinCourse } from "../../api/course";
import { useNotification } from "../../store/strore";
import InputText from "../InputText";
import ButtonPure from "../ButtonPure";

const JoinCourse = ({ handleShowJoinCouseModal }) => {
  const [token, setToken] = useState();
  const [msg, setMsg] = useState("");
  const { setStatus, setMsgNotification, setStatusType } = useNotification();

  const { isLoading, mutate } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      const joinCourses = await joinCourse(token);
      return joinCourses;
    },
    onSuccess: (data) => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.message);
      handleShowJoinCouseModal();
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(false);
      setMsgNotification(error.response.data.message);
      setMsg(error.response.data.message);
    },
  });
  return (
    <ContainerModal>
      <div className="md:w-[500px] w-[85vw] flex flex-col gap-2">
        <div className="text-2xl font-sans text-blue1 font-semibold">
          Join Course
        </div>
        <div className="text-red-500 font-sans text-xs font-semibold w-full text-center">
          {msg}
        </div>
        <form
          className="w-full gap-2 flex justify-center items-center flex-col  h-2/3"
          onSubmit={mutate}
        >
          <InputText
            label={"Course Code"}
            onChange={(e) => setToken(e.target.value)}
            placeholder="Course Code..."
          />
          <div className="w-full flex gap-2 justify-center items-center">
            <ButtonPure
              text={isLoading ? "Loading..." : "Join Course"}
              style={`${isLoading && "opacity-50 cursor-not-allowed"}`}
              disabled={isLoading}
            />
            <ButtonPure
              text={"Close"}
              onClick={handleShowJoinCouseModal}
              type="reset"
              color={"red-500"}
            />
          </div>
        </form>
      </div>
    </ContainerModal>
  );
};
JoinCourse.propTypes = {
  handleShowJoinCouseModal: PropTypes.func.isRequired,
};
export default WithContainerModal(JoinCourse);
