import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { detailQuestion, takeAQuiz } from "../../api/quiz";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import {BiMenu} from 'react-icons/bi'

export default function TakeQuiz() {
  const { idQuiz } = useParams();
  const [questionId, setQuestionId] = useState(0);
  const { data, isLoading, isFetched } = useQuery(`kuis-${idQuiz}`, {
    queryFn: async () => {
      const data = await takeAQuiz(idQuiz);
      const datas = data.data.data[0];
      if (!sessionStorage.getItem("timeLeft")) {
        sessionStorage.setItem("timeLeft", datas.kuis[0].duration * 60);
      }
      return { ...datas };
    },
    onSuccess: (data) => {
      setQuestionId(data.kuis[0].question[0].id_question);
    },
    staleTime: Infinity,
  });

  const question = useQuery(
    ["question", { id: questionId }], // Set queryKey to include questionId
    {
      queryFn: async () => {
        const data = await detailQuestion(questionId);
        return data.data.data;
      },
      staleTime: Infinity,
      enabled: !!questionId, // Enable the query when questionId is truthy
    }
  );

  const [timeLeft, setTimeLeft] = useState(); // Menggunakan nilai dari penyimpanan lokal atau nilai default
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (timeLeft > 0 && !quizFinished) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
        sessionStorage.setItem("timeLeft", timeLeft - 1); // Menyimpan sisa waktu ke penyimpanan lokal
      }, 1000); // Mengurangi durasi setiap 1 detik

      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setQuizFinished(true);
    }
  }, [timeLeft, quizFinished]);

  useEffect(() => {
    setTimeLeft(sessionStorage.getItem("timeLeft"));
  }, [isFetched]);

  const [onClick, setOnClick] = useState(false);
  const constraintsRef = useRef(null);

  // Mengonversi waktu ke format menit dan detik
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

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
    <motion.div ref={constraintsRef} className="flex p-2 gap-2 flex-wrap relative">
      <div className="w-full bg-blue1 p-1 rounded-md text-white text-center capitalize">
        time Left {`${minutes}:${seconds}`}
      </div>
      <div className="w-3/12 col-span-3 md:grid grid-cols-3 h-max hidden">
        {data.kuis[0].question.map((e, i) => (
          <div
            key={i}
            onClick={() => setQuestionId(e.id_question)}
            className={` ${
              questionId === e.id_question
                ? "bg-blue1 text-white"
                : "text-blue1"
            } border-blue1 p-2 cursor-pointer border flex justify-center items-center   font-sans text-xs `}
          >
            {i + 1}
          </div>
        ))}
      </div>
      <motion.div
        animate={onClick?{width:"300px",height:"auto",borderRadius:"10px"}:{width:"50px",height:"50px",borderRadius:"50%"}}
        drag
        dragConstraints={constraintsRef}
        className="bg-blue1/80 flex justify-center items-center absolute overflow-clip md:hidden "
        
      >
      {onClick ? (
        <div className="w-full grid grid-cols-3 p-2 ">
        <div className="text-white text-xs border-2 flex-grow col-span-full p-2 rounded-md bg-blue1/50 font-semibold text-center" onClick={()=>setOnClick(!onClick)}>Close</div>
        {data.kuis[0].question.map((e, i) => (
          <div
            key={i}
            onClick={() => setQuestionId(e.id_question)}
            className={` ${
              questionId === e.id_question
                ? " border-b-2"
                : ""
            }  text-white font-semibold p-2 cursor-pointer flex justify-center items-center  font-sans text-xs `}
          >
            {i + 1}
          </div>
        ))}
        </div>
      ):(
      <div className="w-full text-2xl text-white flex justify-center items-center" onClick={()=>setOnClick(!onClick)}>
        <BiMenu/>
      </div>
      )}
      </motion.div>

      <div className="md:w-8/12 w-full border-2 rounded-md p-2">
        <div>
          {question.isLoading ? (
            <>Memuat Soal...</>
          ) : (
            <>
              <div>{question.data.question}</div>
              {question.data.answerOption.map((e, i) => (
                <div key={i} className="flex gap-2 items-start justify-start ">
                  <div>
                    <input
                      key={e.id_answer_option}
                      type="radio"
                      id={e.id_answer_option}
                      name={`question_${question.data.id_question}`}
                    />
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
    </motion.div>
  );
}
