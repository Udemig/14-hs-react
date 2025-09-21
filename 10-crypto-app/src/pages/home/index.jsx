import { useCallback, useEffect, useState, useMemo } from "react";
import InfoList from "../../components/home/info-list";
import RefreshButton from "../../components/home/refresh-button";
import Searchbar from "../../components/home/searchbar";
import coinApi from "../../services/coinApi";
import CoinCard from "../../components/home/coin-card";
import Loader from "../../components/loader";
import RefreshInfo from "../../components/home/refresh-info";
import Error from "../../components/error";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // api'dan coin verilierini çeken fonksiyon
  const fetchCoins = useCallback((isRefreshing = false) => {
    if (isRefreshing) {
      setRefreshing(true);
    } else {
      setLoading(true);
    }

    coinApi
      .getTopCoins()
      .then((data) => {
        setCoins(data);
        setLastUpdated(new Date());
        setError(null); // api'dan veri gelince error'u temizle
      })
      .catch((err) => setError(err.message))
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
  }, []);

  // component ekrana gelince verileri çek
  useEffect(() => {
    fetchCoins();
  }, []);

  // otomatik yenilenme - her 30sn de bir
  useEffect(() => {
    const id = setInterval(() => {
      fetchCoins(true);
    }, 30000);

    // component ekrandan ayrılınca intervalı temizle
    return () => clearInterval(id);
  }, []);

  // coin veya aratılan kelime her değişitiğinde filtrele
  const filtredCoins = useMemo(() => {
    // bir şey aratılmadıysa filtreleme yapma
    if (!searchTerm.trim()) return coins;

    // aratılan terimi küçük harfe çevir
    const term = searchTerm.toLowerCase();

    // filtreleme yap
    return coins.filter((coin) => coin.name.toLowerCase().includes(term) || coin.symbol.toLowerCase().includes(term));
  }, [coins, searchTerm]);

  // hata durumu
  if (error) return <Error message={error} refetch={fetchCoins} />;

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
          <Searchbar onSearch={setSearchTerm} />

          <RefreshButton fetchCoins={() => fetchCoins(true)} />
        </div>
      </div>

      {/* Bilgiler */}
      <InfoList total={coins.length} lastUpdate={lastUpdated?.toLocaleTimeString()} />

      {/* Listeleme */}
      {loading && coins.length < 1 ? (
        <Loader />
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtredCoins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}

      <RefreshInfo show={refreshing} />
    </div>
  );
};

export default Home;
