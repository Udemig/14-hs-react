import { useState, type FC } from "react";
import type { Car } from "../../types";
import { getPrice } from "../../utils/getPrice";
import Info from "./info";
import Button from "../button";
import getImage from "../../utils/getImage";
import Modal from "../modal";

interface Props {
  car: Car;
}

const Card: FC<Props> = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <>
      <div className="car-card group">
        {/* Marka */}
        <h2 className="car-card-content-title">
          {car.make} {car.model}
        </h2>

        {/* Fiyat */}
        <div className="flex mt-6 text-[19px]">
          <span className="font-semibold">₺</span>
          <span className="text-[32px]">{getPrice(car)}</span>
          <span className="font-semibold self-end">/gün</span>
        </div>

        {/* Resim */}
        <div>
          <img
            src={getImage(car)}
            className="size-full object-contain min-h-[200px]"
          />
        </div>

        {/* Detaylar */}
        <div className="w-full">
          <div className="w-full group-hover:hidden">
            <Info car={car} />
          </div>

          <div className="hidden group-hover:block">
            <Button
              text="Daha Fazla"
              designs="w-full mt-[0.5px]"
              fn={() => setIsOpen(true)}
            />
          </div>
        </div>
      </div>

      <Modal car={car} isOpen={isOpen} close={close} />
    </>
  );
};

export default Card;
