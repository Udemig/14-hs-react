import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetails } from "../../redux/actions";
import Head from "./head";
import Loader from "../loader";
import Error from "../error";
import Aircraft from "./aircraft";
import Gallery from "./gallery";
import Airport from "./airport";
import Time from "./time";

const Modal = () => {
  const { flightId, isLoading, error, info } = useSelector((store) => store.detail);
  const dispatch = useDispatch();

  console.log(info);

  useEffect(() => {
    if (!flightId) return;

    dispatch(getDetails(flightId));
  }, [flightId]);

  // flightId state'i boş ise modalı gösterme
  if (!flightId) return;

  return (
    <div className="detail-modal">
      <div className="modal-inner">
        <Head isLoading={isLoading} error={error} info={info} />

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error message={error} />
        ) : (
          info && (
            <div className="info-wrapper">
              <div className="info-box">
                <div>
                  <Gallery images={info.aircraft.images} />
                  <Airport airportData={info.airport} />
                  <Time timeData={info.time} />
                </div>

                <Aircraft aircraftData={info.aircraft} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Modal;
