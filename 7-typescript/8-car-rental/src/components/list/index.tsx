import { useEffect, useState, type FC } from "react";
import { fetchCars } from "../../service";
import type { Car } from "../../types";

const List: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[] | null>(null);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  useEffect(() => {
    setLoading(true);

    fetchCars()
      .then((data) => {
        setCars(data.results);
        setTotalCount(data.total_count);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return <div>List</div>;
};

export default List;
