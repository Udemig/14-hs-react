import { useEffect, useState } from "react";
import InfoList from "../../components/home/info-list";
import RefreshButton from "../../components/home/refresh-button";
import Searchbar from "../../components/home/searchbar";
import coinApi from "../../services/coinApi";
import { Loader } from "lucide-react";
import CoinCard from "../../components/home/coin-card";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  // api'dan coin verilierini çeken fonksiyon
  const fetchCoins = () => {
    setLoading(true);

    coinApi
      .getTopCoins()
      .then((data) => {
        setCoins(data);
        setLastUpdated(new Date());
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  // component ekrana gelince verileri çek
  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="space-y-6">
      {/* Başlık */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">En popüler kripto para birimleri</p>
        </div>

        {/* Arama ve Yenileme */}
        <div className="flex items-center gap-5">
          <Searchbar />

          <RefreshButton />
        </div>
      </div>

      {/* Bilgiler */}
      <InfoList total={coins.length} lastUpdate={lastUpdated?.toLocaleTimeString()} />

      {/* Listeleme */}
      {loading && coins.length < 1 ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
