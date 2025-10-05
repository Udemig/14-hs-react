import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleWatchList } from "../../redux/actions";

const WatchListButton = ({ movie }) => {
  const dispatch = useDispatch();

  // izlime listesi verisini reducer'dan al
  const { watchList } = useSelector((store) => store.watchList);

  // ekrana basılan film izleme listesinde var mı?
  const isAdded = watchList.find((item) => item.id === movie.id);

  // butona tıklanma olayında çalışır
  const handleClick = () => {
    dispatch(toggleWatchList(movie, !isAdded));
  };

  return (
    <button onClick={handleClick} className="hero-btn from-blue-600 to-blue-700 hover:shadow-blue-600/30">
      {!isAdded ? (
        <>
          <Plus className="size-5" />
          Listeye Ekle
        </>
      ) : (
        <>
          <Minus className="size-5" />
          Listeden Kaldır
        </>
      )}
    </button>
  );
};

export default WatchListButton;
