import PropTypes from "prop-types";
import ButtonPure from "../ButtonPure";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { getEvaluateQuiz, getScore } from "../../api/quiz";
export default function BeforeSubmit({ judul, kuis, users }) {
  const navigate = useNavigate();
  const handleTakeQuiz = (idQuiz) => {
    navigate(`../quiz/${idQuiz}`);
  };

  const { data, isLoading } = useQuery(`score-${judul}`, {
    queryFn: async () => {
      const dataScore = await getScore(kuis[0].id_quiz);
      const dataEvaluate = await getEvaluateQuiz(kuis[0].id_quiz)
      return { dataScore: dataScore.data.data, dataEvaluate: dataEvaluate.data.data };
    },
  });

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 ">
      <h1 className="text-blue1 font-medium font-sans text-xl">
        {judul} - {users.username}
      </h1>
      {kuis.map((e, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col gap-3 justify-center items-center">
            <h3 className="text-blue1 font-semibold text-xs font-sans bg-cream1 rounded-full px-3 py-1 w-max">
              {new Date(e.start_quiz).toLocaleString()} -{" "}
              {new Date(e.end_quiz).toLocaleString()}
            </h3>
            <h1 className="text-blue1 font-sans font-normal text-md text-center">
              {e.deskripsi}
            </h1>
          </div>
          <div className="flex">
            <ButtonPure
              text={"Kerjakan Sekarang"}
              onClick={() => handleTakeQuiz(e.id_quiz)}
            />
          </div>
        </React.Fragment>
      ))}
      <div className="w-full flex justify-start items-center flex-col bg-white min-h-[400px] rounded-sm shadow-sm shadow-gray-600  p-2">
        <div className="flex gap-2 w-full bg-blue1/80 rounded-sm p-2 text-white justify-start items-center text-lg font-sans font-semibold ">
          <h1>Score Quiz :</h1>
          <h1>
            {data.dataScore.message ? data.dataScore.message : data.dataScore.score}
          </h1>
        </div>
        <div className="rounded-sm p-2 text-blue1 w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-semibold font-sans">Evaluasi Quiz</h1>
          <table className="border-collapse table-auto border-slate-500 w-full rounded-md ">
            <thead>
              <tr>
                <th className="border text-white font-semibold text-base bg-blue2">Soal</th>
                <th className="border text-white font-semibold text-base bg-blue2">Jawaban Anda</th>
                <th className="border text-white font-semibold text-base bg-blue2">Jawaban Yang Benar</th>
              </tr>
            </thead>
            <tbody>
              {data.dataEvaluate.map((e, i) => (
                <tr key={i}>
                  <td className=" p-2">{e.question.question}</td>
                  <td className={` text-center ${e.answerOption.answer_is_true ? 'bg-green-300' : 'bg-red-300'}`}>{e.answerOption.answer_option}</td>
                  <td className={` text-center ${e.question.answerOption[0].answer_is_true && 'bg-green-300'}`}>{e.question.answerOption[0].answer_option}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
BeforeSubmit.propTypes = {
  judul: PropTypes.string.isRequired,
  users: PropTypes.object.isRequired,
  kuis: PropTypes.array.isRequired,
};
