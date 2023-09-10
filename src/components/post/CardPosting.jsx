/* eslint-disable react-refresh/only-export-components */
import WithMotionWhileView from "../../utils/WithMotionWhileView";
import PropTypes from "prop-types";
import ButtonPure from "../ButtonPure";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDeletePost from "./ModalDeletePost";
import { useNavigate } from "react-router-dom";
import splitJudul from "../../utils/splitJudul";
import TextTruncate from "../../utils/TextTruncate";

const CardPosting = ({
  id_post,
  judul,
  pengumuman,
  tugas,
  statusUser,
  typePost,
  kuis,
}) => {
  const deskripsi = tugas[0] && tugas[0].deskripsi;

  const [isDelete, setIsDelete] = useState(false);

  const handleClose = () => {
    setIsDelete(false);
  };

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`tugas/${tugas[0].id_tugas}`);
  };

  function removeHtml(input) {
    const withoutTags = input.replace(/<[^>]*>/g, " ");
    const cleanedText = withoutTags.replace(/\s+/g, " ").trim();
    return cleanedText;
  }

  return (
    <>
      {isDelete && (
        <ModalDeletePost idPost={id_post} handleIsDelete={handleClose} />
      )}
      <div className="border-blue1 border-b-2 p-2 grid grid-cols-1 gap-2">
        <div className="flex justify-between items-center ">
          <Link
            to={`./post/${id_post}`}
            className="text-blue1 cursor-pointer font-2xl font-semibold font-sans hover:underline"
          >
            {typePost !== "Kuis" ? splitJudul(judul) : judul}
          </Link>
        </div>
        <div className="text-xs text-white font-sans bg-blue2 font-semibold px-3 py-1 rounded-full w-max">
          {typePost}
        </div>
        <div className="text-sm mt-3 text-blue1 break-words">
          {typePost === "Kuis" && kuis[0].deskripsi}
          {typePost === "Tugas" && (
            <TextTruncate text={removeHtml(deskripsi)} maxWords={50} />
          )}
          {typePost === "Pengumuman" && (
            <TextTruncate
              text={removeHtml(
                pengumuman[0].konten ? pengumuman[0].konten : ""
              )}
              maxWords={50}
            />
          )}
        </div>
        {statusUser === "instruktur" && (
          <div className="flex gap-2 flex-wrap">
            <ButtonPure text={"Edit"} />
            {typePost === "Tugas" && (
              <ButtonPure
                text={"Lihat Pengumpulan Tugas"}
                onClick={handleNavigate}
              />
            )}
            <ButtonPure
              text={"Delete"}
              color={"red-500"}
              onClick={() => setIsDelete(true)}
            />
          </div>
        )}
      </div>
    </>
  );
};

CardPosting.propTypes = {
  id_post: PropTypes.number.isRequired,
  judul: PropTypes.string.isRequired,
  pengumuman: PropTypes.array,
  tugas: PropTypes.array,
  deskripsi: PropTypes.string,
  statusUser: PropTypes.string.isRequired,
  typePost: PropTypes.string.isRequired,
  kuis: PropTypes.array,
};
export default WithMotionWhileView(CardPosting);
