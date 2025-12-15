import { useEffect, useState } from "react";
import axios from "axios";

const ListClassic = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPlaces = () => {
    setLoading(true);

    axios
      .get("http://localhost:4001/api/places")
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchPlaces();
  }, []);

  return (
    <div>
      <button onClick={fetchPlaces}>Tekrar Dene</button>
    </div>
  );
};

export default ListClassic;
