import { Bookmark } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { watchList } = useSelector((store) => store.watchList);

  return (
    <header className="mb-10 flex justify-between items-center backdrop-blur-sm bg-black/30 px-5 md:px-10 lg:px-15 xl:px-20 py-4 border border-white/10 shadow-lg rounded-2xl">
      <Link to="/" className="transition-transform duration-300 hover:scale-105">
        <img src="/logo.svg" className="max-w-[150px]" />
      </Link>

      <Link
        to="/watch-list"
        className="flex gap-3 items-center hover:text-white transition-all duration-300 px-4 py-2 hover:bg-white/10 rounded-lg"
      >
        <div className="relative">
          <Bookmark />
          <span className="absolute right-[-13px] top-[-13px] bg-gradient-to-r from-red-500 to-red-600 size-6 grid place-items-center text-xs font-bold rounded-full shadow-lg shadow-red-500/50">
            {watchList.length}
          </span>
        </div>
        İzleme Listesi
      </Link>
    </header>
  );
};

export default Header;
