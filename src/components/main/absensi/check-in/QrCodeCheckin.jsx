import { useState } from "react";
import { QrReader } from 'react-qr-reader'; //sementara saja menunggu versi terbaru


export default function QrCodeCheckin() { 
 const [data, setData] = useState('No result');

  const handleResult = (result,error)=>{
    if(result){
      setData(result.text)
    }else{
      console.log(error)
    }
    
  }

  return (
    <div >
    <div className="w-full bg-blue1 text-lg text-white text-center ">{data}</div>

    <QrReader
        delay={300}
        onResult={handleResult}
        constraints={{facingMode:"environment"}}
        style={{ width: '100%' }}
      />
      
    </div>
  );
}
