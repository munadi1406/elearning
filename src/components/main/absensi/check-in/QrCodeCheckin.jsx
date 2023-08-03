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
      console.log(data);
      setDecodedTex(data)
    }
  };

  return (
    <div >
    <div className="w-full bg-blue1 text-lg text-white text-center ">{toString(decodedText)}</div>

    <QrReader
        delay={300}
        onResult={handleScan}
        constraints={{facingMode:"environment"}}
        style={{ width: '100%' }}
      />
    </div>
  );
}
