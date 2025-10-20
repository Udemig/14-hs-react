import { Marker, Popup } from "react-leaflet";
import c from "../../utils/null-check";

const AirportMarker = ({ info, title }) => {
  console.log(info);

  return (
    <Marker position={[info?.position?.latitude, info?.position?.longitude]}>
      <Popup>
        <div className="airport-marker">
          <span>{title}</span>
          <span>{c(info?.name)}</span>

          <div className="positions">
            <span>{c(info?.position?.country?.name)}</span> /<span>{c(info?.position?.region?.city)}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default AirportMarker;
