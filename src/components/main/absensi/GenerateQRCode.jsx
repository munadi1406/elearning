import { QRCodeSVG } from "qrcode.react";
import PropTypes from "prop-types";
import Logo from "../../../assets/logo.png";

export default function GenerateQRCode({ value }) {
  return (
    <div className="bg-cream1 rounded-md p-2">
      <QRCodeSVG
        value={value}
        fgColor="#1D5D9B"
        bgColor="#F4D160"
        imageSettings={{
          src: Logo,
          width: 24,
          height: 24,
          excavate: true,
        }}
      />
    </div>
  );
}
GenerateQRCode.propTypes = {
  value: PropTypes.string.isRequired,
};
