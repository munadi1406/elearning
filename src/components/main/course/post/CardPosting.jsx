/* eslint-disable react-refresh/only-export-components */
import WithMotionWhileView from "../../../../utils/WithMotionWhileView";
import PropTypes from "prop-types";
import ButtonPure from "../../../ButtonPure";
import { Link } from "react-router-dom";
import { useState } from "react";
import ModalDeletePost from "./ModalDeletePost";
import { useNavigate } from "react-router-dom";

const CardPosting = ({
  id_post,
  judul,
  pengumuman,
  tugas,
  statusUser,
}) => {
  const deskripsi = tugas[0] && tugas[0].deskripsi;
  const words = judul.split(" "); 
  const startIdx = 1; 
  const extractedText = words.slice(startIdx).join(" ");
  const originalTime2 = new Date(`${extractedText}`);
  const time2 = `${originalTime2.toLocaleTimeString()} - ${originalTime2.toLocaleDateString()}`;

  const judull = `${words[0]} ${time2}`;
  const [isDelete,setIsDelete] = useState(false)

  const handleClose = ()=>{
    setIsDelete(false)
  }

  const navigate = useNavigate()
  const handleNavigate = ()=>{
      navigate(`tugas/${tugas[0].id_tugas}`)
  }

  return (
    <>
  {isDelete && <ModalDeletePost idPost={id_post} handleIsDelete={handleClose}/>}
    <div className="border-blue1 border-b-2 p-2 grid grid-cols-1 gap-2">
      <div className="flex justify-between items-center ">
        <Link
        to={`./post/${id_post}`}
          className="text-blue1 cursor-pointer font-2xl font-semibold font-sans hover:underline"
        >
          {judull}
        </Link>
      </div>
      <div className="text-sm mt-3 text-blue1 ">
        {pengumuman[0] ? pengumuman[0].konten : deskripsi}
      </div>
      {statusUser === "instruktur" && (
        <div className="flex gap-2">
          <ButtonPure text={"Edit"} />
          <ButtonPure text={"Lihat Pengumpulan Tugas"} onClick={handleNavigate}/>
          <ButtonPure text={"Delete"} color={"red-500"} onClick={()=>setIsDelete(true)}/>
        </div>
      )}
    </div>
    </>
  );
};

CardPosting.propTypes = {
  id_post:PropTypes.number.isRequired,
  judul: PropTypes.string.isRequired,
  pengumuman: PropTypes.array,
  tugas: PropTypes.array,
  deskripsi: PropTypes.string,
  statusUser:PropTypes.string.isRequired
};
export default WithMotionWhileView(CardPosting);
