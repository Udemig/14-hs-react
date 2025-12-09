import { useEffect, useRef, useState, type FC } from "react";
import { fetchCars } from "../../service";
import type { Car } from "../../types";
import Loader from "../loader";
import Error from "../error";
import Container from "../container";
import Card from "./card";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";

const List: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[] | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  // url'deki arama parametrelerine eriş
  const make: string = searchParams.get("make") || "BMW";
  const model: string = searchParams.get("model") || "";
  const year: string = searchParams.get("year") || "";
  const page: string = searchParams.get("page") || "1";
  const limit: number = 12;

  // liste başındaki elementin referansı
  const firstCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(true);

    fetchCars(make, model, year, page, limit)
      .then((data) => {
        setCars(data.results);
        setTotalCount(data.total_count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [make, model, year, page]);

  if (loading)
    return (
      <Container>
        <Loader />
      </Container>
    );

  if (error)
    return (
      <Container>
        <Error message={error} />
      </Container>
    );

  return (
    <div className="padding-x max-width mb-10">
      <section className="home-cars-wrapper">
        <div className="absolute" ref={firstCardRef} />
        {cars?.length === 0 ? (
          <Container>
            <p className="text-center">Aradığınız araç bulunamadı</p>
          </Container>
        ) : (
          cars?.map((car) => <Card key={car.id} car={car} />)
        )}
      </section>

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        pageRangeDisplayed={5}
        pageCount={Math.ceil(totalCount! / limit)}
        previousLabel="<"
        className="pagination"
        renderOnZeroPageCount={null}
        initialPage={Number(page) - 1}
        onPageChange={(e) => {
          // yeni sayfayı url'e ekle
          searchParams.set("page", String(e.selected + 1));
          setSearchParams(searchParams);

          if (page !== "1") {
            // sayfanin başındaki elemente kaydır
            firstCardRef.current?.scrollIntoView();
          }
        }}
      />
    </div>
  );
};

export default List;
