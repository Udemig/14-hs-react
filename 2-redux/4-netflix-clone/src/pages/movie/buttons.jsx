import { Undo2 } from "lucide-react";
import { Link } from "react-router-dom";
import WatchListButton from "../../components/button/watch-list-button";

const Buttons = ({ movie }) => {
  return (
    <div className="flex mb-5 justify-between">
      <Link to={-1} className="hero-btn from-gray-600 to-gray-700! hover:bg-gray-700 shadow-gray-500/30 p-2">
        <Undo2 className="size-5" />
        Geri
      </Link>

      <WatchListButton movie={movie} />
    </div>
  );
};

export default Buttons;
