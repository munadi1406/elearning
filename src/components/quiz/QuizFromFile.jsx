import React from "react";
import TextArea from "../TextArea";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import { useNotification } from "../../store/strore";

export default function QuizFromFile({ handleInputChange, setSoalData, text }) {
  const [soal, setSoal] = useState([]);
  const [jawaban, setJawaban] = useState([]);
  const [jumlahOpsiJawaban,setJumlahOpsiJawaban] = useState();
  const {setStatus,setStatusType,setMsgNotification} = useNotification()
  const opsiJawabanArray = Array.from(
    { length: jumlahOpsiJawaban },
    (_, index) => index
  );

  const formatedSoal = async () => {
    if(!text) return 
    const blocks = text.split("[soal]");
    if(blocks.length <= 1){
        setStatus(true)
        setStatusType(false)
        setMsgNotification("Sepertinya Didalam File .txt anda tidak mengandung soal")
        return
    }
    const groupedAnswers = [];
    let currentQuestion = "";

    blocks.forEach((block) => {
      if (block.trim() !== "") {
        if (block.startsWith("[jawaban]")) {
          currentQuestion += "\n" + block.trim();
        } else {
          // Menyimpan jawaban yang telah dikumpulkan sebelumnya
          if (currentQuestion !== "") {
            groupedAnswers.push(currentQuestion);
          }
          // Memulai pertanyaan baru
          currentQuestion = block.trim();
        }
      }
    });
    // Menyimpan jawaban yang terakhir
    if (currentQuestion !== "") {
      groupedAnswers.push(currentQuestion);
    }
    const soalArray = [];
    const jawabanArray = [];
    groupedAnswers.map((e) => {
      const split = e.split("[jawaban]");
      let jwb = [];
      split.forEach((element, i) => {
        const cleanedElement = element.replace(/\r\n/g, "").trim();
        if (cleanedElement !== "") {
          if (i !== 0) {
            const answerIsTrue = cleanedElement.includes("[true]");
            const answerOption = cleanedElement.replace("[true]", "").trim();
            jwb.push({ answerOption, answerIsTrue });
          }
        }
      });
      jawabanArray.push(jwb);
      soalArray.push(split[0]);
      setJumlahOpsiJawaban(split.length - 1);
    });

    soalArray.map((e, soalIndex) => {
      setSoalData((prevData) => {
        prevData[soalIndex] = {
          question: e,
          answerOption: jawabanArray[soalIndex],
        };
        return [...prevData];
      });
    });
    setSoal(soalArray);
    setJawaban(jawabanArray);
  };

  useEffect(() => {
    formatedSoal();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <>
      {soal.map((e, i) => (
        <React.Fragment key={i}>
          <TextArea
            label={`Soal Ke ${i + 1}`}
            key={i}
            row={3}
            name={`soal-${i}`}
            defaultValue={e}
            onChange={handleInputChange}
            required={true}
          />
          {opsiJawabanArray.map((dataJawaban, index) => (
            <div
              className="grid grid-cols-6 w-full border-l-2 border-blue1"
              key={index}
            >
              <div className="col-span-1 flex flex-col justify-center items-center">
                <label
                  htmlFor={`jawaban${e}`}
                  className="text-xs text-blue1 text-center p-1"
                >
                  Click Jika Ini Jawaban Yang Benar
                </label>
                <input
                  type="radio"
                  name={`isTrue${i}`}
                  id={`jawabanId${index}`}
                  value={true}
                  defaultChecked={jawaban[i][index].answerIsTrue}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
              <TextArea
                wrapperStyle={"col-span-5"}
                label={`Jawaban Ke ${index + 1}`}
                name={`jawaban${index}-${i}`}
                defaultValue={jawaban[i][index].answerOption}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          ))}
        </React.Fragment>
      ))}
    </>
  );
}
QuizFromFile.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  setSoalData: PropTypes.func.isRequired,
  text: PropTypes.string,
};
