import { useSearchLocationStore } from "../../../store/search";
import { Map as Maps, Marker } from "pigeon-maps";
import { osm } from 'pigeon-maps/providers'

export default function GPS() {
  const search = useSearchLocationStore((state) => state.search);
  const position = [search.lat ?? 51.505, search.lon ?? -0.09];
  const lat = search.lat
  const lon = search.lon
  const radiusInMeters = 10

  return (
    <div className="w-full overflow-auto flex justify-center items-center flex-col gap-2">
      <div className="text-sm font-sans text-blue1">
        Lokasi Absensi :{" "}
        <span className="font-semibold">{search.location}</span>
      </div>
      <div className="w-full ">
        <Maps height={300} className="w-full" center={position} defaultZoom={11} provider={osm}>
          <Marker anchor={[Number(lat),Number(lon)]} payload={1}>
            {/* Custom marker content (optional) */}
            <div
              style={{
                width: `${radiusInMeters * 5}px`,
                height: `${radiusInMeters * 5}px`,
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                position: 'absolute',
                zIndex:-1,
                left: `-${radiusInMeters}px`,
                top: `-${radiusInMeters}px`,
              }}
            />
          </Marker>
          <Marker width={50} anchor={[Number(lat),Number(lon)]} payload={1} />
        </Maps>
      </div>
    </div>
  );
}
