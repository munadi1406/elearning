import { useState } from "react";
// import ScannerPluggin from "../../../../utils/ScannerPluggin";
import { QrReader } from 'react-qr-reader';


export default function QrCodeCheckin() {
  const [decodedText,setDecodedTex] = useState('result')
  // const handleCodeSuccess = ({decodedText}) => {
  //   setDecodedTex(decodedText)
  //   // console.log(e)

  // };
  const [data, setData] = useState('No result');
  const handleResult = (e)=>{
   alert(e)
  }
  return (
    <div >
    <div className="w-full bg-blue1 text-lg text-white text-center ">{decodedText}</div>
    <QrReader
        onResult={handleResult}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
    </div>
  );
}
