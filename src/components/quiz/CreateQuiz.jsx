import { useState, Fragment } from "react";
import InputText from "../InputText";
import TextArea from "../TextArea";
import ButtonPure from "../ButtonPure";
import DateTimeRange from "../DateTimeRange";
import { useMutation } from "react-query";
import { createQuiz } from "../../api/quiz";
import { useParams } from "react-router-dom";
import { useNotification } from "../../store/strore";
import PropTypes from "prop-types";

export default function CreateQuiz({ handleClose }) {
  const [jumlahSoal, setJumlahSoal] = useState(0);
  const [jumlahOpsiJawaban, setJumlahOpsiJawaban] = useState(0);
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [duration, setDuration] = useState(0);
  const [startQuiz, setStartQuiz] = useState("");
  const [endQuiz, setEndQuiz] = useState("");
  const { courseId } = useParams();
  const { setStatus, setStatusType, setMsgNotification } = useNotification();

  const soalArray = Array.from({ length: jumlahSoal }, (_, index) => index);
  const opsiJawabanArray = Array.from(
    { length: jumlahOpsiJawaban },
    (_, index) => index
  );
  const [soalData, setSoalData] = useState([]);
  const handleInputChange = (event) => {
    const { name, value, id } = event.target;
    // Memeriksa apakah input merupakan input soal atau jawaban

    if (name.startsWith("soal")) {
      const soalIndex = parseInt(name.split("soal-")[1]);
      setSoalData((prevData) => {
        prevData[soalIndex] = { question: value, answerOption: [] };
        return [...prevData];
      });
    } else if (name.startsWith("jawaban")) {
      const soalIndex = parseInt(name.split("jawaban")[1].split("-")[1]);
      const jawabanIndex = parseInt(name.split("jawaban")[1].split("-")[0]);
      if (!soalData[soalIndex]) return;
      setSoalData((prevData) => {
        if (!prevData[soalIndex].answerOption[jawabanIndex]) {
          prevData[soalIndex].answerOption[jawabanIndex] = {
            answerOption: value,
            answerIsTrue: false,
          };
        } else {
          prevData[soalIndex].answerOption[jawabanIndex].answerOption = value;
        }
        return [...prevData];
      });
    } else if (name.startsWith("isTrue")) {
      const idSoal = name.split("isTrue")[1];
      const idJawaban = id.split("jawabanId")[1];
      if (!soalData[idSoal]) return;
      soalData[idSoal].answerOption.forEach((option, index) => {
        option.answerIsTrue = index.toString() === idJawaban ? true : false;
      });
      setSoalData(soalData);
    }
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: async (e) => {
      e.preventDefault();
      const dataPayload = {
        idCourse: courseId,
        judul,
        deskripsi,
        duration,
        startQuiz,
        endQuiz,
        dataQuiz: soalData,
      };
      const data = await createQuiz(dataPayload);
      return data;
    },
    onSuccess: (data) => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification(data.data.message);
      handleClose();
    },
    onError: (error) => {
      setStatus(true);
      setStatusType(true);
      setMsgNotification(error.response.data.message);
    },
  });
  return (
    <form className="grid grid-cols-1 gap-2" onSubmit={mutate}>
      <div className="flex justify-center items-center gap-2 w-full flex-col">
        <InputText
          label={"Nama Quiz"}
          placeholder={"Masukkan Nama Quiz"}
          required={true}
          onChange={(e) => setJudul(e.target.value)}
        />
        <TextArea
          label={"Deskripsi Quiz"}
          placeholder={"Masukkan Deskripsi Quiz"}
          required={true}
          onChange={(e) => setDeskripsi(e.target.value)}
        />
        <InputText
          type={"number"}
          label={"Lama Pengerjaan Quiz"}
          placeholder={"Masukkan Lama Pengerjaan Kuis Dalam Menit..."}
          required={true}
          onChange={(e) => setDuration(e.target.value)}
        />
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 w-full">
            <DateTimeRange dateFrom={setStartQuiz} dateTo={setEndQuiz} />
          </div>
          <InputText
            placeholder={"Masukkan Jumlah Soal "}
            label={"Jumlah Soal"}
            onChange={(e) => setJumlahSoal(e.target.value)}
            required={true}
          />
          <InputText
            placeholder={"Masukkan Jumlah Opsi Jawaban Di Setiap Soal"}
            label={"Jumlah Opsi Jawaban"}
            onChange={(e) => setJumlahOpsiJawaban(e.target.value)}
            required={true}
          />
        </div>
      </div>
      {soalArray.map((e) => (
        <Fragment key={e}>
          <TextArea
            label={`Soal Ke ${e + 1}`}
            key={e}
            row={3}
            name={`soal-${e}`}
            onChange={handleInputChange}
            required={true}
          />
          {opsiJawabanArray.map((jawabanI) => (
            <div
              className="grid grid-cols-6 w-full border-l-2 border-blue1"
              key={jawabanI}
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
                  name={`isTrue${e}`}
                  id={`jawabanId${jawabanI}`}
                  value={true}
                  onChange={handleInputChange}
                  required={true}
                />
              </div>
              <TextArea
                wrapperStyle={"col-span-5"}
                label={`Jawaban Ke ${jawabanI + 1}`}
                name={`jawaban${jawabanI}-${e}`}
                onChange={handleInputChange}
                required={true}
              />
            </div>
          ))}
        </Fragment>
      ))}
      {/* <div>{handleCreate()}</div> */}
      <div className="flex w-full">
        <ButtonPure
          text={isLoading ? "Loading..." : "Post Quiz"}
          style={`${isLoading && "cursor-not-allowed opacity-70"}`}
          disabled={isLoading}
        />
      </div>
    </form>
  );
}

CreateQuiz.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
