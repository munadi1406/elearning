import PropTypes from "prop-types";


export default function DetailPengumuman({ pengumuman }) {
  return (
    <div>
    {pengumuman.map((e,i)=>(
      <div className="text-base font-sans text-blue1" key={i}>
        {e.konten}
      </div>
    ))}
    </div>
  );
}
DetailPengumuman.propTypes = {
  pengumuman: PropTypes.array.isRequired,
};
