/* eslint-disable react-refresh/only-export-components */
import WithContainerModal from "../../utils/WithContainerModal";
import ScaleEffectMotion from "../../utils/ScaleEffectMotion";
import ContainerModal from "../ContainerModal";
import { useRef, useState } from "react";
import PropTypes from "prop-types";
import GPS from "./GPS";
import GenerateQRCode from "./GenerateQRCode";
import generateRandomCode from "../../utils/generateRandomCode";
import SearchLocation from "./SearchLocation";

const CreateAbsensi = ({ handleClose }) => {
  const [opsiAbsensi, setOpsiAbsensi] = useState([]);
  const tokenRef = useRef();

  const style = {
    input:
      "w-full text-sm outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
    label: "text-sm font-semibold text-blue1",
  };

  const handleChangeOpsiAbsensi = (e) => {
    const value = e.target.value;
    const isDataExists = opsiAbsensi.includes(value);
    if (isDataExists) {
      const updatedData = opsiAbsensi.filter((data) => data !== value);
      setOpsiAbsensi(updatedData);
    } else {
      setOpsiAbsensi([...opsiAbsensi, value]);
    }
  };

  const handleGenereteRandomCode = () => {
    try {
      tokenRef.current.value = generateRandomCode();
    } catch (error) {
      /* empty */
    }
  };

  return (
    <ContainerModal>
      <div className="max-h-[90vh] md:w-[800px] w-[85vw] overflow-y-auto grid md:grid-cols-3 grid-cols-2 gap-1">
        <form
          action=""
          className="flex col-span-2 justify-center h-max items-center flex-col w-full gap-5"
        >
          <div className="w-full">
            <label htmlFor="namaTugas" className={`${style.label}`}>
              Nama Absensi
            </label>
            <input
              type="text"
              id="namaTugas"
              className={`${style.input}`}
              placeholder="Nama Absensi..."
            />
          </div>
          <div className="w-full">
            <div className={style.label}>Opsi Absensi</div>
            <div className={`${style.input} w-full grid grid-cols-3`}>
              <div className="flex justify-start gap-2 items-center ">
                <label htmlFor="gps">GPS</label>
                <input
                  type="checkbox"
                  value={"gps"}
                  id="gps"
                  onChange={handleChangeOpsiAbsensi}
                />
              </div>
              <div className="flex justify-start gap-2 items-center ">
                <label htmlFor="qrcode">QR Code</label>
                <input
                  type="checkbox"
                  value={"qrcode"}
                  id="qrcode"
                  onChange={handleChangeOpsiAbsensi}
                />
              </div>
              <div className="flex justify-start gap-2 items-center ">
                <label htmlFor="token">Token</label>
                <input
                  type="checkbox"
                  value={"token"}
                  id="token"
                  onChange={handleChangeOpsiAbsensi}
                />
              </div>
            </div>
          </div>
          {opsiAbsensi.includes("gps") && <SearchLocation />}
          {opsiAbsensi.includes("token") && (
            <div className="w-full">
              <label htmlFor="token" className={`${style.label}`}>
                Token Absensi
              </label>
              <input
                type="text"
                id="token"
                className={`${style.input}`}
                placeholder="Token Absensi..."
                ref={tokenRef}
              />
              <div
                className="text-blue1 w-max text-xs font-sans font-semibold cursor-pointer hover:underline"
                onClick={handleGenereteRandomCode}
              >
                Generate Random Code ?
              </div>
            </div>
          )}
          <div className={`${style.input} w-full grid grid-cols-2`}>
            <div className="flex justify-start gap-2 items-center ">
              <label htmlFor="from-date" className={`${style.label}`}>
                From:
              </label>
              <input type="datetime-local" id="from-date" />
            </div>
            <div className="flex justify-start gap-2 items-center ">
              <label htmlFor="to-date" className={`${style.label}`}>
                To:
              </label>
              <input type="datetime-local" id="to-date" />
            </div>
          </div>
        </form>
        <div className="flex md:col-span-1 col-span-2 px-2 border-blue1 border rounded-md justify-center items-center flex-col">
        {opsiAbsensi.includes("gps") && <GPS />} 
          {opsiAbsensi.includes("qrcode") && (
            <GenerateQRCode value="jamalsarah" />
          )}
        </div>
        <div className="col-span-full w-full">
          <div className="grid grid-cols-1 w-full gap-2">
            <ScaleEffectMotion>
              <button className="bg-blue1 w-full p-2 rounded-md text-white font-sans font-semibold">
                Create
              </button>
            </ScaleEffectMotion>
            <ScaleEffectMotion>
              <button
                className="bg-cream1 w-full p-2 rounded-md text-white font-sans font-semibold"
                onClick={handleClose}
              >
                Close
              </button>
            </ScaleEffectMotion>
          </div>
        </div>
      </div>
    </ContainerModal>
  );
};

CreateAbsensi.propTypes = {
  handleClose: PropTypes.func.isRequired,
};
export default WithContainerModal(CreateAbsensi);
