import PropTypes from "prop-types";
import RenderHtml from "../../utils/RenderHtml";


export default function DetailPengumuman({ pengumuman }) {
  return (
    <div>
    {pengumuman.map((e,i)=>(
      <div className="text-base font-sans text-blue1" key={i}>
      <RenderHtml text={e.konten} />
      </div>
    ))}
    </div>
  );
}
DetailPengumuman.propTypes = {
  pengumuman: PropTypes.array.isRequired,
};
