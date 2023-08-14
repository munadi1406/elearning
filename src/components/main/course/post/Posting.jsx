import { useState } from "react";
import { useDataUser } from "../../../../store/auth";
import ScaleEffectMotion from "../../../../utils/ScaleEffectMotion";
import { posting } from "../../../../api/course";
import { useMutation } from "react-query";
import { BsSend } from "react-icons/bs";
import PropTypes from "prop-types";

export default function Posting({
  courseId,
  handleIsShowCreateTugas,
  handleIsShowCreateAbsensi,
}) {
  const [pengumuman, setpengumuman] = useState("");
  const idUsers = useDataUser((state) => state.idUsers);

  const { mutate } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      await posting({
        id_users: String(idUsers),
        id_course: courseId,
        typePost: "Pengumuman",
        konten: pengumuman,
      });
    },
    onSuccess: () => {
      setpengumuman("");
    },
    onError: (error) => {
      console.log(error);
    },
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
              disabled={posting.isLoading}
              className="bg-blue1 rounded-md p-1 px-2 text-white"
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
