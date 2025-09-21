import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coinApi from "../../services/coinApi";
import Loader from "../../components/loader";
import Error from "../../components/error";
import CoinHeader from "../../components/detail/coin-header";
import CoinPrice from "../../components/detail/coin-price";
import CoinChartSection from "../../components/detail/coin-chart-section";
import CoinStats from "../../components/detail/coin-stats";
import CoinDescription from "../../components/detail/coin-description";
import RefreshInfo from "../../components/home/refresh-info";

const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(true);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);

  // coin detaylarını çekip state'i güncelleyen fonksiyon
  const fetchCoinDetails = useCallback(
    (isRefreshing = false) => {
      if (isRefreshing) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      coinApi
        .getCoinDetails(id)
        .then((data) => {
          setCoin(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
          setRefreshing(false);
        });
    },
    [id]
  );

  // sayfa yüklenince coin detay verisini çek
  useEffect(() => {
    fetchCoinDetails();
  }, []);

  // loading anında:
  if (loading) return <Loader />;

  // error anında:
  if (error) return <Error message={error} refetch={() => fetchCoinDetails()} />;

  return (
    <div className="space-y-6">
      <CoinHeader coin={coin} refetch={() => fetchCoinDetails(true)} refreshing={refreshing} />

      <CoinPrice coin={coin} />

      <CoinChartSection coin={coin} />

      <CoinStats coin={coin} />

      <CoinDescription coin={coin} />

      <RefreshInfo show={refreshing} />
    </div>
  );
};

export default Detail;
