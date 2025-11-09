import { MdKeyboardArrowLeft } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLoader from "../../components/loader/header-loader";

const Header = () => {
  const { isLoading, data } = useSelector((store) => store);

  return (
    <div className="flex justify-between items-center">
      <Link
        to="/"
        className="bg-linear-to-r from-gray-600 to-gray-700 p-3 pe-3 rounded-xl hover:from-gray-700 hover:to-gray-800 flex gap-2 text-white items-center shadow-md hover:shadow-lg transition-all duration-300 font-medium group"
      >
        <MdKeyboardArrowLeft className="group-hover:-translate-x-1 transition-all duration-300" />
        Geri
      </Link>

      {isLoading ? (
        <HeaderLoader />
      ) : (
        data && (
          <div className="flex items-center gap-4 animate-slide-up">
            <h1 className="text-2xl lg:text-3xl font-bold bg-linear-to-r from-blue-900 to-purple-900 bg-clip-text text-transparent">
              {data.country}
            </h1>

            <img
              src={data.flag.png}
              alt={data.flag.alt}
              className="w-16 h-12 object-cover rounded-lg shadow-md border-2 border-white"
            />
          </div>
        )
      )}
    </div>
  );
};

export default Header;
