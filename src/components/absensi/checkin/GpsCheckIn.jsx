import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";
import { useState,useEffect } from "react";
import ButtonPure from '../../ButtonPure'

export default function GpsCheckIn() {
  const attendaceLocation = [51.505, -0.09];
  const radiusInMeters = 10;
  const [yourLocation, setYourLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [errorStatus, setErrorStatus] = useState(false);

  const getLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      showPosition(position);
    } catch (error) {
      showError(error);
    }
  };

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setYourLocation([Number(latitude), Number(longitude)]);
  };

  const showError = (error) => {
    setErrorStatus(true);
    if (error.PERMISSION_DENIED) {
      setErrorMsg(
        "Aplikasi memerlukan izin akses lokasi untuk berfungsi. Mohon izinkan akses lokasi melalui pengaturan perangkat Anda."
      );
    }else{
      setErrorMsg('connection error')
    }
  };

  useEffect(() => {
    getLocation();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="w-full h-max grid grid-cols-1 gap-2">
      {errorStatus && (
        <div className="bg-red-500 px-2 py-1 text-white font-sans text-xs rounded-md">
          {errorMsg}
        </div>
      )}
      <Map
        height={300}
        className="w-full"
        center={attendaceLocation}
        defaultZoom={11}
        provider={osm}
      >
        <Marker anchor={attendaceLocation} payload={1}>
          {/* Custom marker content (optional) */}
          <div
            style={{
              width: `${radiusInMeters * 5}px`,
              height: `${radiusInMeters * 5}px`,
              borderRadius: "50%",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
              position: "absolute",
              zIndex: -1,
              left: `-${radiusInMeters}px`,
              top: `-${radiusInMeters}px`,
            }}
          />
        </Marker>
        {/* <Marker width={50} anchor={attendaceLocation} payload={1} /> */}
        <Marker width={50} anchor={yourLocation} payload={1} />
      </Map>
      <ButtonPure text={"Check-in"}/>
    </div>
  );
}
