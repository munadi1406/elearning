import { useState } from "react";
import { QrReader } from "react-qr-reader"; //sementara saja menunggu versi terbaru
import { FaCheckCircle, FaWindowClose } from "react-icons/fa";

export default function QrCodeCheckin() {
  const [data, setData] = useState("");
  const [qrCodeStatus, setQrCodeStatus] = useState(false);

  const handleResult = (result, error) => {
    if (result) {
      setQrCodeStatus(true);
      setData(result.text);
    } else {
      setQrCodeStatus(false);
      console.log(error);
    }
  };

  return (
    <div>
      {data.length > 0 && (
        <div className={`flex justify-center items-center gap-2 ${qrCodeStatus ? 'bg-green-600' :'bg-red-500'} w-full text-lg font-sans text-white font-semibold   rounded-md`}>
          {qrCodeStatus ? <FaCheckCircle /> : <FaWindowClose />}
          <div className="capitalize">
            {qrCodeStatus ? "check-in Success" : "check-in failed"}
          </div>
        </div>
      )}
      {!qrCodeStatus && (
        <QrReader
          delay={300}
          onResult={handleResult}
          constraints={{ facingMode: "environment" }}
          style={{ width: "100%" }}
        />
      )}
    </div>
  );
}
