import PropTypes from "prop-types";

export default function DetailTugas({ tugas }) {
  return (
    <>
      {tugas.map((e, i) => (
        <div key={i} className="grid grid-cols-5 w-full  gap-2" >
          <div className="col-span-1  text-sm font-sans font-semibold text-blue1">Date</div>
          <div className="col-span-4">
            <div className="text-sm font-sans text-blue1 flex gap-2">
              <div>
                {new Date(e.fromDate).toLocaleString()}
              </div>
              <div>
                -
              </div>
              <div>
                {new Date(e.toDate).toLocaleString()}
              </div>
            </div></div>
          <div className="col-span-1  text-sm font-sans font-semibold text-blue1">File</div>
          <div className="col-span-4"><div className="text-sm font-sans text-blue1">
            {e.file}
          </div></div>
          <div className="col-span-1  text-sm font-sans font-semibold text-blue1">Accept</div>
          <div className="col-span-4"><div className="text-sm font-sans text-blue1">
            {e.accept}
          </div></div>
          <div className="col-span-1  text-sm font-sans font-semibold text-blue1">Deskripsi</div>
          <div className="col-span-4"><div className="text-sm font-sans text-blue1">
            {e.deskripsi}
          </div></div>
        </div>
      ))}
    </>
  );
}
DetailTugas.propTypes = {
  tugas: PropTypes.array.isRequired,
};
