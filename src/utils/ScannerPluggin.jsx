import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import PropTypes from 'prop-types'


const ScannerPluggin = ({qrCodeSuccessCallback}) => {
  useEffect(() => {
    let html5QrcodeScanner = new Html5QrcodeScanner("reader", {
      fps: 25,
      qrbox: 250,
      disableFlip:false
    });

    function onScanSuccess(decodedText, decodedResult) {
      // Handle on success condition with the decoded text or result.
    //   console.log(`Scan result: ${decodedText}`, decodedResult);
      // ...
      qrCodeSuccessCallback(decodedResult)
      
          html5QrcodeScanner.clear();
        
      // ^ this will stop the scanner (video feed) and clear the scan area.
    }

    html5QrcodeScanner.render(onScanSuccess);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div id={"reader"} className="flex justify-center items-center flex-col"/>;
};

ScannerPluggin.propTypes={
    qrCodeSuccessCallback:PropTypes.func.isRequired
}
export default ScannerPluggin;
