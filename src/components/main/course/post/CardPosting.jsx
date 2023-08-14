/* eslint-disable react-refresh/only-export-components */
import WithMotionWhileView from "../../../../utils/WithMotionWhileView";
import PropTypes from "prop-types";

const CardPosting = ({
  judul,
  pengumuman_konten,
  created_at,
  showModalTugas,
}) => {
  const originalTime = new Date(`${created_at}`);
  const time = `${originalTime.toLocaleTimeString()} - ${originalTime.toLocaleDateString()}`;

  const words = judul.split(" "); // Pisahkan string menjadi array kata
  const startIdx = 1; // Kata kedua memiliki indeks 1 dalam array
  const extractedText = words.slice(startIdx).join(" "); // Gabungkan kembali kata-kata dari indeks kedua sampai akhir
  const originalTime2 = new Date(`${extractedText}`);
  const time2 = `${originalTime2.toLocaleTimeString()} - ${originalTime2.toLocaleDateString()}`;

  const judull = `${words[0]} ${time2}`

  return (
    <div className="border-blue1 border-b-2 p-2">
      <div className="flex justify-between items-center ">
        <div
          className="text-blue1 cursor-pointer font-2xl font-semibold font-sans hover:underline"
          onClick={showModalTugas}
        >
          {judull}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-blue1 font-sans text-xs">{time}</div>
        </div>
      </div>
      <div className="text-sm mt-3 text-blue1">{pengumuman_konten}</div>
    </div>
  );
};

CardPosting.propTypes = {
  judul: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  pengumuman_konten: PropTypes.string.isRequired,
  showModalTugas: PropTypes.func.isRequired,
};
export default WithMotionWhileView(CardPosting);
