import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { detailQuestion, takeAQuiz } from "../../api/quiz";
import { useState } from "react";

export default function TakeQuiz() {
  const { idQuiz } = useParams();
  const [questionId, setQuestionId] = useState(0);
  const { data, isLoading, isFetched } = useQuery(`kuis-${idQuiz}`, {
    queryFn: async () => {
      const data = await takeAQuiz(idQuiz);
      const datas = data.data.data[0];
      return { ...datas };
    },
    onSuccess: (data) => {
      setQuestionId(data.kuis[0].question[0].id_question);
      console.log({ datas: data.kuis[0].question[0].id_question });
    },
    staleTime: Infinity,
  });


  const question = useQuery(
    ['question', { id: questionId }], // Set queryKey to include questionId
    {
      queryFn: async () => {
        console.log({ questionId });
        const data = await detailQuestion(questionId);
        return data.data.data;
      },
      staleTime: Infinity,
      enabled: !!questionId, // Enable the query when questionId is truthy
    }
  );

  if (isLoading) {
    return <>Memuat Soal...</>;
  }

  const hurufAbjad = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  return (
    <div className="flex p-2 gap-2">
      {console.log(question.data)}
      <div className="w-3/12 col-span-3 grid grid-cols-3 h-max">
        {data.kuis[0].question.map((e, i) => (
          <div
            key={i}
            onClick={() => setQuestionId(e.id_question)}
            className={` ${questionId === e.id_question ? "bg-blue1 text-white" : "text-blue1"
              } border-blue1 p-2 cursor-pointer border flex justify-center items-center   font-sans text-xs `}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="w-9/12 border-2 rounded-md p-2">
        <div>
          {question.isLoading ? (
            <>Memuat Soal...</>
          ) : (
            <>
              <div>{question.data.question}</div>
              {question.data.answerOption.map((e, i) => (
                <div key={i} className="flex gap-2 items-start justify-start ">
                  <div>
                    <input type="radio" id={e.id_answer_option} name={question.data.id_question} defaultChecked={false} />
                  </div>
                  <label className="capitalize" htmlFor={e.id_answer_option}>
                    {`${hurufAbjad[i]}. ${e.answer_option}`}
                  </label>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
