import { useState } from "react";
import { QrReader } from 'react-qr-reader'; //sementara saja menunggu versi terbaru


export default function QrCodeCheckin() {
  const [decodedText,setDecodedTex] = useState('result')
  const [data, setData] = useState('No result');

  return (
    <div >
    <div className="w-full bg-blue1 text-lg text-white text-center ">{toString(decodedText)}</div>

    <QrReader
        delay={300}
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }

          if (error) {
            console.info(error);
          }
        }}
        constraints={{facingMode:"environment"}}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
  );
}
