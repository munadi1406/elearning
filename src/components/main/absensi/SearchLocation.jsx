import { seacrhLocation } from "../../../api/map.js";
import { useState } from "react";
import { useSearchLocationStore } from "../../../store/search.js";
import ScaleEffectMotion from '../../../utils/ScaleEffectMotion'
import { useEffect } from "react";

export default function SearchLocation() {
  const [dataSearch, setDataSearch] = useState([]);
  const { setSearch } = useSearchLocationStore();
  const [isManualLocation, setIsManualLocation] = useState(false);
  const [newLocation, setNewLocation] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const dataLocationLocalStorage = JSON.parse(localStorage.getItem('lc')) ?? [];
  const style = {
    input:
      "w-full text-sm outline-none border border-blue1 rounded-md py-1 px-2 placeholder:text-sm",
    label: "text-sm font-semibold text-blue1",
  };
  const getSearchLocation = async (e) => {
    try {
      if (e.target.value.length > 3) {
        const { data } = await seacrhLocation(e.target.value);
        setDataSearch(data);
      } else {
        setDataSearch([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetStore = (e) => {
    setSearch(e);
  };

  const handleManualLocation = () => {
    setIsManualLocation(!isManualLocation)
  }

  const handleAddLocationManual = () => {
    const dataLocation =
    {
      newLocation,
      lat,
      lon
    }
    
    const existingData = localStorage.getItem('lc');
    let dataArray = existingData ? JSON.parse(existingData) : [];

    const locationExists = dataArray.some(item => item.newLocation === newLocation);
    if (!locationExists) {
      // If 'newLocation' does not exist, add it to the existing data array
      dataArray = [...dataArray, dataLocation];

      // Store the updated array back to localStorage
      localStorage.setItem('lc', JSON.stringify(dataArray));
    }
  };








  return (
    <div className="w-full">
      {!isManualLocation && (
        <>
          <label htmlFor="lokasi" className={`${style.label}`}>
            Cari Lokasi
          </label>
          <input
            type="search"
            id="lokasi"
            className={`${style.input}`}
            placeholder="Cari Lokasi Absensi..."
            onChange={getSearchLocation}
            autoComplete="none"
            disabled={isManualLocation}
          />
          {dataLocationLocalStorage.map((e,i) => (
          <div
            key={i}
            onClick={() =>
              handleSetStore({
                location: e.newLocation,
                lat: e.lat,
                lon: e.lon,
              })
            }
            className="text-xs  w-full cursor-pointer font-sans font-semibold text-blue1 rounded-md p-1 bg-cream1"
          >
            {e.newLocation}
          </div>
        ))}
        </>
      )}
      <div className="flex justify-center w-full items-center flex-col gap-2 p-2">
        {dataSearch.length > 0 ? (
          dataSearch.map((e, i) => (
            <div
              key={i}
              onClick={() =>
                handleSetStore({
                  location: e.display_name,
                  lat: e.lat,
                  lon: e.lon,
                })
              }
              className="text-xs w-full cursor-pointer font-sans font-semibold text-blue1 rounded-md p-1 bg-cream1"
            >
              {e.display_name}
            </div>
          ))
        ) : (
          <div>
            <div className="text-blue1 text-xs font-sans ">Lokasi Tidak Di Temukan. <span className="font-semibold hover:underline cursor-pointer" onClick={handleManualLocation}>Tambahkan Lokasi Secara Manual ?</span> Fitur GPS tidak akan berfungsi jika tidak ada lokasi yang di pilih</div>
            {isManualLocation && (
              <>
                <div className="w-full grid grid-cols-2 gap-2" >
                  <div className="flex flex-col col-span-full">
                    <label className={style.label}>Nama Lokasi</label>
                    <input type="text" value={newLocation} className={style.input} onChange={(e) => setNewLocation(e.target.value)} />
                  </div>
                  <div className="flex flex-col">
                    <label className={style.label}>Lat</label>
                    <input type="number" className={style.input} value={lat} onChange={(e)=>setLat(e.target.value)}/>
                  </div>
                  <div className="flex flex-col">
                    <label className={style.label}>Lon</label>
                    <input type="number" className={style.input} value={lon} onChange={(e)=>setLon(e.target.value)}/>
                  </div>
                  <div className="col-span-full flex justify-normal items-center gap-2">
                    <ScaleEffectMotion>
                      <input type="submit" className="p-2 w-max bg-blue1 rounded-md text-sm font-sans text-white font-semibold" value={"Add"} onClick={handleAddLocationManual} />
                    </ScaleEffectMotion>
                    <ScaleEffectMotion>
                      <button className="p-2 w-max bg-cream1 rounded-md text-sm font-sans text-white font-semibold" onClick={handleManualLocation}>Cancel</button>
                    </ScaleEffectMotion>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
