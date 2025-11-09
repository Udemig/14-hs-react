import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../redux/action";
import { useDispatch } from "react-redux";
import Header from "./header";
import Content from "./content";

const Detail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // asenkron thunk aksiyonunu tetikledik
    // api'dan veirleri alıp reducer'daki state'e aktarıcak
    dispatch(getDetails(country));
  }, []);

  return (
    <div className="flex-1 min-h-[calc(100vh-77px)] grid place-items-center p-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
      </div>

      <div className="bg-white/95 backdrop-blur-md border border-white/30 shadow-lg min-h-[65%] rounded-3xl py-8 px-10 max-w-4xl max-md:w-full md:w-[80%] relative z-10 animate-fade-in">
        <Header />

        <Content />
      </div>
    </div>
  );
};

export default Detail;
