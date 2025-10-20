import { MapContainer, Marker, Polyline, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from "react-redux";
import { getIcon } from "../../utils/helpers";
import { open } from "../../redux/slices/detailSlice";
import AirportMarker from "../../components/marker/airport-marker";
import { useEffect } from "react";
import { getFlights } from "../../redux/actions";

const Map = () => {
  const dispatch = useDispatch();
  const { flights } = useSelector((store) => store.flight);
  const { isLoading, info, route } = useSelector((store) => store.detail);

  // useEffect(() => {
  //   // her 5 saniyede bir api'dan güncel veriyi al
  //   const id = setInterval(() => dispatch(getFlights()), 5000);

  //   /// kullanıcı bu sayfadan ayrılınca intervalı durdur
  //   return () => clearInterval(id);
  // }, []);

  return (
    <MapContainer center={[38.957334, 35.404276]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Kalkış noktasını işareatle */}
      {!isLoading && info && <AirportMarker info={info?.airport?.origin} title="Kalkış" />}

      {/* Varış noktasını işareatle */}
      {!isLoading && info && <AirportMarker info={info?.airport?.destination} title="Varış" />}

      {/* Uçağın rotasını çiz */}
      {!isLoading && route && <Polyline positions={route} pathOptions={{ color: "red" }} />}

      {/* Uçakları listele */}
      {flights.map((flight) => (
        <Marker
          position={[flight.lat, flight.lon]}
          icon={getIcon(flight.direction, flight.flightId === info?.identification?.id, info?.identification?.id)}
        >
          <Popup>
            <div className="popup">
              <span>Kod: {flight.callsign}</span>
              <button onClick={() => dispatch(open(flight.flightId))}>Detay</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
