import PropTypes from "prop-types";
import ButtonPure from "../ButtonPure";
import { useNavigate } from "react-router-dom";

export default function BeforeSubmit({ judul, kuis, users }) {
  const navigate = useNavigate()
  const handleTakeQuiz = (idQuiz)=>{
    navigate(`../quiz/${idQuiz}`)
  }
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 ">
      <h1 className="text-blue1 font-medium font-sans text-xl">
        {judul} - {users.username}
      </h1>
      {kuis.map((e, i) => (
        <div key={i}>
          <div
            
            className="flex flex-col gap-3 justify-center items-center"
          >
            <h3 className="text-blue1 font-semibold text-xs font-sans bg-cream1 rounded-full px-3 py-1 w-max">
              {new Date(e.start_quiz).toLocaleString()} -{" "}
              {new Date(e.end_quiz).toLocaleString()}
            </h3>
            <h1 className="text-blue1 font-sans font-normal text-md text-center">
              {e.deskripsi}
            </h1>
          </div>
          <div className="flex">
            <ButtonPure text={"Kerjakan Sekarang"} onClick={()=>handleTakeQuiz(e.id_quiz)}/>
          </div>
        </div>
      ))}
    </div>
  );
}
BeforeSubmit.propTypes = {
  judul: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
  kuis: PropTypes.array.isRequired,
};
