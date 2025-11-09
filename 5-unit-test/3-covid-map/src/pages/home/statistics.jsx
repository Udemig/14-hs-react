import { useEffect, useState } from "react";
import { totalApi } from "../../utils/api";
import Loader from "../../components/loader";
import Item from "./item";
import millify from "millify";

const Statistics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    totalApi
      .get("/reports/total")
      .then((res) => setData(res.data.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="container py-0">
      <div className="bg-white/95 backdrop-blur-md shadow-md rounded-2xl p-6 md:p-8 grid grid-cols-3 gap-5 mt-[-34px] -md:mt-12 animate-slide-up">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p className="col-span-3 text-center text-red-400 font-medium">Üzgünüz bir hata oluştu</p>
        ) : (
          data && (
            <>
              <Item color="text-pink-500" text="Toplam Vaka" value={millify(data.confirmed)} />
              <Item color="text-green-500" text="Aktif Vaka" value={millify(data.active)} />
              <Item color="text-gray-500" text="Toplam Vefat" value={millify(data.deaths)} />
            </>
          )
        )}
      </div>
    </div>
  );
};

export default Statistics;
