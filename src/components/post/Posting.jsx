import { useState } from "react";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import { handlePostPengumuman } from "../../api/course";
import { useMutation } from "react-query";
import { BsSend } from "react-icons/bs";
import PropTypes from "prop-types";
import { useNotification } from "../../store/strore";

export default function Posting({
  courseId,
  handleIsShowCreateTugas,
  handleIsShowCreateAbsensi,
}) {
  const [pengumuman, setpengumuman] = useState("");
  const { setStatus, setMsgNotification,setStatusType } = useNotification();

  const { mutate, isLoading } = useMutation({
    mutationFn: async (e) => {
        e.preventDefault();
        await handlePostPengumuman({
          idCourse: courseId,
          konten: pengumuman,
        });
    },
    onSuccess: () => {
      setStatus(true);
      setStatusType(true)
      setMsgNotification("Pengumuman Berhasil Di Posting");
      setpengumuman("");
    },
    onError:(error)=>{
      setStatus(true);
      setStatusType(false)
      setMsgNotification(error.response.data.message[0]);
    }
  });
  return (
    <>
      <div className="bg-blue1 p-2 px-3 rounded-md flex w-full">
        <form
          action=""
          className="flex w-full bg-white rounded-md p-2 justify-center items-center"
          onSubmit={mutate}
        >
          <textarea
            cols="10"
            type="text"
            className="w-full bg-transparent border-none outline-none text-sm"
            placeholder="pengumuman..."
            value={pengumuman}
            onChange={(e) => setpengumuman(e.target.value)}
          ></textarea>
          <ScaleEffectMotion>
            <button
              type="submit"
              disabled={isLoading}
              className={`bg-blue1 rounded-md p-1 px-2 text-white ${
                isLoading ? "cursor-not-allowed opacity-80" : ""
              }`}
            >
              <BsSend />
            </button>
          </ScaleEffectMotion>
        </form>
      </div>
      <div className="w-full grid grid-cols-2 gap-2">
        <ScaleEffectMotion>
          <button
            className="w-full py-2 px-3 font-semibold rounded-md border-2 border-blue1 font-sans text-blue1 "
            onClick={handleIsShowCreateTugas}
          >
            Buat Tugas
          </button>
        </ScaleEffectMotion>
        <ScaleEffectMotion>
          <button
            className="w-full py-2 px-3 font-semibold rounded-md bg-blue1 font-sans text-white "
            onClick={handleIsShowCreateAbsensi}
          >
            Buat Absensi
          </button>
        </ScaleEffectMotion>
      </div>
    </>
  );
}
Posting.propTypes = {
  courseId: PropTypes.string.isRequired,
  handleIsShowCreateTugas: PropTypes.func.isRequired,
  handleIsShowCreateAbsensi: PropTypes.func.isRequired,
};
