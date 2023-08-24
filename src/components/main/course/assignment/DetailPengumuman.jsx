import PropTypes from "prop-types";
import React from "react";

export default function DetailPengumuman({ pengumuman }) {
  return (
    <div>
      <div className="text-base font-sans text-blue1">
        {pengumuman.map((e, i) => (
          <React.Fragment key={i}>{e.konten}</React.Fragment>
        ))}
      </div>
    </div>
  );
}
DetailPengumuman.propTypes = {
  pengumuman: PropTypes.array.isRequired,
};
