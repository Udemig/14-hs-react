import { Plane } from "lucide-react";
import c from "../../utils/null-check";

const Aircraft = ({ aircraftData }) => {
  return (
    <div className="aircraft">
      <div className="aircraft-icon">
        <Plane />
      </div>

      <div className="aircraft-info">
        <p>
          <span className="title">Uçak Tipi</span>
          <span>{c(aircraftData?.model?.text)}</span>
        </p>

        <div>
          <p>
            <span className="title">Kuyruk Kodu</span>
            <span>{c(aircraftData?.registration)}</span>
          </p>
          <p>
            <span className="title">Ülke ID</span>
            <span>{c(aircraftData?.countryId)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aircraft;
