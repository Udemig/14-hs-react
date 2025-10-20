import { useDispatch, useSelector } from "react-redux";
import c from "../../utils/null-check";
import { open } from "../../redux/slices/detailSlice";
import Error from "../../components/error";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, flights, error } = useSelector((store) => store.flight);

  // kaçıncı elemandan itibaren gösterilecek
  const [start, setStart] = useState(0);

  // sayfa başına ekrana basılacak satır sayısı
  const perPage = 12;

  // kaçıncı elemanada kadar gösterilecek
  const end = start + perPage;

  // slice methodu ile belirlediğimiz aralıktaki uçuşları al
  const currentFlights = flights.slice(start, end);

  // sayfa seçilince çalışır
  const handleChange = (e) => {
    setStart(e.selected * perPage);
  };

  if (error) return <Error message={error} />;

  return (
    <div className="list-container">
      <div className="table-responsive">
        <table className="table table-hover">
          <thead>
            <tr>
              <th>id</th>
              <th>Kod</th>
              <th>Enlem</th>
              <th>Boylam</th>
              <th>Derece</th>
              <th>Hız</th>
              <th>İrtifa</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {isLoading
              ? new Array(12).fill("").map((i, key) => (
                  <tr key={key}>
                    <td className="text-white">.</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              : currentFlights.map((flight) => (
                  <tr key={flight.flightId}>
                    <td>{c(flight.flightId)}</td>
                    <td>{c(flight.callsign)}</td>
                    <td>{c(flight.lat)}</td>
                    <td>{c(flight.lon)}</td>
                    <td>{c(flight.direction)}°</td>
                    <td>{c(flight.speed)} kt</td>
                    <td>{c(flight.altitude)} ft</td>
                    <td>
                      <button onClick={() => dispatch(open(flight.flightId))}>Detay</button>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>

        <div className="pagination-container">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={Math.ceil(flights.length / perPage)}
            pageRangeDisplayed={3}
            renderOnZeroPageCount={null}
            onPageChange={handleChange}
            className="pagination"
            pageClassName="page-item"
            previousClassName="page-item"
            nextClassName="page-item"
            pageLinkClassName="page-link"
            previousLinkClassName="page-link"
            nextLinkClassName="page-link"
            activeClassName="active"
          />
        </div>
      </div>
    </div>
  );
};

export default List;
