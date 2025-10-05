import { useEffect, useState } from "react";
import api from "../../utils/api";
import { BASE_IMG_URL } from "../../utils/constants";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const params = {
      with_genres: genre.id,
    };

    api.get("/discover/movie", { params }).then((res) => setMovies(res.data.results));
  }, []);

  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-5 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
        {genre.name}
      </h1>

      <Splide
        options={{
          gap: "20px",
          autoWidth: true,
          pagination: false,
          type: "loop",
        }}
      >
        {movies?.map((item) => (
          <SplideSlide>
            <Link to={`/movie/${item.id}`}>
              <img
                src={BASE_IMG_URL + item.poster_path}
                alt={item.title}
                className="max-w-[300px] cursor-pointer rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 border border-transparent hover:border-white/20"
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;
