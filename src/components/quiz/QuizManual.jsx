import { Fragment } from "react";
import TextArea from "../TextArea";
import PropTypes from "prop-types";

export default function QuizManual({
  soalArray,
  opsiJawabanArray,
  handleInputChange,
}) {
  return (
    <>
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
    </>
  );
}
QuizManual.propTypes = {
  soalArray: PropTypes.array.isRequired,
  opsiJawabanArray: PropTypes.array.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};
