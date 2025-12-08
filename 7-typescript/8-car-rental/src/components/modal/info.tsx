import type { FC } from "react";
import type { Car } from "../../types";
import formatData from "../../utils/formatData";

interface Props {
  car: Car;
}

const Info: FC<Props> = ({ car }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold text-gradient">
        {car.make} {car.model}
      </h3>

      {formatData(car).map(([key, value]) => (
        <div
          key={key}
          className="flex justify-between items-center py-3 px-4 glass-dark rounded-xl border border-white/10 overflow-hidden"
        >
          <span className="capitalize text-grey-light">{key}</span>
          <span className="font-semibold capitalize text-white">
            {value === "T" || value === "Y"
              ? "Var"
              : value === "N"
              ? "Yok"
              : value || "-"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Info;
