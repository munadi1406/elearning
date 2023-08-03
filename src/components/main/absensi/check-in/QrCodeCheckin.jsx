import { useState } from "react";
import ScannerPluggin from "../../../../utils/ScannerPluggin";

export default function QrCodeCheckin() {
  const [decodedText,setDecodedTex] = useState('result')
  const handleCodeSuccess = ({decodedText}) => {
    setDecodedTex(decodedText)
    // console.log(e)

  };
  return (
    <div >
    <div className="w-full bg-blue1 text-lg text-white text-center ">{decodedText}</div>
      <ScannerPluggin
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={handleCodeSuccess}
        aspectRatio={1.333334}
      />
    </div>
  );
}
