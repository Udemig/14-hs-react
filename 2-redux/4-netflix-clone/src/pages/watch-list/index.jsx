import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { BASE_IMG_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import { BookmarkMinus } from "lucide-react";
import { toggleWatchList } from "../../redux/actions";

const WatchList = () => {
  const dispatch = useDispatch();
  const { loading, error, watchList } = useSelector((store) => store.watchList);

  const handleRemove = (movie) => {
    dispatch(toggleWatchList(movie, false));
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent mb-8">
        İzleme Listesi
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Error message={error} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-5 my-10">
          {watchList.map((movie) => (
            <div className="group relative" key={movie.id}>
              <button
                onClick={() => handleRemove(movie)}
                className="hidden group-hover:flex absolute top-3 end-3 bg-gradient-to-r from-red-500 to-red-600 p-2 rounded-lg z-10 hover:scale-110 transition-all duration-300 shadow-lg shadow-red-500/50 items-center justify-center cursor-pointer"
              >
                <BookmarkMinus className="size-4" />
              </button>

              <Link to={`/movie/${movie.id}`}>
                <img
                  src={BASE_IMG_URL + movie.poster_path}
                  alt={movie.title}
                  className="rounded-xl shadow-lg group-hover:scale-105 object-cover transition-all duration-300 border border-transparent group-hover:border-white/20 group-hover:shadow-2xl group-hover:shadow-white/20"
                />
              </Link>

              <h1 className="text-lg text-center font-semibold mt-3 group-hover:text-white transition-colors duration-300">
                {movie.title}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
