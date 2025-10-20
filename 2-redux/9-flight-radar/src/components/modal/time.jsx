import c from "../../utils/null-check";
import { formatDate as t } from "../../utils/helpers";

const Time = ({ timeData }) => {
  return (
    <div className="time">
      <div>
        <span>Planlanan</span>
        <span>{c(t(timeData?.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Planlanan</span>
        <span>{c(t(timeData?.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Gerçek.</span>
        <span>{c(t(timeData?.real?.departure))}</span>
      </div>
      <div>
        <span>Tahmini</span>
        <span>{c(t(timeData?.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;
