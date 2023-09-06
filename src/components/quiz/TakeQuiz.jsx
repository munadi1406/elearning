import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { takeAQuiz } from "../../api/quiz";
import { useState } from "react";

export default function TakeQuiz() {
  const { idQuiz } = useParams();
  const [index, setIndex] = useState(0);
  const { data, isLoading } = useQuery(`kuis-${idQuiz}`, {
    queryFn: async () => {
      const data = await takeAQuiz(idQuiz);
      const datas = data.data.data[0];
      return { ...datas };
    },
    staleTime: Infinity,
  });
  if (isLoading) {
    return <>Loading...</>;
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
      {console.log(data)}
      <div className="w-3/12 col-span-3 grid grid-cols-3 h-max">
        {data.kuis[0].question.map((e, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={` ${
              i === index ? "bg-blue1 text-white" : "text-blue1"
            } border-blue1 p-2 cursor-pointer border flex justify-center items-center   font-sans text-xs `}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <div className="w-9/12 border-2 rounded-md p-2">
        <div>{data.kuis[0].question[index].question}</div>
        <div>
          {data.kuis[0].question[index].answerOption.map((e, i) => (
            <div key={i} className="flex gap-2 ">
              <input type="radio" id={i} name={index} value={e.id_answer_option} onChange={()=>console.log(e.answer_option)}/>
              <div>{hurufAbjad[i]}.</div>
              <label htmlFor={i}>{e.answer_option}</label>
            </div>
          ))}
        </div>
      </div>
      {/* {console.log(data)} */}
    </div>
  );
}
