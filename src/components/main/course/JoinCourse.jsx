/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../../utils/WithContainerModal";
import ScaleEffectMotion from "../../../utils/ScaleEffectMotion";
import ContainerModal from "../../ContainerModal";
import PropTypes from "prop-types";
import { useState } from "react";
import { useMutation } from "react-query";
import { joinCourse } from "../../../api/course";
import { useDataUser } from "../../../store/auth";

const JoinCourse = ({ handleShowJoinCouseModal }) => {
  const [token, setToken] = useState("");
  const idUsers = useDataUser((state) => state.idUsers);
  const [msg, setMsg] = useState("");

  const { isLoading, mutate } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      const joinCourses = await joinCourse(idUsers, token);
      return joinCourses;
    },
    onSuccess: () => {
        handleShowJoinCouseModal()
    },
    onError: (error) => {
      setMsg(error.response.data.message);
    },
  });
  return (
    <ContainerModal>
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
        <input
          type="text"
          name=""
          id="Academy"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="border-blue1 border outline-none w-full p-2 rounded-md text-sm"
          placeholder="Kode Kelas..."
        />
        <div className="w-full grid grid-rows-2 gap-2">
          <ScaleEffectMotion>
            <button
              type="submit"
              className={`bg-blue1 ${isLoading && 'opacity-50 cursor-not-allowed'}  rounded-md p-2 text-white font-sans font-semibold w-full`}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Join Course"}
            </button>
          </ScaleEffectMotion>
          <ScaleEffectMotion>
            <input
              type="reset"
              className="bg-cream1 rounded-md p-2 cursor-pointer text-white font-sans font-semibold w-full"
              value={"Close"}
              onClick={handleShowJoinCouseModal}
            />
          </ScaleEffectMotion>
        </div>
      </form>
    </ContainerModal>
  );
};
JoinCourse.propTypes = {
  handleShowJoinCouseModal: PropTypes.func.isRequired,
};
export default WithContainerModal(JoinCourse);
