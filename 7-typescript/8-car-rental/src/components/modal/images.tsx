import type { FC } from "react";
import type { Car } from "../../types";
import getImage from "../../utils/getImage";

interface Props {
  car: Car;
}

const Images: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="w-full h-50">
        <img
          src={getImage(car, undefined, true, false)}
          className="size-full object-cover rounded-md"
        />
      </div>

      <div className="flex gap-3 my-3">
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "29", undefined, false)}
            className="mx-auto object-contain"
          />
        </div>
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "33", undefined, false)}
            className="mx-auto object-contain"
          />
        </div>
        <div className="rounded flex-1 flex relative h-30 bg-primary-blue-100">
          <img
            src={getImage(car, "13", undefined, false)}
            className="mx-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
