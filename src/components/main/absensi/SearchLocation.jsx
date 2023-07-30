import { seacrhLocation } from "../../../api/map.js";
import { useState } from "react";
import { useSearchLocationStore } from "../../../store/search.js";

export default function SearchLocation() {
  const [dataSearch, setDataSearch] = useState([]);
  const { setSearch } = useSearchLocationStore();
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetStore = (e) => {
    setSearch(e);
  };

  return (
    <div className="w-full">
      <label htmlFor="lokasi" className={`${style.label}`}>
        Lokasi Absensi
      </label>
      <input
        type="search"
        id="lokasi"
        className={`${style.input}`}
        placeholder="Cari Lokasi Absensi..."
        onChange={getSearchLocation}
      />
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
              className="text-xs font-sans font-semibold text-blue1 rounded-md p-1 bg-cream1"
            >
              {e.display_name}
            </div>
          ))
        ) : (
          <div>Lokasi Tidak Di Temukan </div>
        )}
      </div>
    </div>
  );
}
