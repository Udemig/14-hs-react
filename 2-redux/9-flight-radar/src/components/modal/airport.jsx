import c from "../../utils/null-check";

const Airport = ({ airportData }) => {
  return (
    <div className="airport">
      <div>
        <h2>{c(airportData.origin?.code?.iata)}</h2>
        <h3>{c(airportData.origin?.position?.region?.city)}</h3>
        <span>
          {c(airportData.origin?.timezone?.abbr)}
          <br />
          {c(airportData.origin?.timezone?.name)}
        </span>
      </div>

      <div className="airport-icon">
        <img src="/plane.svg" alt="plane" width={50} />
      </div>

      <div>
        <h2>{c(airportData.destination?.code?.iata)}</h2>
        <h3>{c(airportData.destination?.position?.region?.city)}</h3>
        <span>
          {c(airportData.destination?.timezone?.abbr)}
          <br />
          {c(airportData.destination?.timezone?.name)}
        </span>
      </div>
    </div>
  );
};

export default Airport;
