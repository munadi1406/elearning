import { useState } from "react";
import { QrReader } from 'react-qr-reader'; //sementara saja menunggu versi terbaru


export default function QrCodeCheckin() {
  const [decodedText,setDecodedTex] = useState('result')
  // const handleCodeSuccess = ({decodedText}) => {
  //   setDecodedTex(decodedText)
  //   // console.log(e)

  // };
  const handleScan = (data) => {
    if (data) {
      alert(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };
  return (
    <div >
    <div className="w-full bg-blue1 text-lg text-white text-center ">{decodedText}</div>
    <QrReader
         delay={300}
        onError={handleError}
        onScan={handleScan}
        constraints={{facingMode:"user"}}
        style={{ width: '100%' }}
      />
    </div>
  );
}
