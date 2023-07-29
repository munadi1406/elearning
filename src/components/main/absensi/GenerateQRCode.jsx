import { QRCodeCanvas } from "qrcode.react";
import PropTypes from "prop-types";

export default function GenerateQRCode({ value }) {
  return (
    <div>
      <QRCodeCanvas value={value} />
    </div>
  );
}
GenerateQRCode.propTypes = {
  value: PropTypes.string.isRequired,
};
