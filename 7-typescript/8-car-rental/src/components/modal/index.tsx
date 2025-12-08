import type { FC } from "react";
import type { Car } from "../../types";
import Images from "./images";
import Info from "./info";

interface Props {
  car: Car;
  isOpen: boolean;
  close: () => void;
}

const Modal: FC<Props> = ({ car, isOpen, close }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-20 grid place-items-center">
          <div className="car-details-dialog-panel w-[95%] sm:min-w-[600px] min-h-[70vh]">
            <button
              onClick={close}
              className="car-details-close-btn cursor-pointer"
            >
              X
            </button>

            <Images car={car} />

            <Info car={car} />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
