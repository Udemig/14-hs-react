import { useEffect, useState } from "react";
import Hero from "./hero";
import api from "../../utils/api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import MovieList from "./movie-list";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [genres, setGenres] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/genre/movie/list?language=tr")
      .then((res) => setGenres(res.data.genres))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Hero />

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        genres.map((genre) => <MovieList key={genre.id} genre={genre} />)
      )}
    </div>
  );
};

export default Home;
