import { useMutation, useQuery } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { addAnswer, detailQuestion, takeAQuiz } from "../../api/quiz";
import { useState, useEffect, Fragment } from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { BiMenu } from "react-icons/bi";
import { useNotification } from "../../store/strore";
import ButtonPure from "../ButtonPure";
import { useCallback } from "react";
import { useDataUser } from "../../store/auth";

export default function TakeQuiz() {
  const { idQuiz } = useParams();
  const [questionId, setQuestionId] = useState(0);
  const navigate = useNavigate();
  const { setStatus, setStatusType, setMsgNotification } = useNotification();
  const [soalArray, setSoalArray] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading, isFetched } = useQuery(`kuis-${idQuiz}`, {
    queryFn: async () => {
      const data = await takeAQuiz(idQuiz);
      const datas = data.data.data;
      if (!sessionStorage.getItem("timeLeft")) {
        sessionStorage.setItem("timeLeft", datas.kuis[0].duration * 60);
      }
      return { ...datas };
    },
    onSuccess: (data) => {
      setSoalArray(data.kuis[0].question);
      setQuestionId(data.kuis[0].question[0].id_question);
    },
    onError: (error) => {
      if (error.response.status === 404) {
        setStatus(true);
        setStatusType(false);
        setMsgNotification(error.response.data.message);
        navigate("../");
      }
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
      staleTime: 50000,
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

  const handleChangeAnswer = useMutation({
    mutationFn: async (datas) => {
      const data = await addAnswer(datas);
      return data;
    },
    onSuccess: () => {},
  });

  const handleChangeQuestionId = useCallback(() => {
    if (soalArray) {
      setQuestionId(soalArray[currentIndex].id_question);
    }
  }, [soalArray, currentIndex]);

  useEffect(() => {
    handleChangeQuestionId();
  }, [handleChangeQuestionId]);

  const goToNext = () => {
    if (currentIndex < soalArray.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const { idUsers } = useDataUser((state) => state);
  const isAnswerLeter = () => {
    const storedData = localStorage.getItem(`answerLeter-${idQuiz}-${idUsers}`);
    const dataArray = storedData ? JSON.parse(storedData) : [];
    const currentIndexIndex = dataArray.indexOf(currentIndex);

    if (currentIndexIndex !== -1) {
      dataArray.splice(currentIndexIndex, 1);
    } else {
      // Jika currentIndex tidak ada dalam array, tambahkan ke dalam array
      dataArray.push(currentIndex);
    }

    // Simpan array yang telah diperbarui kembali ke localStorage
    localStorage.setItem(
      `answerLeter-${idQuiz}-${idUsers}`,
      JSON.stringify(dataArray)
    );
  };
  

  const currentIndexNavIsInLocalStorage = (index) => {
    const storedData = localStorage.getItem(`answerLeter-${idQuiz}-${idUsers}`);
    const dataArray = storedData ? JSON.parse(storedData) : [];
    return dataArray.includes(index);
  };

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
    <motion.div
      ref={constraintsRef}
      className="flex justify-start  items-start w-full p-2 gap-2 flex-wrap relative"
    >
      <div className="w-full bg-blue1 p-1 rounded-md text-white text-center capitalize">
        time Left {`${minutes}:${seconds}`}
      </div>
      <div className="w-full grid md:grid-cols-12 grid-cols-1 gap-2">
        <div className="col-span-3 md:grid grid-cols-3 h-max hidden">
          {data.kuis.map((dataKuis, i) => (
            <Fragment key={i}>
              {dataKuis.question.map((e, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setQuestionId(e.id_question);
                    setCurrentIndex(i);
                  }}
                  className={` ${
                    questionId === e.id_question
                      ? " text-blue1 underline-offset-4 underline font-bold"
                      : "text-blue1"
                  } ${
                    currentIndexNavIsInLocalStorage(i) ? "bg-cream1" : ""
                  }  border-blue1 p-2 cursor-pointer border flex justify-center items-center   font-sans text-xs `}
                >
                  {i + 1}
                </div>
              ))}
            </Fragment>
          ))}
        </div>
        {window.innerWidth < 650 && (
          <motion.div
            animate={
              onClick
                ? { width: "300px", height: "auto", borderRadius: "10px" }
                : { width: "50px", height: "50px", borderRadius: "50%" }
            }
            drag
            dragConstraints={constraintsRef}
            className="bg-blue1/80 flex justify-center items-center absolute overflow-clip z-50 "
          >
            {onClick ? (
              <div className="w-full grid grid-cols-3 p-2 ">
                <div
                  className="text-white text-xs border-2 flex-grow col-span-full cursor-pointer p-2 rounded-md bg-blue1/50 font-semibold text-center"
                  onClick={() => setOnClick(!onClick)}
                >
                  Close
                </div>
                {data.kuis[0].question.map((e, i) => (
                  <div
                    key={i}
                    onClick={() => setQuestionId(e.id_question)}
                    className={` ${
                      questionId === e.id_question ? " border-b-2" : ""
                    }  text-white font-semibold p-2 cursor-pointer flex justify-center items-center  font-sans text-xs `}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            ) : (
              <div
                className="w-full text-2xl text-white flex justify-center items-center cursor-pointer"
                onClick={() => setOnClick(!onClick)}
              >
                <BiMenu />
              </div>
            )}
          </motion.div>
        )}
        <div className="col-span-9 w-full border-2 rounded-md p-2 h-max">
          <div>
            {question.isLoading ? (
              <>Memuat Soal...</>
            ) : (
              <>
                <div>{question.data.question}</div>
                {question.data.answerOption.map((e, i) => (
                  <div
                    key={i}
                    className="flex gap-2 items-start justify-start "
                  >
                    <div>
                      <input
                        key={e.id_answer_option}
                        type="radio"
                        id={e.id_answer_option}
                        value={e.id_answer_option}
                        name={`question_${question.data.id_question}`}
                        defaultChecked={
                          question.data.answer &&
                          question.data.answer[0]?.id_answer_option ===
                            e.id_answer_option
                            ? true
                            : false
                        }
                        onChange={() =>
                          handleChangeAnswer.mutate({
                            id_quiz: idQuiz,
                            id_question: questionId,
                            id_answer_option: e.id_answer_option,
                          })
                        }
                      />
                    </div>
                    <label className="capitalize" htmlFor={e.id_answer_option}>
                      {`${hurufAbjad[i]}. ${e.answer_option}`}
                    </label>
                  </div>
                ))}
                <div className="flex justify-between mt-4">
                  <ButtonPure
                    onClick={goToPrev}
                    disabled={currentIndex === 0}
                    text={"Prev"}
                  />
                  <label>
                    <input
                      type="checkbox"
                      onChange={isAnswerLeter}
                      checked={currentIndexNavIsInLocalStorage(currentIndex)}
                    />
                    Tandai (Jawab Nanti)
                  </label>
                  <ButtonPure
                    text={"Next"}
                    onClick={goToNext}
                    disabled={currentIndex === soalArray.length - 1}
                    color={"green-600"}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
