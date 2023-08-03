import { Map , Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";


export default function GpsCheckIn() {
  const attendaceLocation = [51.505, -0.09];
  const yourLocation = [51.505, -0.09];
  const radiusInMeters = 10;
  return (
    <div className="w-full h-full">
      <Map
      height={400}
        className="w-full h-full"
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
        <Marker width={50} anchor={attendaceLocation} payload={1} />
        <Marker width={50} anchor={yourLocation} payload={1} />
      </Map>
    </div>
  );
}
