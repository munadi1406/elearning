import PropTypes from "prop-types";

export default function DetailTugas({ tugas }) {
  return (
    <>
      {tugas.map((e, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="text-sm font-sans text-blue1">
            Date : {new Date(e.fromDate).toLocaleString()} -
            {new Date(e.toDate).toLocaleString()}
          </div>
          <div className="text-sm font-sans text-blue1">
            File Soal : <a href="#">{e.file}</a>
          </div>
          <div className="text-sm font-sans text-blue1">
            Accept : {e.accept}
          </div>
          <div className="text-base font-sans text-blue1 flex gap-2">
            <div>Deskripsi Tugas : </div>
            <div>{e.deskripsi}</div>
          </div>
        </div>
      ))}
    </>
  );
}
DetailTugas.propTypes = {
  tugas: PropTypes.array.isRequired,
};
